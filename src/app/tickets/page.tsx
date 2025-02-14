// "use client";

// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import useBookingStore from "@/store/bookingStore";
// import { Separator } from "@/components/ui/separator";
// import TicketDetails from "./components/TicketDetails";
// import CollapsibleProfile from "./components/AttendeeDetails";

// export function TicketListPage() {
//   const { tickets } = useBookingStore();

//   if (tickets.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
//         <Card className="w-full max-w-[700px] bg-[#041e23] border-[#0e464f]">
//           <CardContent className="flex flex-col items-center justify-center p-12">
//             <h2 className="text-2xl font-alatsi mb-4">No Tickets Found</h2>
//             <p className="text-[#fafafa]">
//               You haven&#39;t purchased any tickets yet.
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="py-6">
//       <Card className="w-full max-w-[700px] mx-auto bg-[#041e23] border-[#0e464f]">
//         <CardHeader>
//           <CardTitle className="font-jeju text-[#fafafa] text-center text-3xl">
//             My Tickets
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {tickets.map((ticket) => (
//             <Card
//               key={ticket.id}
//               className="bg-[#08252b] border-[#0e464f] hover:border-[#197686] transition-colors"
//             >
//               <CardContent className="p-6">
//                 <div className="flex justify-center items-center">
//                   <TicketDetails
//                     id={ticket.id}
//                     eventId={ticket.eventId}
//                     quantity={ticket.quantity}
//                     ticketType={ticket.ticketType}
//                     userName={ticket.personalDetails.name}
//                   />
//                 </div>
//                 <Separator className="my-4" />

//                 <CollapsibleProfile
//                   imageUrl={ticket.personalDetails.profilePic}
//                   name={ticket.personalDetails.name}
//                   email={ticket.personalDetails.email}
//                 />
//               </CardContent>
//             </Card>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default TicketListPage;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
