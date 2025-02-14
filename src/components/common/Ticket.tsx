import TicketBg from "../icons/TicketBg";
import { QRCodeSVG } from "qrcode.react";
import { Separator } from "../ui/separator";
import DynamicTicket from "../icons/Tickets";

interface TicketProps {
  name: string;
  location: string;
  date: string;
  userName: string;
  quantity: number;
  large?: boolean;
  ticketType: "regular" | "vip" | "vvip";
}

const Ticket = ({
  name,
  location,
  date,
  large,
  userName,
  quantity,
  ticketType,
}: TicketProps) => {
  return (
    <>
      {large ? (
        <div className="w-fit relative">
          <TicketBg width={562} height={200} />
          <div>
            <div className="absolute top-[14.5px] left-3 ">
              <QRCodeSVG
                value={"http://localhost:3000/"}
                marginSize={1} // Include white margin
                className="w-[146px] h-[146px] rounded-[6px]"
              />
            </div>
            <div className="absolute text-[#fafafa] w-[250px] top-3.5 left-44">
              <h4 className="font-roadRage mb-1.5 leading-[80%] text-[68px]">
                {name.slice(0, 17)}
              </h4>
              <span className="flex flex-col text-[17px]">
                <p>📍 {location}</p>
                <p>
                  📅{" "}
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  |{" "}
                  {new Date(date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </span>
            </div>
            <div className="absolute top-5 text-4xl right-[87px]">
              <DynamicTicket
                type={ticketType}
                width={67}
                height={57}
                fontSize="text-4xl"
              />
            </div>
            <div className="absolute max-w-[470px] bottom-0.5 w-full pl-6 rounded-bl-[17px] text-[#0e464f] bg-white/30 font-black text-sm">
              Ticket for {quantity} entry only
            </div>
          </div>
          <div className="absolute flex flex-col items-end top-[75px] -right-12 text-[#fafafa] w-[173px] -rotate-90 z-10">
            <div>
              <h6 className="font-roadRage text-2xl leading-5">
                Techember Fest ”25
              </h6>
              <p className="text-xs leading-6">
                <span className="font-bold">User Name:</span>{" "}
                {userName.slice(0, 7)}
              </p>
            </div>
            <div className="flex flex-col w-full gap-[2.5px]">
              <Separator className="bg-[#052930] h-[2.5px] self-end w-1/2 rounded-full" />
              <Separator className="bg-[#052930] h-[3px] rounded-full" />
            </div>
          </div>
          {/* <div>REG</div> */}
          <div className="absolute bottom-0.5 text-4xl right-1.5">
            <DynamicTicket
              type={ticketType}
              width={67}
              height={57}
              fontSize="text-4xl"
              flip
            />
          </div>
        </div>
      ) : (
        <div className="w-fit relative">
          <TicketBg width={287} height={102} />
          <div>
            <div className="absolute top-[7px] left-[6.5px] ">
              <QRCodeSVG
                value={"http://localhost:3000/"}
                marginSize={1} // Include white margin
                className="w-[76px] h-[76px] rounded-[6px]"
              />
            </div>
            <div className="absolute text-[#fafafa] w-[124px] top-4 left-24">
              <h4 className="font-roadRage mb-1.5 leading-[80%] text-xl">
                {name.slice(0, 18)}
              </h4>
              <span className="flex flex-col text-[9px]">
                <p>📍 {location}</p>
                <p>
                  📅{" "}
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  |{" "}
                  {new Date(date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </span>
            </div>
            <h4 className="absolute font-roadRage w-[60px] text-[#fafafa]/20 mb-1.5 -bottom-0.5 right-[52px] leading-[80%] text-xl">
              {name.slice(0, 18)}
            </h4>
            <div className="absolute top-1.5 text-4xl right-[47px]">
              <DynamicTicket
                type={ticketType}
                width={34}
                height={29}
                fontSize="text-lg"
              />
            </div>
            <div className="absolute max-w-[470px] bottom-0.5 w-full pl-4 rounded-bl-[17px] text-[#fafafa] font-light text-[7px]">
              Ticket for {"1"} entry only
            </div>
          </div>
          <div className="absolute flex flex-col items-end top-9 -right-[23px] text-[#fafafa] w-[88.5px] -rotate-90 z-10">
            <div>
              <h2 className="font-roadRage text-[11px] leading-[80%]">
                Techember Fest ”25
              </h2>

              <span className="flex flex-col text-[5px]">
                <p>{location}</p>
                <p>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  |{" "}
                  {new Date(date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </span>
            </div>
            <div className="flex flex-col mt-0.5 w-full gap-[1.3px]">
              <Separator className="bg-[#052930] h-[1.3px] self-end w-1/2 rounded-full" />
              <Separator className="bg-[#052930] h-[1.3px] rounded-full" />
            </div>
          </div>
          {/* <div>REG</div> */}

          <h4 className="font-roadRage absolute rotate-180 bottom-0.5 text-3xl right-2.5 text-[#fafafa]">
            {ticketType === "vvip"
              ? "WIP"
              : ticketType === "regular"
              ? "REG"
              : ticketType.toLocaleUpperCase()}
          </h4>
        </div>
      )}
    </>
  );
};

export default Ticket;
