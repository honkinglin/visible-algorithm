import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function Aside({ children }: { children?: React.ReactNode }) {
  return (
    <aside className="flex flex-col w-64 border-r bg-background h-screen shrink-0	">
      <div className="flex gap-6 md:gap-10 p-4 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold inline-block">{siteConfig.name}</span>
        </Link>
      </div>

      <div className="flex flex-col gap-4 flex-1 p-4 overflow-auto">
        {children}
      </div>

      <div className="flex items-center justify-end p-2 border-t">
        <nav className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  )
}
