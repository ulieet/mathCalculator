import Link from "next/link"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/calculadora", label: "Calculadora" },
  { href: "/grupo", label: "Grupo" },
]

export default function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <ul className={`${isMobile ? "flex flex-col items-center gap-4" : "flex items-center gap-8"}`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-gray-900 hover:text-blue-600 px-2 py-1 text-lg font-semibold tracking-wide transition-all duration-200 ease-in-out transform hover:scale-105 whitespace-nowrap"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
