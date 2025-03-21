import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <span className="font-bold text-sm">MQ</span>
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Modelos de Calidad. Todos los derechos reservados.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
          <Link
            href="/mccall/teoria"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            McCall
          </Link>
          <Link
            href="/boehm/teoria"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Boehm
          </Link>
          <Link
            href="/furps/teoria"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FURPS
          </Link>
          <Link
            href="/comparacion"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comparación
          </Link>
        </div>
      </div>
    </footer>
  )
}

