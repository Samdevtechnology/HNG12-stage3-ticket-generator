interface BannerProps {
  name: string;
  location: string;
  date: string;
  description: string;
}

const Banner = ({ name, location, date, description }: BannerProps) => {
  return (
    <div className="flex flex-col text-[#fafafa] justify-center items-center gap-2 px-6 py-4 sm:px-6 sm:py-6 border-2 border-t-0 text-center border-[#07373f] rounded-3xl ticket-gradient">
      <h4 className=" font-roadRage text-[42px] leading-none sm:text-6xl">
        {name}
      </h4>
      <p className="w-full text-sm sm:text-base sm:w-3/4">
        {description} at {name}! Secure your spot now.
      </p>
      <h6 className="pt-8 sm:pt-0">
        📍 {location} <br className="sm:hidden" /> | |{" "}
        {new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        |{" "}
        {new Date(date).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </h6>
    </div>
  );
};

export default Banner;
