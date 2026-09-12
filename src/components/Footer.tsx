function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              className="text-3xl font-bold tracking-[-0.06em]"
            >
              publi<span className="text-[#ff3cac]">k</span>
            </a>

            <p className="mt-2 text-sm text-white/40">
              Software & Marketing Digital
            </p>

            <p className="mt-5 text-sm text-white/50">
              Diseñamos. Desarrollamos. Creamos.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
            <a href="#inicio" className="transition-colors hover:text-white">
              Inicio
            </a>

            <a href="#servicios" className="transition-colors hover:text-white">
              Servicios
            </a>

            <a href="#proyectos" className="transition-colors hover:text-white">
              Proyectos
            </a>

            <a href="#nosotros" className="transition-colors hover:text-white">
              Nosotros
            </a>

            <a href="#contacto" className="transition-colors hover:text-white">
              Contacto
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Publik. Todos los derechos reservados.</p>

          <p>Software & Marketing Digital</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer