"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

export interface LikeButtonRef {
  triggerLike: () => void;
}

interface LikeButtonProps {
  likes: number;
  liked: boolean;
  disabled?: boolean;
  isPending?: boolean;
  onLike: () => void;
}

export const LikeButton = forwardRef<LikeButtonRef, LikeButtonProps>(
  ({ likes, liked, disabled = false, isPending = false, onLike }, ref) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [displayFilled, setDisplayFilled] = useState(liked);
    const prevLikedRef = useRef(liked);
    const fillTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const overlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const triggerLike = () => {
      if (disabled || isPending) return;
      onLike();
    };

    useImperativeHandle(ref, () => ({
      triggerLike,
    }));

    useEffect(() => {
      if (!prevLikedRef.current && liked) {
        setDisplayFilled(false);
        setShowOverlay(true);

        if (fillTimerRef.current) {
          clearTimeout(fillTimerRef.current);
        }
        if (overlayTimerRef.current) {
          clearTimeout(overlayTimerRef.current);
        }

        fillTimerRef.current = setTimeout(() => {
          setDisplayFilled(true);
        }, 180);

        overlayTimerRef.current = setTimeout(() => {
          setShowOverlay(false);
        }, 360);

        prevLikedRef.current = liked;
        return () => {
          if (fillTimerRef.current) {
            clearTimeout(fillTimerRef.current);
          }
          if (overlayTimerRef.current) {
            clearTimeout(overlayTimerRef.current);
          }
        };
      }

      if (!liked) {
        setShowOverlay(false);
        setDisplayFilled(false);
      } else {
        setDisplayFilled(true);
      }

      prevLikedRef.current = liked;
    }, [liked]);

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      triggerLike();
    };

    return (
      <div className="relative">
        <button
          type="button"
          onClick={handleClick}
          disabled={disabled || isPending}
          className={`relative z-10 flex items-center gap-1 rounded-2xl px-2 py-1 transition ${
            displayFilled ? "text-red-500" : "text-gray-400 hover:text-red-300"
          } ${disabled || isPending ? "cursor-default opacity-70" : "cursor-pointer"} ${
            isPending ? "animate-pulse" : ""
          }`}
        >
          <Heart
            className={`h-3 w-3 transition ${
              displayFilled ? "fill-red-500 text-red-500" : ""
            }`}
          />
          <span className="text-[13px]">{likes}</span>
        </button>

        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ scale: 0.72, opacity: 0 }}
              animate={{ scale: 1.08, opacity: 0.95 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{
                duration: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
            >
              <Heart className="h-14 w-14 fill-red-300 text-red-300 drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
