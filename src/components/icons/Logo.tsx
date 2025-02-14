import Link from "next/link";
import { Logo as LogoIcon, LogoName } from "./Icons";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2.5">
        <span className="bg-[#052F35] border border-[#0e464f] px-2 py-1.5 rounded-xl">
          <LogoIcon />
        </span>
        <span>
          <LogoName />
        </span>
      </div>
    </Link>
  );
};

export default Logo;
