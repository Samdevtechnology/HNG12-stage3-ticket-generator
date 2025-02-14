// import Ticket from "@/components/common/Ticket";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useBookingStore from "@/store/bookingStore";
import useEventsStore from "@/store/eventsStore";
import { Download, Trash2 } from "lucide-react";
import { useRef } from "react";
import DownloadableTicket, { TicketRef } from "@/components/common/Downlodable";

type TicketDetailsProps = {
  id: string;
  eventId: string;
  userName: string;
  quantity: number;
  ticketType: "regular" | "vip" | "vvip";
};
const TicketDetails = ({
  id,
  eventId,
  userName,
  quantity,
  ticketType,
}: TicketDetailsProps) => {
  const event = useEventsStore((state) => state.getEventById(eventId));
  const { deleteUserTicket } = useBookingStore();

  const ticketRef = useRef<TicketRef>(null);

  const handleDownload = () => {
    ticketRef.current?.downloadTicket();
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            size="sm"
            className="text-red-400 w-full sm:w-fit border-red-400 hover:border-red-300  hover:text-red-300"
            onClick={() => deleteUserTicket(id)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Button
            size="sm"
            className="w-full sm:w-fit"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        <Separator className="my-4" />
      </div>
      <div className="sm:sr-only">
        <DownloadableTicket
          ref={ticketRef}
          name={event.eventName}
          location={event.location || ""}
          date={event.date}
          quantity={quantity}
          ticketType={ticketType}
          userName={userName}
          onDownloadStart={() => console.log("Download started")}
          onDownloadComplete={() => console.log("Download completed")}
          onError={(error) => console.error("Download failed:", error)}
        />
      </div>
      <div className="px-5 sr-only sm:not-sr-only">
        <DownloadableTicket
          ref={ticketRef}
          name={event.eventName}
          location={event.location || ""}
          date={event.date}
          quantity={quantity}
          large
          ticketType={ticketType}
          userName={userName}
          onDownloadStart={() => console.log("Download started")}
          onDownloadComplete={() => console.log("Download completed")}
          onError={(error) => console.error("Download failed:", error)}
        />
      </div>
    </div>
  );
};

export default TicketDetails;
