"use client"
import { useState } from "react"
import Nav from "@src/components/nav";
import Wave from "@src/components/wave";
import Image from "next/image";

export default function Page() {

  const [audioUrl, setAudioUrl] = useState("/pop-that.wav")
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(prevPlaying => !prevPlaying);
  };

  return (
    <>
      <Nav />
      <div className="w-screen h-screen -mt-[64px] home relative">
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] z-10" onClick={togglePlay}>
          <div className="relative w-[400px] h-[547px]">
            <Image
              src="/profile.png"
              fill
              quality={100}
              alt="Htet Arkar Hlaing"
            />
          </div>
        </div>

        <div className="absolute top-[50%] -translate-y-[50%] left-[100px]">
          <p className="text-5xl uppercase font-bold">Mixing Tracks</p>
        </div>

        <div className="absolute top-[50%] -translate-y-[50%] right-[100px]">
          <p className="text-5xl uppercase font-bold">Coding Bugs</p>
        </div>

        <div className="absolute bottom-10 w-full">
          <Wave
            container=""
            height={50}
            waveColor="#ffffff"
            progressColor="#545454"
            barWidth={1}
            barGap={2}
            barRadius={2}
            url={audioUrl}
            playing={playing}
          />
        </div>
      </div>
      <div className="w-screen h-screen">Two</div>
    </>
  );
}
