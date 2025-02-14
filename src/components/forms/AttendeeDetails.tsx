import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useBookingStore, { useHydration } from "@/store/bookingStore";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { Progress } from "../ui/progress";
import ImageUpload from "../common/ImageUpload";
import { useEffect } from "react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// components/forms/PersonalDetailsForm.tsx
const personalDetailsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  profilePic: z.string().min(1, "Profile Pic is required"),
  details: z.string().min(1, "Project Detail is required"),
});

export function PersonalDetailsForm({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { updateCurrentBooking, currentBooking, createTicket } =
    useBookingStore();
  const isHydrated = useHydration();

  const form = useForm<z.infer<typeof personalDetailsSchema>>({
    resolver: zodResolver(personalDetailsSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      profilePic: "",
      details: "",
    },
  });

  useEffect(() => {
    if (isHydrated && currentBooking.personalDetails) {
      form.reset(currentBooking.personalDetails);
    }
  }, [isHydrated, currentBooking.personalDetails, form]);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  const onSubmit = () => {
    createTicket();
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <div className="flex flex-col max-w-[700px] text-[#fafafa] p-6 sm:p-12 gap-8 border rounded-[40px] border-[#0e464f] bg-[#041e23]">
            <header>
              <div className="flex mb-3 justify-between items-center">
                <div className="font-jeju text-white text-2xl sm:text-[32px]">
                  Attendee Details
                </div>
                <div>Step 2/3</div>
              </div>
              <Progress value={(100 / 3) * 2} />
            </header>
            <div className="flex flex-col gap-8 p-6 rounded-[32px] text-[#fafafa] sm:border sm:border-[#0e464f] sm:bg-[#08252b]">
              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="profilePic"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <ImageUpload
                            label="Upload Profile Photo"
                            onChange={(image: string) => {
                              field.onChange(image);
                              updateCurrentBooking({
                                personalDetails: {
                                  ...currentBooking.personalDetails,
                                  profilePic: image,
                                },
                              });
                            }}
                            onBlur={field.onBlur}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <Separator />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal">
                        Enter your name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Avioflagos"
                          className={cn(
                            `border-[#07373f]`,
                            form.formState.errors.name?.message &&
                              "placeholder:text-destructive/60"
                          )}
                          {...field}
                          onChange={async (e) => {
                            field.onChange(e);
                            const isValid = await form.trigger("name");
                            if (isValid) {
                              updateCurrentBooking({
                                personalDetails: {
                                  ...currentBooking.personalDetails,
                                  name: e.target.value,
                                },
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal">
                        Enter your email *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="hello@avioflagos.io"
                            className={cn(
                              `border-[#07373f] placeholder:text-[#aaa] pl-10`,
                              form.formState.errors.email?.message &&
                                "placeholder:text-destructive/60"
                            )}
                            {...field}
                            onChange={async (e) => {
                              field.onChange(e);
                              const isValid = await form.trigger("email");
                              if (isValid) {
                                updateCurrentBooking({
                                  personalDetails: {
                                    ...currentBooking.personalDetails,
                                    email: e.target.value,
                                  },
                                });
                              }
                            }}
                          />
                          <Mail
                            className={cn(
                              `absolute left-2 top-1/2 transform -translate-y-1/2`,
                              form.formState.errors.email?.message &&
                                "text-destructive"
                            )}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal">
                        About the project
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Textarea"
                          className={cn(
                            `border-[#07373f] h-32 placeholder:text-[#aaa]`,
                            form.formState.errors.details?.message &&
                              "placeholder:text-destructive/60"
                          )}
                          {...field}
                          onChange={async (e) => {
                            field.onChange(e);
                            const isValid = await form.trigger("details");
                            if (isValid) {
                              updateCurrentBooking({
                                personalDetails: {
                                  ...currentBooking.personalDetails,
                                  details: e.target.value,
                                },
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col-reverse font-jeju  sm:flex-row gap-4">
                <Button
                  className="w-full py-3 px-6 text-base"
                  variant="outline"
                  type="button"
                  onClick={onBack}
                >
                  Back
                </Button>
                <Button type="submit" className="w-full py-3 px-6 text-base">
                  Get My Free Ticket
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
