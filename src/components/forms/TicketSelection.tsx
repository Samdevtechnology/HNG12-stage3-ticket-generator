import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useEventsStore, { useEventsHydration } from "@/store/eventsStore";
import useBookingStore, { useHydration } from "@/store/bookingStore";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useEffect } from "react";
import Banner from "../common/Banner";
import { TicketType } from "@/types";

const ticketTypeSchema = z.object({
  ticketType: z.enum(["regular", "vip", "vvip"]),
  quantity: z.number().int().min(1).max(5),
});

interface TicketTypeFormProps {
  onNext: () => void;
  onBack: () => void;
}

export function TicketTypeForm({ onNext, onBack }: TicketTypeFormProps) {
  const { setQuantity, setTicketType, currentBooking } = useBookingStore();
  const isHydrated = useHydration();
  const isEventsHydrated = useEventsHydration();

  const event = useEventsStore((state) =>
    state.getEventById(currentBooking.eventId)
  );

  const form = useForm<z.infer<typeof ticketTypeSchema>>({
    resolver: zodResolver(ticketTypeSchema),
    mode: "onChange",
    defaultValues: {
      ticketType: currentBooking.ticketType || "regular",
      quantity: Number(currentBooking.quantity) || 2,
    },
  });

  useEffect(() => {
    if (isHydrated && event?.id) {
      form.reset({
        ticketType: currentBooking.ticketType || "regular",
        quantity: currentBooking.quantity || 1,
      });
    }
  }, [isHydrated, event?.id, form, currentBooking]);

  // console.log("🚀 ~ TicketTypeForm ~ isHydrated:", isHydrated);
  if (!isHydrated || !isEventsHydrated || !form) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!event) return <div>NO Event</div>;

  const onSubmit = () => {
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="flex flex-col max-w-[700px] text-[#fafafa] p-6 sm:p-12 gap-8 border rounded-[40px] border-[#0e464f] bg-[#041e23]">
            <header>
              <div className="flex mb-3 gap-3 sm:gap-0 justify-between items-start sm:items-center">
                <div className="font-jeju  text-2xl sm:text-[32px]">
                  Ticket Selection
                </div>
                <div>Step 1/3</div>
              </div>
              <Progress value={100 / 3} />
            </header>
            <div className="flex flex-col gap-8 p-6 rounded-[32px] border border-[#0e464f] bg-[#08252b]">
              <Banner
                name={event.eventName}
                location={event.location || ""}
                date={event.date}
                description={event.description}
              />

              <Separator />

              <FormField
                control={form.control}
                name="ticketType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="leading-6 text-base font-normal">
                      Select Ticket Type:
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={async (value) => {
                          const type = value as TicketType;
                          field.onChange(type);
                          const isValid = await form.trigger("ticketType");
                          if (isValid) {
                            const price = event.ticketTypes[type].price;
                            setTicketType(type, price);
                          }
                        }}
                        value={field.value}
                        className="flex flex-col sm:grid grid-flow-row grid-cols-2 p-4 border rounded-3xl border-[#07373f] bg-[#052228]  gap-6"
                      >
                        {Object.entries(event.ticketTypes).map(
                          ([type, details]) => (
                            <FormItem key={type}>
                              <div className="flex items-center">
                                <FormControl>
                                  <RadioGroupItem
                                    value={type}
                                    className="peer sr-only"
                                  />
                                </FormControl>
                                <FormLabel className="flex w-full justify-between p-2 rounded-xl border border-[#07373f] transition-colors peer-data-[state=checked]:bg-[#197686] peer-data-[state=checked]:border-[#197686] hover:bg-[#197686] hover:border-[#197686] cursor-pointer">
                                  <div className="text-[#fafafa] flex flex-col gap-1">
                                    <h6 className="uppercase leading-6">
                                      {type} Access
                                    </h6>
                                    <p className="text-sm">
                                      {details.quantity} left!
                                    </p>
                                  </div>

                                  <div className="flex justify-end items-center leading-6 p-2 w-20 text-xl font-semibold border rounded-[8px] border-[#2ba4b9] bg-[#0e464f] ">
                                    {!!details.price
                                      ? `$${details.price}`
                                      : "Free"}
                                  </div>
                                </FormLabel>
                              </div>
                            </FormItem>
                          )
                        )}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="leading-6 text-base font-normal">
                      Number of Tickets
                    </FormLabel>
                    <Select
                      value={field.value?.toString()}
                      onValueChange={async (value) => {
                        const numericValue = Number(value);
                        field.onChange(numericValue);
                        const isValid = await form.trigger("quantity");
                        if (isValid) {
                          setQuantity(numericValue);
                        }
                      }}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col-reverse font-jeju  sm:flex-row gap-4 sm:gap-8 sm:px-12 sm:bg-[#041e23] sm:border rounded-3xl border-[#0e464f]">
                <Button
                  className="w-full py-3 px-6 text-base"
                  variant="outline"
                  type="button"
                  onClick={onBack}
                >
                  Cancel
                </Button>
                <Button className="w-full py-3 px-6 text-base">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
