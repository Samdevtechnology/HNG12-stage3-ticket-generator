// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import type { Ticket } from "@/types";

// type TicketsStore = {
//   tickets: Ticket[];
//   addUserTicket: (ticket: Ticket) => void;
//   removeUserTicket: (id: string) => void;
// };

// // Add persistence middleware if needed
// const useTicketsStore = create<TicketsStore>()(
//   persist(
//     (set) => ({
//       tickets: [],
//       addUserTicket: (ticket) =>
//         set((state) => ({ tickets: [...state.tickets, ticket] })),
//       removeUserTicket: (id) =>
//         set((state) => ({
//           tickets: state.tickets.filter((ticket) => ticket.id !== id),
//         })),
//     }),
//     {
//       name: "tickets-storage",
//     }
//   )
// );

// export default useTicketsStore;
