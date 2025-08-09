
"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const measureRef = useRef<HTMLSpanElement>(null);
  const [box, setBox] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const longestPhrase = useMemo(
    () => (words && words.length ? words.reduce((a, b) => (a.length >= b.length ? a : b)) : ""),
    [words]
  );
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  useEffect(() => {
    if (measureRef.current) {
      const rect = measureRef.current.getBoundingClientRect();
      setBox({ w: rect.width, h: rect.height });
    }
  }, [longestPhrase, className]);

  return (
    <div className={cn("relative inline-block align-bottom", className)}>
      {/* Hidden measurer to reserve space */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none whitespace-nowrap px-2"
      >
        {longestPhrase}
      </span>
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          style={{
            width: box.w ? `${box.w}px` : undefined,
            minHeight: box.h ? `${box.h}px` : undefined,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 2,
            position: "absolute",
          }}
          className={cn(
            "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2"
          )}
          key={currentWord}
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
