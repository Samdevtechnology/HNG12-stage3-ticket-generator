export type TicketType = "regular" | "vip" | "vvip";

export type TicketDetailsType = {
  price: number;
  quantity: number;
  benefits: string[];
};

export type Event = {
  id: string;
  eventName: string;
  date: string;
  location?: string;
  description: string;
  image: string;
  ticketTypes: Record<TicketType, TicketDetailsType>;
};

export interface PersonalDetails {
  name: string;
  email: string;
  profilePic?: string;
  details?: string;
}

export interface CurrentBooking {
  eventId: string;
  eventName: string;
  eventLocation: string;
  ticketType: TicketType | null;
  quantity: number;
  totalPrice: number;
  personalDetails: PersonalDetails;
}

export interface Ticket extends Omit<CurrentBooking, "ticketType"> {
  id: string;
  ticketType: TicketType;
  bookingDate: string;
}
