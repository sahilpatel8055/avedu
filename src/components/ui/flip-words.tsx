"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Assuming framer-motion based on the syntax used, as 'motion/react' is not standard

// cn utility function would typically be imported from a lib/utils file
// For this example, we'll assume it's available or use a basic equivalent
const cn = (...classes) => classes.filter(Boolean).join(' ');

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

  const startAnimation = useCallback(() => {
    // Find the next word, loop back to the first if at the end
    const nextWordIndex = words.indexOf(currentWord) + 1;
    const word = words[nextWordIndex] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timeoutId = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
      mode="wait" // Use 'wait' mode to ensure the exiting component is fully gone before the new one enters
    >
      <motion.div
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
          filter: "blur(8px)",
          // Removed position: "absolute", x, y, and scale from exit to prevent layout shifts.
          // This ensures the element retains its space during exit animation.
        }}
        className={cn(
          "z-10 inline-block relative text-left px-2",
          "text-blue-600", // Set text color to blue
          className
        )}
        key={currentWord}
        // Ensure the div maintains a consistent width to prevent layout shifts
        // This might require wrapping it in a parent div with a fixed width, or dynamically setting its width
        // based on the longest word, but for simple cases, inline-block often works if content is not too varied.
        // For more robustness, consider calculating max-width based on longest word.
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
            className="inline-block whitespace-nowrap" // Ensures words stay on one line
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
            <span className="inline-block">&nbsp;</span> {/* Maintains consistent space between words */}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
