"use client";

import React, { ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { CloudDownload } from "../icons/Icons";
import useBookingStore from "@/store/bookingStore";

interface ImageUploadProps {
  className?: string;
  label?: string;
  onChange: (image: string) => void;
  onBlur: () => void;
}

const ImageUpload = ({
  className = "",
  label,
  onChange,
  onBlur,
}: ImageUploadProps) => {
  const { currentBooking } = useBookingStore();
  const userImage = currentBooking?.personalDetails?.profilePic;
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onChange(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      onChange("");
    }
  };

  return (
    <div className="flex flex-col p-6 gap-8 border rounded-3xl border-[#07373f] bg-[#052228]">
      <h6 className="leading-6">{label}</h6>
      <div className="flex w-full justify-center items-center bg-black/20 relative">
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleImageUpload}
          onBlur={onBlur}
        />
        <label
          htmlFor="imageUpload"
          className={cn(
            "flex flex-col cursor-pointer group justify-center items-center p-6 gap-4 rounded-[32px] w-60 h-60 relative",
            className,
            userImage ? "bg-cover bg-center text-white" : "bg-[#0e464f]"
          )}
          style={{
            backgroundImage: userImage ? `url(${userImage})` : "none",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {userImage && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[32px] bg-gradient-to-b from-black/50 to-black/50" />
          )}

          <div
            className={`
            flex flex-col justify-center items-center gap-2 relative z-10
            ${userImage ? "hidden group-hover:flex" : "flex"}
          `}
          >
            <CloudDownload />
            <p className="leading-6 text-center">
              Drag & drop or click to upload
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
