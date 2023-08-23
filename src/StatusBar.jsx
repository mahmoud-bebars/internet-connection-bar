import { useState, useEffect } from "react";
import { SignalIcon, SignalSlashIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const StatusBar = () => {
  const [isOnline, setIsOnline] = useState(true);
  // ? The useEffect Can be used in Sevral Postions in your APP
  // * This is just An example of what JS is power to export from any Browser
  useEffect(() => {
    // * Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // * Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // * Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // * Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  return (
    <div
      className={`rounded-3xl top-0 h-10 w-full p-2 ${
        isOnline ? "bg-green-600/40" : "bg-red-600/40"
      } `}
    >
      <div className="flex items-center justify-center gap-2">
        {/* Icons Ussed Here Belong to HeroIcons Package Under Tailwind Development Team */}
        {isOnline ? (
          <SignalIcon className="w-6 h-6" />
        ) : (
          <SignalSlashIcon className="w-6 h-6" />
        )}
        {/* For The Typography it's Used form Material-Tailwind Library Built on TailwindCSS */}
        <Typography varient="small" className=" capitalize font-thin text-base">
          {" "}
          {isOnline ? "Connected To Internet" : "No Internet Connection"}
        </Typography>
      </div>
    </div>
  );
};

export default StatusBar;
