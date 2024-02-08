import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import TeamSwitcher from "@/components/team-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user-nav"
import { Search } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <TeamSwitcher />
                <MainNav className="mx-6" />
                <div className="hidden ml-auto md:flex items-center space-x-4">
                  <Search />
                  <UserNav />
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <Toaster />
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
