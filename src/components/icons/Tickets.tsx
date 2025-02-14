import { cn } from "@/lib/utils";

export interface TicketsProps {
  width?: number;
  height?: number;
  fontSize?: string;
  flip?: boolean;
}

interface DynamicTicketProp extends TicketsProps {
  type: "regular" | "vip" | "vvip";
}

export const Regular = ({
  width = 52,
  height = 44,
  fontSize = "text-3xl",
  flip = false,
}: TicketsProps) => {
  return (
    <div
      className={cn(
        `relative w-fit rotate-[16deg]`,
        flip && "-rotate-[172deg]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 52 44"
        fill="none"
      >
        <path
          d="M30.5816 0.861115C31.5303 0.360331 32.7052 0.697211 33.2443 1.62463L41.2205 15.3446L50.6837 27.5968C51.5086 28.6647 51.0608 30.2263 49.7954 30.6949L35.2775 36.0705L21.2428 43.479C20.2941 43.9798 19.1192 43.6429 18.5801 42.7155L10.6039 28.9955L1.14067 16.7433C0.315812 15.6754 0.763587 14.1138 2.02903 13.6452L16.5469 8.26959L30.5816 0.861115Z"
          fill="url(#paint0_linear_11_867)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_867"
            x1="32.2794"
            y1="-0.0350934"
            x2="19.545"
            y2="44.3752"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBAF" />
            <stop offset="0.495" stopColor="#938167" />
            <stop offset="1" stopColor="#F9DBAF" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className={`absolute uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#052930] font-roadRage leading-3 ${fontSize}`}
      >
        REG
      </div>
    </div>
  );
};

export const VIP = ({
  width = 49,
  height = 44,
  fontSize = "text-3xl",
  flip,
}: TicketsProps) => {
  return (
    <div
      className={cn(
        `relative w-fit rotate-[16deg]`,
        flip && "-rotate-[172deg]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 49 44"
        fill="none"
      >
        <path
          d="M27.5187 0.951393C28.4885 0.408028 29.7153 0.759815 30.2499 1.73455L36.3387 12.8378C36.4888 13.1116 36.701 13.3464 36.9581 13.5235L47.7393 20.9465C48.8624 21.7199 48.8993 23.3658 47.8119 24.1887L38.6699 31.1062C38.3673 31.3352 38.136 31.6455 38.0032 32.001L34.0977 42.4523C33.6746 43.5846 32.3516 44.0856 31.2846 43.5178L19.0858 37.0255C18.8379 36.8936 18.5651 36.8154 18.2849 36.7959L4.49943 35.8373C3.29365 35.7534 2.43722 34.6274 2.6784 33.443L4.90468 22.5101C4.9804 22.1383 4.94877 21.7526 4.81348 21.3981L0.726382 10.6871C0.240214 9.41305 1.1437 8.03673 2.50604 7.9761L15.5826 7.39412C15.8945 7.38024 16.1988 7.29352 16.4712 7.14091L27.5187 0.951393Z"
          fill="url(#paint0_linear_11_870)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_870"
            x1="29.2794"
            y1="-0.0350934"
            x2="16.545"
            y2="44.3752"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="0.495" stopColor="#B2B2B2" />
            <stop offset="1" stopColor="#D9D9D9" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className={`absolute uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#052930] font-roadRage leading-3 ${fontSize}`}
      >
        VIP
      </div>
    </div>
  );
};

export const VVIP = ({
  width = 50,
  height = 43,
  fontSize = "text-3xl",
  flip,
}: TicketsProps) => {
  return (
    <div
      className={cn(
        `relative w-fit rotate-[16deg]`,
        flip && "-rotate-[172deg]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 43"
        fill="none"
      >
        <path
          d="M29.1898 0.504731C30.2458 -0.273422 31.7524 0.158588 32.2356 1.3781L35.0235 8.41456C35.2986 9.10891 35.9377 9.59211 36.6807 9.66761L45.0131 10.5142C46.4611 10.6613 47.2721 12.2565 46.5377 13.5131L43.4244 18.8401C42.9626 19.6303 43.0961 20.6332 43.7486 21.275L48.7244 26.1702C49.8547 27.2821 49.3035 29.2043 47.7558 29.5483L40.942 31.0628C40.0485 31.2614 39.4039 32.0411 39.3768 32.9559L39.1941 39.1233C39.151 40.5781 37.618 41.5011 36.312 40.8586L28.7971 37.161C28.127 36.8313 27.329 36.9025 26.7277 37.3455L20.6346 41.8354C19.5786 42.6135 18.072 42.1815 17.5888 40.962L14.8009 33.9255C14.5258 33.2312 13.8867 32.748 13.1437 32.6725L4.81127 31.8259C3.36328 31.6788 2.55232 30.0836 3.28671 28.827L6.39998 23.5C6.86179 22.7098 6.72829 21.7069 6.07585 21.0651L1.09995 16.1699C-0.0303069 15.058 0.52086 13.1358 2.0686 12.7918L8.88244 11.2773C9.77588 11.0787 10.4205 10.299 10.4476 9.38418L10.6303 3.21685C10.6734 1.76204 12.2064 0.838966 13.5124 1.48152L21.0273 5.17905C21.6974 5.50877 22.4954 5.43764 23.0967 4.9946L29.1898 0.504731Z"
          fill="url(#paint0_linear_11_873)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_873"
            x1="31.2794"
            y1="-1.03509"
            x2="18.545"
            y2="43.3752"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.15" stopColor="#EB981A" />
            <stop offset="0.46" stopColor="#7B5418" />
            <stop offset="0.74" stopColor="#EB981A" />
            <stop offset="1" stopColor="#7B5418" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className={`absolute uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#052930] font-roadRage leading-3 ${fontSize}`}
      >
        VVIP
      </div>
    </div>
  );
};

const Tickets = {
  regular: Regular,
  vip: VIP,
  vvip: VVIP,
};

const DynamicTicket = ({ type, ...props }: DynamicTicketProp) => {
  const TicketComponent = Tickets[type];
  console.log(type, props);
  if (!TicketComponent) {
    console.error(`Invalid ticket type: ${type}`);
    return null;
  }
  return <TicketComponent {...props} />;
};

export default DynamicTicket;
