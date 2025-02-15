"use client";
import { useRouter } from "next/navigation";
import useEventsStore from "@/store/eventsStore";
import useBookingStore from "@/store/bookingStore";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Banner from "@/components/common/Banner";

const Home = () => {
  const router = useRouter();
  const events = useEventsStore((state) => state.events);
  const isHydrated = useEventsStore((state) => state._hasHydrated);
  const { initializeBooking } = useBookingStore();

  const handleEventSelect = (
    eventId: string,
    eventName: string,
    eventLocation: string
  ) => {
    initializeBooking(eventId, eventName, eventLocation);
    router.push("/booking");
  };

  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="container max-w-[700px] mx-auto py-16">
      <h1 className="text-3xl text-center font-bold mb-8">Upcoming Events</h1>

      <div className="flex flex-col gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="flex flex-col  text-[#fafafa] bg-[#08252b]"
          >
            <CardContent className="flex-grow">
              <div className="space-y-6 mt-6">
                <div
                  className=" cursor-pointer"
                  onClick={() =>
                    handleEventSelect(
                      event.id,
                      event.eventName,
                      event.location || ""
                    )
                  }
                >
                  <Banner
                    name={event.eventName}
                    location={event.location || ""}
                    date={event.date}
                    description={event.description}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Available Tickets:</h3>
                  <ul className="space-y-2">
                    {Object.entries(event.ticketTypes).map(
                      ([type, details]) => (
                        <li key={type} className="flex justify-between">
                          <span className="capitalize">{type}</span>
                          <span className="font-medium">
                            {!!details.price ? `$${details.price}` : "free"} (
                            {details.quantity} left)
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className="w-full"
                onClick={() =>
                  handleEventSelect(
                    event.id,
                    event.eventName,
                    event.location || ""
                  )
                }
                disabled={Object.values(event.ticketTypes).every(
                  (t) => t.quantity === 0
                )}
              >
                {Object.values(event.ticketTypes).every((t) => t.quantity === 0)
                  ? "Sold Out"
                  : "Book Tickets"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
