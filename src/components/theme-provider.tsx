import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// CORRECCIÓN: Usar React.ComponentProps para derivar los tipos y evitar errores de importación.
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
