"use client"; // Add this at the top

import Logo from "@/components/icons/Logo";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center border rounded-xl sm:rounded-3xl py-3 mt-6 px-4">
      <Logo />
      <nav className="hidden sm:block">
        <ul className="flex gap-4 font-jeju text-[#b3b3b3] text-lg">
          <li>
            <Link
              className={`font-jeju hover:text-white hover:underline underline-offset-4 ${
                pathname === "/" ? "text-white" : ""
              } `}
              href="/"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className={`font-jeju hover:text-white hover:underline underline-offset-4 ${
                pathname === "/tickets" ? "text-white" : ""
              } `}
              href="/tickets"
            >
              My Tickets
            </Link>
          </li>
          <li>
            <Link
              className={`font-jeju hover:text-white hover:underline underline-offset-4 ${
                pathname === "/about" ? "text-white" : ""
              } `}
              href="/about"
            >
              About Project
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/tickets">
        <Button
          variant="secondary"
          className="group relative overflow-hidden h-[46px] py-3 px-4 sm:py-4 sm:px-6"
        >
          <span>MY TICKETS</span>
          <MoveRight className="h-4 w-4 transition-all duration-500 ease-in-out transform group-hover:-rotate-45 group-active:-rotate-45" />
        </Button>
      </Link>
    </div>
  );
};

export default Header;
