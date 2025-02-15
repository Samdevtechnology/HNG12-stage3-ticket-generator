"use client";

import useBookingStore from "@/store/bookingStore";
import { useRouter } from "next/navigation";
import TicketSelection from "../TicketSelection";
import AttendeeDetails from "../AttendeeDetails";
import TicketSummary from "../TicketSummary";

export function BookingStepper() {
  const router = useRouter();
  const { currentStep, nextStep, previousStep } = useBookingStore();

  const handleConfirm = () => {
    router.push("/tickets");
  };

  const handleReset = () => {
    router.push("/");
  };

  return (
    <div className="max-w-[700px] mx-auto py-8">
      <div className="mt-8">
        {currentStep === 1 && (
          <TicketSelection onNext={nextStep} onBack={router.back} />
        )}
        {currentStep === 2 && (
          <AttendeeDetails onNext={nextStep} onBack={previousStep} />
        )}
        {currentStep === 3 && (
          <TicketSummary onConfirm={handleConfirm} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
