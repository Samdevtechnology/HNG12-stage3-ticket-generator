import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[700px] mx-auto py-16">
      <Card className="flex flex-col  text-[#fafafa] bg-[#08252b]">
        <CardContent className="pt-6 flex-grow">
          <div className="space-y-6">
            <h3>Event Ticket Booking UI – Open Source Practice Project 🎟️</h3>
            <div className="space-y-5">
              <h5>Overview</h5>

              <p>
                This is a beginner-friendly yet practical Event Ticket Booking
                UI designed for developers to clone, explore, and build upon.
                The design focuses on a seamless, login-free ticket reservation
                flow, allowing users to book event tickets quickly and
                efficiently.
              </p>
              <p>
                The project consists of a three-step ticket booking flow, and
                developers can extend it further by integrating payment
                solutions, user authentication (optional), and ticket validation
                systems.
              </p>
            </div>
            <div className="space-y-5">
              <h5>Flow & Features</h5>

              <div>
                <h6>1️⃣ Ticket Selection</h6>
                <ul className="list-disc ml-7">
                  <li>Users can browse available tickets (Free & Paid).</li>
                  <li>Ticket options are displayed in a list or card view.</li>
                  <li>
                    For Free Tickets → Clicking “Get Free Ticket” proceeds to
                    attendee details.
                  </li>
                  <li>
                    For Paid Tickets → Clicking “Purchase Ticket” would ideally
                    open a payment modal.
                  </li>
                </ul>
              </div>

              <div>
                <h6>2️⃣ Attendee Details Form</h6>
                <ul className="list-disc ml-7">
                  <li>
                    Users input their Name, Email, and optional Phone Number.
                  </li>
                  <li>
                    Profile picture upload option with preview functionality.
                  </li>
                  <li>
                    Ticket summary is visible to ensure users review their
                    details before submission.
                  </li>
                </ul>
              </div>
              <div>
                <h6>2️⃣ Attendee Details Form</h6>
                <ul className="list-disc ml-7">
                  <li>
                    If the ticket is free, the user is taken directly to the
                    Ticket Confirmation Page.
                  </li>
                  <li>
                    If the ticket is paid, developers can integrate Stripe,
                    Paystack, or Flutterwave to process payments before showing
                    the confirmation page.
                  </li>
                  <li> Upon successful booking, users should receive:</li>
                  <li> A visual ticket preview with a unique QR Code.</li>
                  <li>
                    An option to download the ticket as PDF or save it to their
                    device.
                  </li>
                  <li>
                    An email confirmation containing ticket details. How to
                    Build This 🚀
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-5">
              <h5>This UI can be implemented using:</h5>

              <div>
                <h6>📌 Frontend (Next.js or React)</h6>
                <ul className="list-disc ml-7">
                  <li>Component Breakdown:</li>
                  <li>TicketCard.tsx → Displays ticket details</li>
                  <li>AttendeeForm.tsx → Captures user details</li>
                  <li>PaymentModal.tsx → Handles payment processing</li>
                  <li>SuccessScreen.tsx → Shows the final ticket preview</li>
                  <li>
                    {" "}
                    State Management: React’s Context API, Zustand, or Redux (if
                    needed).
                  </li>
                  <li>
                    File Handling: Users should be able to upload images
                    (profile picture for ticket) using Firebase Storage,
                    Cloudinary, or local preview with URL.createObjectURL().
                  </li>
                </ul>
              </div>

              <div>
                <h6>📌 Backend (Optional)</h6>
                <ul className="list-disc ml-7">
                  <li>
                    If persistence is required, a backend can be built using:
                  </li>
                  <li>Node.js & Express or Firebase Functions</li>
                  <li>
                    Database: MongoDB, PostgreSQL, or Firebase Firestore to
                    store ticket records
                  </li>
                </ul>
              </div>

              <div>
                <h6>📌 Payment Integration</h6>
                <ul className="list-disc ml-7">
                  <li>For paid events, developers should integrate</li>
                  <li>Stripe Checkout (for international transactions)</li>
                  <li>
                    {" "}
                    Paystack or Flutterwave (for African users) What You’ll
                    Learn 🧑‍💻
                  </li>
                  <li>File handling & validation (profile picture uploads).</li>
                  <li> Dynamic UI updates based on ticket selection.</li>
                  <li>Persisting bookings using local state or a backend.</li>
                  <li> Integrating payment gateways for ticket purchases.</li>
                  <li>
                    {" "}
                    Generating & validating QR Codes for event check-in
                    (Advanced).
                  </li>
                </ul>
                <span>Need Help? Reach Out! 💬</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex flex-col justify-center mx-auto max-w-[460px] items-center w-full gap-8">
            <h3 className="text-[80px] text-white">💛 Enjoy</h3>
            <div className="w-full rounded-2xl py-4 px-12 gap-8 border border-[#0e464f] bg-[#041e23] flex">
              <Link className="w-full" target="_blank" href="/">
                <Button className="w-full" variant="outline">
                  Design File
                </Button>
              </Link>
              <Link className="w-full" target="_blank" href="/">
                <Button className="w-full"> Github code</Button>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
