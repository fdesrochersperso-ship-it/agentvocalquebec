"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, User } from "lucide-react";

const WAVEFORM_BARS = 25;
const BAR_HEIGHTS = [
  0.4, 0.7, 0.35, 0.9, 0.5, 0.65, 0.45, 0.8, 0.55, 0.6, 0.4, 0.75, 0.5,
  0.85, 0.45, 0.7, 0.6, 0.5, 0.65, 0.55, 0.45, 0.8, 0.5, 0.7, 0.4,
];
const BAR_DELAYS = [
  0, 0.1, 0.2, 0.05, 0.15, 0.25, 0.08, 0.18, 0.12, 0.22, 0.03, 0.13, 0.28,
  0.07, 0.17, 0.23, 0.1, 0.2, 0.05, 0.15, 0.25, 0.02, 0.12, 0.18, 0.08,
];

export interface AudioDemoProps {
  audioSrc?: string;
}

export function AudioDemo({ audioSrc }: AudioDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleToggle = () => {
    if (audioSrc && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full min-w-0">
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        @keyframes waveform-bar {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .audio-demo-pulse {
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
        .audio-demo-waveform-bar {
          animation: waveform-bar 0.8s ease-in-out infinite;
          transform-origin: center bottom;
        }
      `}</style>

      {audioSrc && (
        <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
      )}

      <div className="w-full min-w-[280px] max-w-full overflow-hidden rounded-xl bg-primary-dark p-6 shadow-lg sm:min-w-[320px]">
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 shrink-0 rounded-full bg-success ${
                isPlaying ? "audio-demo-pulse" : ""
              }`}
              aria-hidden
            />
            <span className="text-sm font-medium text-white/90">
              Appel actif
            </span>
          </div>
          <span className="font-mono text-sm font-semibold tabular-nums text-white/90">
            {formatTime(elapsedSeconds)}
          </span>
        </div>

        {/* Caller info card */}
        <div className="mb-6 rounded-lg bg-primary-light/40 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600">
              <User size={20} strokeWidth={1.5} className="text-white/90" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-body text-base font-bold text-white">
                Marie Dubois
              </p>
              <p className="truncate text-sm text-gray-400">
                Réservation rendez-vous dentaire
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <div>
                <span className="font-mono text-sm font-bold text-accent">98%</span>
                <p className="text-[10px] text-gray-400">Compréhension</p>
              </div>
              <div>
                <span className="font-mono text-sm font-bold text-accent">1.2s</span>
                <p className="text-[10px] text-gray-400">Temps de réponse</p>
              </div>
            </div>
          </div>
        </div>

        {/* Waveform + controls */}
        <div className="space-y-3">
          <div className="flex h-12 items-end justify-center gap-0.5">
            {Array.from({ length: WAVEFORM_BARS }).map((_, i) => (
              <div
                key={i}
                className="audio-demo-waveform-bar w-[3px] rounded-full bg-accent/80"
                style={{
                  height: `${BAR_HEIGHTS[i] * 32}px`,
                  animationDelay: `${BAR_DELAYS[i]}s`,
                  animationPlayState: isPlaying ? "running" : "paused",
                }}
                aria-hidden
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Conversation en direct
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggle}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-all duration-200 hover:bg-accent-light hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                aria-label={isPlaying ? "Pause" : "Lecture"}
              >
                {isPlaying ? (
                  <Pause size={18} strokeWidth={1.5} aria-hidden />
                ) : (
                  <Play size={18} strokeWidth={1.5} className="ml-0.5" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
