"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface LikeButtonRef {
  triggerLike: () => void;
}

interface LikeButtonProps {
  likes: number;
}

export const LikeButton = forwardRef<LikeButtonRef, LikeButtonProps>(
  ({ likes }, ref) => {
    const [liked, setLiked] = useState(false);
    const [burst, setBurst] = useState(false);

    const triggerLike = () => {
      setLiked((prev) => {
        const next = !prev;

        if (next) {
          setBurst(true);
          setTimeout(() => setBurst(false), 700);
        }

        return next;
      });
    };

    useImperativeHandle(ref, () => ({
      triggerLike,
    }));

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      triggerLike();
    };

    return (
      <div className="relative inline-flex items-center">
        <button
          type="button"
          onClick={handleClick}
          className={`relative z-10 flex items-center gap-1 rounded-full px-3 py-1 transition ${
            liked
              ? "bg-red-100 text-red-500"
              : "text-gray-400 hover:text-red-400"
          }`}
        >
          <Heart
            className={`h-4 w-4 transition ${
              liked ? "scale-110 fill-red-500 text-red-500" : ""
            }`}
          />
          <span>{liked ? likes + 1 : likes}</span>
        </button>

        <AnimatePresence>
          {burst && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1],
                opacity: [0, 1, 1, 0],
                y: [0, -10, -20],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Heart className="h-16 w-16 fill-red-500 text-red-500 drop-shadow-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
