"use client";
import { WaveSurferOptions } from "wavesurfer.js";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import useWavesurfer from "./waveHook";

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-inter",
});

const Wave = (props: WaveSurferOptions) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const wavesurfer = useWavesurfer(containerRef, props);

    const onPlayClick = useCallback(() => {
        if (wavesurfer) {
            wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
        }
    }, [wavesurfer]);

    useEffect(() => {
        if (!wavesurfer) return;
        setIsPlaying(false);

        const subscriptions = [
            wavesurfer.on("play", () => setIsPlaying(true)),
            wavesurfer.on("pause", () => setIsPlaying(false)),
        ];

        return () => {
            subscriptions.forEach((unSub) => unSub());
        };
    }, [wavesurfer]);

    return (
        <div className="absolute bottom-0 w-full">
            <div className="relative w-full">
                <div className="relative w-[280px] h-[382px] sm:w-[350px] sm:h-[478px] md:w-[400px] md:h-[547px] lg:w-[500px] lg:h-[683px] left-[50%] -translate-x-[50%] z-0 md:z-10 cursor-pointer">
                    <Image
                        src="/profile.png"
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="Htet Arkar Hlaing"
                        onClick={onPlayClick}
                    />
                </div>
                <div
                    ref={containerRef}
                    className="m-h-[50px] w-full absolute bottom-10 px-5"
                />
                <div className={`${orbitron.className} absolute bottom-[100px] px-5`}>
                    music: {props.url?.replace("/", "")}
                </div>
            </div>
        </div>
    );
};

export default Wave;
