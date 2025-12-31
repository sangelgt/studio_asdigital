import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// CORRECCIÓN: Importar directamente desde la raíz de la librería
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
