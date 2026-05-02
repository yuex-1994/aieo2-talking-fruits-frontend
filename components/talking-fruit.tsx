"use client"

import * as React from "react"

interface TalkingFruitProps {
  fruit: string
  message: string
  isAnimating: boolean
}

const fruitEmojis: Record<string, string> = {
  apple: "🍎",
  banana: "🍌",
  orange: "🍊",
  grape: "🍇",
  strawberry: "🍓",
  watermelon: "🍉",
  pineapple: "🍍",
  pear: "🍐",
  cherry: "🍒",
  peach: "🍑",
}

export function TalkingFruit({ fruit, message, isAnimating }: TalkingFruitProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Speech Bubble */}
      <div
        className={`relative bg-card border-2 border-border rounded-2xl px-6 py-4 max-w-md min-h-[80px] flex items-center justify-center transition-all duration-300 ${
          isAnimating ? "scale-105" : "scale-100"
        }`}
      >
        <p className="text-card-foreground text-lg text-center font-medium text-balance">
          {message || "Pick a fruit and tell me what to say!"}
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-border" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-card" />
        </div>
      </div>

      {/* Fruit */}
      <div
        className={`text-[120px] leading-none transition-transform duration-150 ${
          isAnimating ? "animate-bounce" : ""
        }`}
        role="img"
        aria-label={fruit}
      >
        {fruitEmojis[fruit] || "🍎"}
      </div>
    </div>
  )
}
