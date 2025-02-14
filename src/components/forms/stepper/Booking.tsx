"use client";

import useBookingStore from "@/store/bookingStore";

// components/stepper/BookingStepper.tsx
import { useRouter } from "next/navigation";
import { TicketTypeForm } from "../TicketSelection";
import { PersonalDetailsForm } from "../AttendeeDetails";
import { TicketSummaryForm } from "../TicketSummary";

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
          <TicketTypeForm onNext={nextStep} onBack={router.back} />
        )}
        {currentStep === 2 && (
          <PersonalDetailsForm onNext={nextStep} onBack={previousStep} />
        )}
        {currentStep === 3 && (
          <TicketSummaryForm onConfirm={handleConfirm} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
