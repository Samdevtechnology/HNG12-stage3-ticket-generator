import useEventsStore from "@/store/eventsStore";
import useBookingStore from "@/store/bookingStore";

import { Button } from "@/components/ui/button";
import Ticket from "../common/Ticket";
import { Progress } from "../ui/progress";

// components/forms/TicketSummaryForm.tsx
export function TicketSummaryForm({
  onConfirm,
  onReset,
}: {
  onConfirm: () => void;
  onReset: () => void;
}) {
  const { currentBooking } = useBookingStore();
  const event = useEventsStore((state) =>
    state.getEventById(currentBooking.eventId)
  );

  if (!event) return <h1>No Event</h1>;
  if (!currentBooking.ticketType) return <h1>No ticketType</h1>;

  return (
    <div>
      <div className="flex flex-col max-w-[700px] p-12 gap-8 border rounded-[40px] border-[#0e464f] bg-[#041e23]">
        <header>
          <div className="flex mb-3 justify-between items-center">
            <div className="font-jeju text-white text-2xl sm:text-[32px]">
              Ready
            </div>
            <div>Step 3/3</div>
          </div>
          <Progress value={(100 / 3) * 3} />
        </header>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-center items-start sm:items-center gap-4">
            <h3 className="text-2xl sm:text-[32px] font-alatsi">
              Your Ticket is Booked!
            </h3>
            <p className="leading-6 text-[#fafafa]">
              You can download or Check your email for a copy
            </p>
          </div>

          <div className="sm:sr-only pt-8 pb-6">
            <Ticket
              name={event.eventName}
              location={event.location || ""}
              date={event.date}
              quantity={currentBooking.quantity}
              ticketType={currentBooking.ticketType}
              userName={currentBooking.personalDetails.name}
            />
          </div>
          <div className="px-5 sr-only sm:not-sr-only pt-8 pb-6">
            <Ticket
              name={event.eventName}
              location={event.location || ""}
              date={event.date}
              large
              quantity={currentBooking.quantity}
              ticketType={currentBooking.ticketType}
              userName={currentBooking.personalDetails.name}
            />
          </div>

          <div className="flex flex-col-reverse font-jeju  sm:flex-row gap-4 sm:gap-8 sm:px-12 sm:bg-[#041e23] sm:border rounded-3xl border-[#0e464f]">
            <Button
              onClick={onReset}
              className="w-full py-3 px-6 text-base"
              variant="outline"
            >
              Book Another Ticket
            </Button>
            <Button onClick={onConfirm} className="w-full py-3 px-6 text-base">
              Download Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
