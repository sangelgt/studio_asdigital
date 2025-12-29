"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-text-muted-light dark:text-text-muted-dark hover:text-primary"
    >
      <span className="material-symbols-outlined text-xl transition-transform duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0">
        dark_mode
      </span>
      <span className="material-symbols-outlined text-xl absolute transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100">
        light_mode
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
