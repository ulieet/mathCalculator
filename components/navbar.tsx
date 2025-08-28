import NavLinks from "./nav-links"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
 
          <div className="text-2xl font-bold text-gray-900">
            LOGO
          </div>


          <NavLinks />
        </div>
      </div>
    </nav>
  )
}
