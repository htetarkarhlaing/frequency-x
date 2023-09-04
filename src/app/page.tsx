"use client"
import { useState } from "react"
import Nav from "@src/components/nav";
import Wave from "@src/components/wave";

export default function Page() {

  const [audioUrl, setAudioUrl] = useState("/brain-damage-paparazi.mp3")

  return (
    <>
      <Nav />
      <div className="w-screen h-screen -mt-[64px] home relative">


        <div className="hidden lg:block absolute top-[50%] -translate-y-[50%] left-[100px] w-[400px]">
          <p className="text-5xl uppercase font-bold">Mixing Tracks</p>
          <p className="w-full h-[100px] text-gray-300">
            In addition to my career in web development, I am an avid home DJ, specializing in House music, Hard styles, Trap, and Dubstep.
          </p>
        </div>

        <div className="hidden lg:block absolute top-[50%] -translate-y-[50%] right-[100px] w-[400px]">
          <p className="text-5xl uppercase font-bold">Coding Bugs</p>
          <p className="w-full h-[100px] text-gray-300">
            I believe in continuous learning, pushing the boundaries of what is possible in the digital realm, and giving back to the development community.
          </p>
        </div>
        {/* For Mobile View */}
        <div className="lg:hidden absolute top-[160px] px-[10px]">
          <p className="text-4xl uppercase font-bold text-center">Mixer & coder</p>
          <p className="w-full h-[100px] text-center text-gray-300">
            Full stack developer with 3 years of experience. Beyond my tech skills, Im a fervent home DJ, specializing in house, hard styles, trap, and dubstep.
          </p>
        </div>

        <Wave
          container=""
          height={50}
          waveColor="#ffffff"
          progressColor="#545454"
          barWidth={1}
          barGap={2}
          barRadius={2}
          url={audioUrl}
        />

      </div>
    </>
  );
}
