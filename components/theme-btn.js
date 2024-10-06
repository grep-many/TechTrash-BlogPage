"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure that the component is mounted before accessing the theme value
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")
  }

  // Avoid rendering until the theme has been determined
  if (!mounted) {
    return null
  }

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {theme === "dark" || resolvedTheme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
