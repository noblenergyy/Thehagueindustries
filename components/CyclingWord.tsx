"use client";
import { useEffect, useState } from "react";

const words = ["Matter.", "Lead.", "Define.", "Shape.", "Endure.", "Prevail.", "Stand.", "Move."];
const INTERVAL = 2800;
const DUR = 430;

type Item = { word: string; key: number; state: "below" | "in" | "above" };

export default function CyclingWord() {
  const [items, setItems] = useState<Item[]>([{ word: words[0], key: 0, state: "in" }]);

  useEffect(() => {
    let wordIdx = 0;
    let keyCounter = 1;

    const id = setInterval(() => {
      wordIdx = (wordIdx + 1) % words.length;
      const newWord = words[wordIdx];
      const newKey = keyCounter++;

      setItems((prev) => [
        ...prev.map((item) => ({ ...item, state: "above" as const })),
        { word: newWord, key: newKey, state: "below" as const },
      ]);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setItems((prev) =>
            prev.map((item) =>
              item.key === newKey ? { ...item, state: "in" as const } : item
            )
          );
        });
      });

      setTimeout(() => {
        setItems((prev) => prev.filter((item) => item.key === newKey));
      }, DUR + 100);
    }, INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      {items.map(({ word, key, state }) => (
        <span
          key={key}
          className="absolute inset-0 flex justify-center text-navy dark:text-white"
          style={{
            transition:
              state === "below"
                ? "none"
                : `transform ${DUR}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DUR}ms ease`,
            transform:
              state === "in"
                ? "translateY(0)"
                : state === "below"
                ? "translateY(110%)"
                : "translateY(-110%)",
            opacity: state === "in" ? 1 : 0,
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}
