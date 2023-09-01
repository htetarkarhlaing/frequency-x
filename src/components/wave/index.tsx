'use client'
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js';
import React, { useRef, useState, useEffect, useCallback } from 'react';

const useWavesurfer = (containerRef: React.RefObject<HTMLDivElement>, options: WaveSurferOptions) => {
    const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        });

        setWavesurfer(ws);

        return () => {
            ws.destroy();
        };
    }, [options, containerRef]);

    return wavesurfer;
};

interface IWave extends WaveSurferOptions {
    playing: boolean;
}

const Wave = (props: IWave) => {
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
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),
        ];

        return () => {
            subscriptions.forEach(unSub => unSub());
        };
    }, [wavesurfer]);



    return (
        <>
            <div ref={containerRef} style={{ minHeight: '50px' }} />

            <button onClick={onPlayClick} style={{ marginTop: '1em' }}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </>
    );
};

export default Wave;
