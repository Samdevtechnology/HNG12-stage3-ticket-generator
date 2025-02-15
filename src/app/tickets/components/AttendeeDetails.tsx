import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface ProfileProps {
  name: string;
  email: string;
  about?: string;
  imageUrl?: string;
}

const AttendeeDetails = ({ name, email, imageUrl, about }: ProfileProps) => {
  return (
    <Accordion type="single" collapsible className="w-full text-[#fafafa]/80">
      <AccordionItem value="profile" className="border rounded-lg">
        <AccordionTrigger className="px-4 py-2 hover:no-underline">
          <h4 className="font-medium text-lg sm:text-3xl">Attendee Details</h4>
        </AccordionTrigger>

        <AccordionContent className="px-4 py-3">
          <div className="flex flex-col gap-2">
            {imageUrl && (
              <Image
                className="rounded-[32px] bg-cover bg-center h-40 w-40"
                src={imageUrl}
                width={160}
                height={160}
                alt="Atteedee Picture"
              />
            )}
            <div className="sm:text-xl flex gap-4">
              <span>Name :</span>
              <span className="font-medium">{name}</span>
            </div>
            <div className="sm:text-xl flex gap-4">
              <span>Email :</span>
              <span className="font-medium">{email}</span>
            </div>
            {about && (
              <div className="sm:text-xl flex gap-4">
                <span>About :</span>
                <span className="font-medium">{about}</span>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AttendeeDetails;
