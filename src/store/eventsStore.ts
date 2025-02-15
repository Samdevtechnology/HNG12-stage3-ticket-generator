import { create } from "zustand";
import { persist } from "zustand/middleware";
import eventsData from "@/lib/events.json";
import type { Event, TicketType } from "@/types";

type EventsStore = {
  events: Event[];
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  getEventById: (id: string) => Event | undefined;
  checkTicketAvailability: (
    eventId: string,
    ticketType: TicketType,
    quantity: number
  ) => boolean;
  decreaseTicketQuantity: (
    eventId: string,
    ticketType: TicketType,
    quantity: number
  ) => void;
  restoreTicketQuantity: (
    eventId: string,
    ticketType: TicketType,
    quantity: number
  ) => void;
};

const useEventsStore = create<EventsStore>()(
  persist(
    (set, get) => ({
      events: eventsData.tickets,

      _hasHydrated: false,

      setHasHydrated: (state) => set({ _hasHydrated: state }),

      getEventById: (id) => get().events.find((event) => event.id === id),

      checkTicketAvailability: (eventId, ticketType, quantity) => {
        const event = get().getEventById(eventId);
        return event
          ? event.ticketTypes[ticketType].quantity >= quantity
          : false;
      },

      decreaseTicketQuantity: (eventId, ticketType, quantity) =>
        set((state) => ({
          events: state.events.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  ticketTypes: {
                    ...event.ticketTypes,
                    [ticketType]: {
                      ...event.ticketTypes[ticketType],
                      quantity:
                        event.ticketTypes[ticketType].quantity - quantity,
                    },
                  },
                }
              : event
          ),
        })),
      restoreTicketQuantity: (eventId, ticketType, quantity) => {
        set((state) => ({
          events: state.events.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  ticketTypes: {
                    ...event.ticketTypes,
                    [ticketType]: {
                      ...event.ticketTypes[ticketType],
                      quantity:
                        event.ticketTypes[ticketType].quantity + quantity,
                    },
                  },
                }
              : event
          ),
        }));
      },
    }),
    {
      name: "events-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export const useEventsHydration = () =>
  useEventsStore((state) => state._hasHydrated);

export default useEventsStore;
