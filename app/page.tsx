"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { TalkingFruit } from "@/components/talking-fruit"

const fruits = [
  { id: "apple", label: "Apple" },
  { id: "banana", label: "Banana" },
  { id: "orange", label: "Orange" },
  { id: "grape", label: "Grape" },
  { id: "strawberry", label: "Strawberry" },
  { id: "watermelon", label: "Watermelon" },
  { id: "pineapple", label: "Pineapple" },
  { id: "pear", label: "Pear" },
  { id: "cherry", label: "Cherry" },
  { id: "peach", label: "Peach" },
]

export default function Home() {
  const [selectedFruit, setSelectedFruit] = React.useState("apple")
  const [message, setMessage] = React.useState("")
  const [displayedMessage, setDisplayedMessage] = React.useState("")
  const [isAnimating, setIsAnimating] = React.useState(false)

  const handleSpeak = () => {
    if (!message.trim()) return
    
    setDisplayedMessage(message)
    setIsAnimating(true)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSpeak()
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center text-balance">
        Make a Fruit Talk!
      </h1>

      <TalkingFruit
        fruit={selectedFruit}
        message={displayedMessage}
        isAnimating={isAnimating}
      />

      <div className="flex flex-col items-center gap-6 w-full max-w-lg">
        {/* Fruit Selection */}
        <div className="flex flex-col items-center gap-3">
          <label className="text-sm font-medium text-foreground">
            Choose your fruit:
          </label>
          <ButtonGroup>
            {fruits.slice(0, 3).map((fruit) => (
              <Button
                key={fruit.id}
                variant={selectedFruit === fruit.id ? "default" : "outline"}
                onClick={() => setSelectedFruit(fruit.id)}
              >
                {fruit.label}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup>
            {fruits.slice(3).map((fruit) => (
              <Button
                key={fruit.id}
                variant={selectedFruit === fruit.id ? "default" : "outline"}
                onClick={() => setSelectedFruit(fruit.id)}
              >
                {fruit.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="message" className="text-sm font-medium text-foreground text-center">
            What should it say?
          </label>
          <div className="flex gap-2">
            <Input
              id="message"
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button onClick={handleSpeak} disabled={!message.trim()}>
              Speak!
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
