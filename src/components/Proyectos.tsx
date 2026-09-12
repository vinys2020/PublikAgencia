import { ArrowRight } from "lucide-react"

const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-7xl px-6 py-32 lg:px-12"
    >
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#ff3cac]">
            Proyectos
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Proyectos que
            <br />
            <span className="text-white/30">llevamos a la realidad.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-white/40 sm:text-right">
          Desarrollo de software, sitios web y tiendas online pensadas para
          resolver necesidades reales.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">

        {/* LIRA */}
        <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">

          {/* VIDEO */}
          <div className="absolute inset-0 overflow-hidden">

            <video
              className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[6px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dcggcw8df/video/upload/v1765932054/cfdifiifosi6djakghw9.mp4"
                type="video/mp4"
              />
            </video>

            {/* SOMBRA INFERIOR */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* SOMBRA ROJA + DESENFOQUE */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#7f1d1d]/85 via-[#7f1d1d]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

          {/* EFECTO ESPEJO */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -inset-y-[40%]
                -left-[70%]
                w-[45%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/5
                via-white/30
                to-transparent
                blur-md
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -inset-y-[30%]
                -left-[65%]
                w-[8%]
                rotate-[18deg]
                bg-white/40
                blur-sm
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[135%]
                group-hover:opacity-100
              "
            />

          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className="
                translate-y-5
                text-center
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* NOMBRE */}
              <div
                className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
                  sm:text-6xl
                "
              >
                LIRA<span className="text-[#ff3cac]">.</span>
              </div>

              {/* LÍNEA */}
              <div className="mx-auto mt-2 h-px w-10 bg-[#ff3cac]/70 transition-all duration-700 group-hover:w-16" />

              {/* DESCRIPCIÓN */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  font-normal
                  leading-relaxed
                  text-white/75
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                "
              >
                Sistema inmobiliario desarrollado para gestionar propiedades,
                clientes, contratos y operaciones desde un solo lugar.
              </p>

            </div>

          </div>

          {/* INFORMACIÓN */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

            <div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ff3cac]/50 group-hover:bg-[#ff3cac]/10">
                Software
              </span>

              <h3 className="mt-2 text-xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Lira Inmobiliaria
              </h3>

            </div>

            {/* LINK */}
            <a
              href="PON_AQUI_LA_URL_DEL_PROYECTO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto Lira Inmobiliaria"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#ff3cac] hover:bg-[#ff3cac] hover:text-black"
            >
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </article>

        {/* LOCUS STORE */}
        <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">

          {/* VIDEO */}
          <div className="absolute inset-0 overflow-hidden">

            <video
              className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[6px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dcggcw8df/video/upload/v1766021901/janxv5m6x1o6clvahhr6.mp4"
                type="video/mp4"
              />
            </video>

            {/* SOMBRA INFERIOR */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* HOVER ROSA SUTIL */}
            {/* SOMBRA VERDE + DESENFOQUE */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14532d]/85 via-[#14532d]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

          {/* EFECTO ESPEJO */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -inset-y-[40%]
                -left-[70%]
                w-[45%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/5
                via-white/30
                to-transparent
                blur-md
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -inset-y-[30%]
                -left-[65%]
                w-[8%]
                rotate-[18deg]
                bg-white/40
                blur-sm
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[135%]
                group-hover:opacity-100
              "
            />

          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className="
                translate-y-5
                text-center
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* NOMBRE */}
              <div
                className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
                  sm:text-6xl
                "
              >
                LOCUS<span className="text-[#ff3cac]">.</span>
              </div>

              {/* LÍNEA */}
              <div className="mx-auto mt-2 h-px w-10 bg-[#ff3cac]/70 transition-all duration-700 group-hover:w-16" />

              {/* DESCRIPCIÓN */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  font-normal
                  leading-relaxed
                  text-white/75
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                "
              >
                Tienda online diseñada para ofrecer una experiencia de compra
                simple, rápida y adaptada a las necesidades del negocio.
              </p>

            </div>

          </div>

          {/* INFORMACIÓN */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

            <div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ff3cac]/50 group-hover:bg-[#ff3cac]/10">
                E-commerce
              </span>

              <h3 className="mt-2 text-xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Locus Store
              </h3>

            </div>

            {/* LINK */}
            <a
              href="PON_AQUI_LA_URL_DEL_PROYECTO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto Locus Store"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#ff3cac] hover:bg-[#ff3cac] hover:text-black"
            >
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </article>

        {/* TRIP DRUGSTORE */}
        {/* TRIP DRUGSTORE */}
        <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">

          {/* VIDEO */}
          <div className="absolute inset-0 overflow-hidden">

            <video
              className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[6px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dcggcw8df/video/upload/v1765935533/lrs8zakxvbbs4qiecojj.mp4"
                type="video/mp4"
              />
            </video>

            {/* SOMBRA INFERIOR */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* SOMBRA AMARILLA + DESENFOQUE */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#854d0e]/85 via-[#854d0e]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

          {/* EFECTO ESPEJO */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -inset-y-[40%]
                -left-[70%]
                w-[45%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/5
                via-white/30
                to-transparent
                blur-md
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -inset-y-[30%]
                -left-[65%]
                w-[8%]
                rotate-[18deg]
                bg-white/40
                blur-sm
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[135%]
                group-hover:opacity-100
              "
            />

          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className="
                translate-y-5
                text-center
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* NOMBRE */}
              <div
                className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
                  sm:text-6xl
                "
              >
                TRIP<span className="text-[#ff3cac]">.</span>
              </div>

              {/* LÍNEA */}
              <div className="mx-auto mt-2 h-px w-10 bg-[#ff3cac]/70 transition-all duration-700 group-hover:w-16" />

              {/* DESCRIPCIÓN */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  font-normal
                  leading-relaxed
                  text-white/75
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                "
              >
                Tienda online desarrollada para facilitar la compra de productos
                y ofrecer una experiencia simple, rápida y moderna.
              </p>

            </div>

          </div>

          {/* INFORMACIÓN */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

            <div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ff3cac]/50 group-hover:bg-[#ff3cac]/10">
                E-commerce
              </span>

              <h3 className="mt-2 text-xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Trip Drugstore
              </h3>

            </div>

            {/* LINK */}
            <a
              href="PON_AQUI_LA_URL_DEL_PROYECTO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto Trip Drugstore"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#ff3cac] hover:bg-[#ff3cac] hover:text-black"
            >
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </article>

        {/* PLAYBACK DISCO */}
        <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">

          {/* VIDEO */}
          <div className="absolute inset-0 overflow-hidden">

            <video
              className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[6px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dcggcw8df/video/upload/v1765990162/xui7apl6gud4iouqvqpb.mp4"
                type="video/mp4"
              />
            </video>

            {/* SOMBRA INFERIOR */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* SOMBRA MORADA + DESENFOQUE */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#581c87]/85 via-[#581c87]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

          {/* EFECTO ESPEJO */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -inset-y-[40%]
                -left-[70%]
                w-[45%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/5
                via-white/30
                to-transparent
                blur-md
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -inset-y-[30%]
                -left-[65%]
                w-[8%]
                rotate-[18deg]
                bg-white/40
                blur-sm
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[135%]
                group-hover:opacity-100
              "
            />

          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className="
                translate-y-5
                text-center
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* NOMBRE */}
              <div
                className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
                  sm:text-6xl
                "
              >
                PLAYBACK<span className="text-[#ff3cac]">.</span>
              </div>

              {/* LÍNEA */}
              <div className="mx-auto mt-2 h-px w-10 bg-[#ff3cac]/70 transition-all duration-700 group-hover:w-16" />

              {/* DESCRIPCIÓN */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  font-normal
                  leading-relaxed
                  text-white/75
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                "
              >
                Desarrollo web pensado para transmitir la identidad,
                energía y experiencia de Playback Disco.
              </p>

            </div>

          </div>

          {/* INFORMACIÓN */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

            <div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ff3cac]/50 group-hover:bg-[#ff3cac]/10">
                Web
              </span>

              <h3 className="mt-2 text-xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Playback Disco
              </h3>

            </div>

            {/* LINK */}
            <a
              href="PON_AQUI_LA_URL_DEL_PROYECTO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto Playback Disco"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#ff3cac] hover:bg-[#ff3cac] hover:text-black"
            >
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </article>

        {/* MORA MECÁNICA */}
        {/* MORA MECÁNICA */}

        <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">

          {/* VIDEO */}

          <div className="absolute inset-0 overflow-hidden">

            <video
              className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[6px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789235420/cq18h1wflrnt63kcmhh6.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
              En desarrollo
            </div>

            {/* SOMBRA INFERIOR */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* SOMBRA NARANJA + DESENFOQUE */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#9a3412]/85 via-[#9a3412]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

          {/* EFECTO ESPEJO */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -inset-y-[40%]
                -left-[70%]
                w-[45%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/5
                via-white/30
                to-transparent
                blur-md
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -inset-y-[30%]
                -left-[65%]
                w-[8%]
                rotate-[18deg]
                bg-white/40
                blur-sm
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[135%]
                group-hover:opacity-100
              "
            />

          </div>

          {/* CONTENIDO CENTRAL */}

          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className="
                translate-y-5
                text-center
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* NOMBRE */}
              <div
                className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
                  sm:text-6xl
                "
              >
                MORA<span className="text-[#ff6a00]">.</span>
              </div>

              {/* LÍNEA */}
              <div className="mx-auto mt-2 h-px w-10 bg-[#ff6a00]/70 transition-all duration-700 group-hover:w-16" />

              {/* DESCRIPCIÓN */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  font-normal
                  leading-relaxed
                  text-white/75
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                "
              >
                Sistema de gestión desarrollado para organizar el trabajo del
                taller y administrar turnos, clientes y vehículos desde un solo lugar.
              </p>

            </div>

          </div>

          {/* INFORMACIÓN */}

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

            <div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ff6a00]/50 group-hover:bg-[#ff6a00]/10">
                Software
              </span>

              <h3 className="mt-2 text-xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Mora Mecánica
              </h3>

            </div>

            {/* LINK */}
            <a
              href="PON_AQUI_LA_URL_DEL_PROYECTO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto Mora Mecánica"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black"
            >
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </article>

        {/* FUNSION LED */}
        <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">

          {/* VIDEO */}
          <div className="absolute inset-0 overflow-hidden">

            <video
              className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:blur-[6px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789238995/f6cakx4uhetwwhqa4udj.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
              En desarrollo
            </div>

            {/* SOMBRA INFERIOR */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* SOMBRA LILA + DESENFOQUE */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#6d28d9]/85 via-[#6d28d9]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

          {/* EFECTO ESPEJO */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -inset-y-[40%]
                -left-[70%]
                w-[45%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/5
                via-white/30
                to-transparent
                blur-md
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -inset-y-[30%]
                -left-[65%]
                w-[8%]
                rotate-[18deg]
                bg-white/40
                blur-sm
                opacity-0
                transition-all
                duration-1000
                ease-out
                group-hover:left-[135%]
                group-hover:opacity-100
              "
            />

          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div
              className="
                translate-y-5
                text-center
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* NOMBRE */}
              <div
                className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
                  sm:text-6xl
                "
              >
                VIEW<span className="text-[#c084fc]">.</span>
              </div>

              {/* LÍNEA */}
              <div className="mx-auto mt-2 h-px w-10 bg-[#c084fc]/70 transition-all duration-700 group-hover:w-16" />

              {/* DESCRIPCIÓN */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  font-normal
                  leading-relaxed
                  text-white/75
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                "
              >
                Desarrollo web pensado para mostrar la propuesta de VIEW LED
                de una manera clara, moderna y atractiva.
              </p>

            </div>

          </div>

          {/* INFORMACIÓN */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

            <div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#c084fc]/50 group-hover:bg-[#c084fc]/10">
                Web
              </span>

              <h3 className="mt-2 text-xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                VIEW LED
              </h3>

            </div>

            {/* LINK */}
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/40 backdrop-blur-md"
              aria-label="Proyecto Funsion LED en desarrollo"
            >
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </div>

          </div>

        </article>

      </div>
    </section>
  )
}

export default Proyectos