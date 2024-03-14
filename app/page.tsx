"use client";

import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

export default function Home() {

  const [noOfPlayers, setNoOfPlayers] = useState(2);

  // const selectNoOfPlayers =(option: number)=>{
  //   setNoOfPlayers(option);
  // }

  const [visibility, setVisibility] = useState("hidden");
  const [iconRotate, setIconRotate] = useState("");
  const toggleVisibility = () => {
    if (visibility === "hidden") {
      setVisibility("flex");
      setIconRotate("-rotate-180");
    } else {
      setVisibility("hidden");
      setIconRotate("");
    }
  };

  const options = [
    "2 players",
    "3 players",
    "4 players",
    "5 players",
    "6 players",
    "7 players",
    "8 players",
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center md:p-24">
      <div className="flex flex-col justify-center items-center gap-4 w-1/2">
        <button className="btn-primary w-full">Online</button>
          {/* <button className="btn-primary">Select Players</button> */}
          <div className="flex flex-col justify-end relative w-full">
            <button onClick={toggleVisibility} className="py-1 mb-3 w-full self-end justify-center border-2 border-teal-300 rounded-lg flex items-center gap-1">{noOfPlayers} players
              <span
                className={`duration-300 transition-all ease-in-out ${iconRotate}`}
              >
                <MdOutlineArrowDropDownCircle className="w-5 h-5" />
              </span>
            </button>

            <div
              className={`flex-col self-end border-teal-300 border p-3 rounded-lg gap-2 absolute top-10 bg-gray-800 transition-all duration-300 ease-in-out animate-dropdown w-full ${visibility}`}
            >
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setNoOfPlayers(index+2);
                    toggleVisibility();
                  }}
                  className="border-b border-teal-300"
                >
                  {option}
                </button>
              ))}
            </div>
            <Link href={"/offline"} className="btn-primary">Play</Link>
          </div>
      </div>
    </main>
  );
}
