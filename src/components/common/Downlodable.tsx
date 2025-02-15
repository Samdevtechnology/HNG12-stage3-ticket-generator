import React, { useRef, useImperativeHandle, forwardRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Ticket from "./Ticket";

interface DownloadableTicketProps {
  name: string;
  location: string;
  date: string;
  userName: string;
  quantity: number;
  large?: boolean;
  ticketType: "regular" | "vip" | "vvip";
}

export interface TicketRef {
  downloadTicket: () => Promise<void>;
}

const DownloadableTicket = forwardRef<TicketRef, DownloadableTicketProps>(
  (
    { name, location, date, userName, quantity, large = false, ticketType },
    ref
  ) => {
    const ticketRef = useRef<HTMLDivElement>(null);

    const downloadTicket = async () => {
      if (!ticketRef.current) return;

      try {
        const canvas = await html2canvas(ticketRef.current, {
          backgroundColor: null,
          scale: 2,
          logging: false,
          useCORS: true,
        });

        const image = canvas.toDataURL("image/png", 1.0);
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(image, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`ticket-${name.toLowerCase()}.pdf`);
      } catch (error) {
        console.error("Error generating ticket image:", error);
      }
    };

    useImperativeHandle(ref, () => ({
      downloadTicket,
    }));

    return (
      <div ref={ticketRef} className="bg-transparent">
        <Ticket
          name={name}
          location={location}
          date={date}
          userName={userName}
          quantity={quantity}
          large={large}
          ticketType={ticketType}
        />
      </div>
    );
  }
);

DownloadableTicket.displayName = "DownloadableTicket";

export default DownloadableTicket;
