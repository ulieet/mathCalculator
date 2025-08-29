import Link from "next/link"

const links = [
  { href: "/", label: "Inicio" },
  { href: "#servicios", label: "Calculadora" },
  { href: "#contacto", label: "Grupo" },
]

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center justify-center gap-x-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-900 hover:text-blue-600 px-2 py-2 text-lg font-semibold tracking-wide transition-all duration-200 ease-in-out transform hover:scale-105 whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
