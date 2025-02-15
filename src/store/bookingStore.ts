import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import type {
  CurrentBooking,
  Ticket,
  TicketType,
  PersonalDetails,
} from "@/types";

interface BookingState {
  currentStep: number;
  currentBooking: CurrentBooking;
  tickets: Ticket[];
  isBookingComplete: boolean;
  error: string | null;
  _hasHydrated: boolean;
}

interface BookingActions {
  setHasHydrated: (state: boolean) => void;

  // Navigation actions
  setStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;

  // Booking actions
  initializeBooking: (
    eventId: string,
    eventName: string,
    location: string
  ) => void;
  setTicketType: (type: TicketType, price: number) => void;
  setQuantity: (quantity: number) => void;
  setPersonalDetails: (details: PersonalDetails) => void;
  updateCurrentBooking: (data: Partial<CurrentBooking>) => void;

  // Completion actions
  confirmBooking: () => void;
  createTicket: () => void;
  resetBooking: () => void;
  deleteUserTicket: (id: string) => void;

  // Error handling
  setError: (error: string | null) => void;
}

const initialBookingState: BookingState = {
  _hasHydrated: false,
  currentStep: 1,
  currentBooking: {
    eventId: "t0",
    eventName: "",
    eventLocation: "",
    ticketType: "regular",
    quantity: 1,
    totalPrice: 0,
    personalDetails: {
      name: "",
      email: "",
      profilePic: "",
      details: "",
    },
  },
  tickets: [],
  isBookingComplete: false,
  error: null,
};

const useBookingStore = create<BookingState & BookingActions>()(
  persist(
    (set, get) => ({
      // Initial state
      ...initialBookingState,

      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),

      // Navigation actions
      setStep: (step) => {
        if (step >= 1 && step <= 3) {
          set({ currentStep: step });
        }
      },

      nextStep: () => {
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 3),
        }));
      },

      previousStep: () => {
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        }));
      },

      // Booking actions
      initializeBooking: (eventId, eventName, eventLocation) => {
        set(() => ({
          currentBooking: {
            ...initialBookingState.currentBooking,
            eventId,
            eventName,
            eventLocation,
          },
          currentStep: 1,
          isBookingComplete: false,
          error: null,
        }));
      },

      setTicketType: (type, price) => {
        set((state) => ({
          currentBooking: {
            ...state.currentBooking,
            ticketType: type,
            totalPrice: price * state.currentBooking.quantity,
          },
        }));
      },

      setQuantity: (quantity) => {
        set((state) => ({
          currentBooking: {
            ...state.currentBooking,
            quantity,
            totalPrice: state.currentBooking.ticketType
              ? quantity *
                (state.currentBooking.totalPrice /
                  state.currentBooking.quantity)
              : 0,
          },
        }));
      },

      setPersonalDetails: (details) => {
        set((state) => ({
          currentBooking: {
            ...state.currentBooking,
            personalDetails: details,
          },
        }));
      },

      updateCurrentBooking: (data) => {
        set((state) => ({
          currentBooking: {
            ...state.currentBooking,
            ...data,
          },
        }));
      },

      // Completion actions
      confirmBooking: () => {
        set((state) => ({
          tickets: [...state.tickets],
          currentBooking: initialBookingState.currentBooking,
          currentStep: 1,
          isBookingComplete: true,
          error: null,
        }));
      },

      createTicket: () => {
        const { currentBooking } = get();

        if (!currentBooking.ticketType) {
          set({ error: "Invalid ticket type" });
          return false;
        }

        const newTicket: Ticket = {
          id: nanoid(),
          ...currentBooking,
          ticketType: currentBooking.ticketType,
          bookingDate: new Date().toISOString(),
        };

        set((state) => ({
          ...state,
          tickets: [...state.tickets, newTicket],
        }));

        return true;
      },

      resetBooking: () => {
        set({
          ...initialBookingState,
          tickets: get().tickets,
        });
      },

      deleteUserTicket: (id) => {
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== id),
        }));
      },

      setError: (error) => {
        set({ error });
      },
    }),
    {
      name: "booking-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
export const useHydration = () =>
  useBookingStore((state) => state._hasHydrated);

export default useBookingStore;
