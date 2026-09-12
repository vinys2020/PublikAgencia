import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="text-2xl font-bold tracking-[-0.06em]">
            publi<span className="text-[#ff3cac]">k</span>
          </span>

          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
            Software & Marketing Digital
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050505] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar