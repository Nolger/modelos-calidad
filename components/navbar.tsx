"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const mccallItems = [
  {
    title: "Teoría",
    href: "/mccall/teoria",
    description: "Fundamentos teóricos del modelo de calidad de McCall",
  },
  {
    title: "Aplicación",
    href: "/mccall/aplicacion",
    description: "Casos prácticos de aplicación del modelo de McCall",
  },
]

const boehmItems = [
  {
    title: "Teoría",
    href: "/boehm/teoria",
    description: "Fundamentos teóricos del modelo de calidad de Boehm",
  },
  {
    title: "Aplicación",
    href: "/boehm/aplicacion",
    description: "Casos prácticos de aplicación del modelo de Boehm",
  },
]

const furpsItems = [
  {
    title: "Teoría",
    href: "/furps/teoria",
    description: "Fundamentos teóricos del modelo de calidad FURPS",
  },
  {
    title: "Aplicación",
    href: "/furps/aplicacion",
    description: "Casos prácticos de aplicación del modelo FURPS",
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
            <span className="font-bold text-lg">MQ</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">Modelos de Calidad</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), pathname === "/" && "bg-accent text-accent-foreground")}
                  >
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(pathname.includes("/mccall") && "bg-accent text-accent-foreground")}
                >
                  McCall
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {mccallItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        description={item.description}
                        active={pathname === item.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(pathname.includes("/boehm") && "bg-accent text-accent-foreground")}
                >
                  Boehm
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {boehmItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        description={item.description}
                        active={pathname === item.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(pathname.includes("/furps") && "bg-accent text-accent-foreground")}
                >
                  FURPS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {furpsItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        description={item.description}
                        active={pathname === item.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/comparacion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === "/comparacion" && "bg-accent text-accent-foreground",
                    )}
                  >
                    Comparación
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className={cn(
                    "text-lg font-semibold px-4 py-2 rounded-md transition-colors",
                    pathname === "/" ? "bg-accent text-accent-foreground" : "hover:bg-muted",
                  )}
                  onClick={() => setOpen(false)}
                >
                  Inicio
                </Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mccall">
                    <AccordionTrigger
                      className={cn(
                        "px-4 rounded-md",
                        pathname.includes("/mccall") && "bg-accent text-accent-foreground",
                      )}
                    >
                      McCall
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        {mccallItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                              "text-muted-foreground hover:text-foreground py-2 px-4 rounded-md transition-colors",
                              pathname === item.href && "bg-muted text-foreground font-medium",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="boehm">
                    <AccordionTrigger
                      className={cn(
                        "px-4 rounded-md",
                        pathname.includes("/boehm") && "bg-accent text-accent-foreground",
                      )}
                    >
                      Boehm
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        {boehmItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                              "text-muted-foreground hover:text-foreground py-2 px-4 rounded-md transition-colors",
                              pathname === item.href && "bg-muted text-foreground font-medium",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="furps">
                    <AccordionTrigger
                      className={cn(
                        "px-4 rounded-md",
                        pathname.includes("/furps") && "bg-accent text-accent-foreground",
                      )}
                    >
                      FURPS
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        {furpsItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                              "text-muted-foreground hover:text-foreground py-2 px-4 rounded-md transition-colors",
                              pathname === item.href && "bg-muted text-foreground font-medium",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  href="/comparacion"
                  className={cn(
                    "text-lg font-semibold px-4 py-2 rounded-md transition-colors",
                    pathname === "/comparacion" ? "bg-accent text-accent-foreground" : "hover:bg-muted",
                  )}
                  onClick={() => setOpen(false)}
                >
                  Comparación
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  description: string
  active?: boolean
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, description, active, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              active
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

