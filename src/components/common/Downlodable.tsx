import React, { useRef, useImperativeHandle, forwardRef } from "react";
import html2canvas from "html2canvas";
import Ticket from "./Ticket";

interface DownloadableTicketProps {
  name: string;
  location: string;
  date: string;
  userName: string;
  quantity: number;
  large?: boolean;
  ticketType: "regular" | "vip" | "vvip";
  onDownloadStart?: () => void;
  onDownloadComplete?: () => void;
  onError?: (error: Error) => void;
}

export interface TicketRef {
  downloadTicket: () => Promise<void>;
}

const DownloadableTicket = forwardRef<TicketRef, DownloadableTicketProps>(
  (
    {
      name,
      location,
      date,
      userName,
      quantity,
      large = false,
      ticketType,
      onDownloadStart,
      onDownloadComplete,
      onError,
    },
    ref
  ) => {
    const ticketRef = useRef<HTMLDivElement>(null);

    const downloadTicket = async () => {
      if (!ticketRef.current) return;

      try {
        onDownloadStart?.();

        const canvas = await html2canvas(ticketRef.current, {
          backgroundColor: null,
          scale: 2,
          logging: false,
          useCORS: true,
        });

        const image = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.href = image;
        link.download = `ticket-${name.toLowerCase().replace(/\s+/g, "-")}.png`;
        link.click();

        onDownloadComplete?.();
      } catch (error) {
        console.error("Error generating ticket image:", error);
        onError?.(error as Error);
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
