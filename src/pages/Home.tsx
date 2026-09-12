
import {
  ArrowDownRight,
  ArrowRight,
} from 'lucide-react'

import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Home() {
  return (
    <main
      id="inicio"
      className="min-h-screen overflow-x-hidden bg-[#050505] text-white"
    >  
    <Intro />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#ff3cac]/10 blur-[150px]" />

          <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/10 blur-[160px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-12">
          <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            
            {/* Hero text */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#ff3cac]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/45">
                  Software & Marketing Digital
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                Hacemos que
                <br />

                <span className="text-white/25">las ideas</span>
                <br />

                <span className="bg-gradient-to-r from-[#ff3cac] via-[#ff3cac] to-[#8b5cf6] bg-clip-text text-transparent">
                  pasen.
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Desarrollamos soluciones digitales y contenido audiovisual
                para potenciar marcas y negocios.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#ff3cac] hover:text-white"
                >
                  Empezar un proyecto

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
                >
                  Ver proyectos
                </a>
              </div>

              {/* Services line */}
              <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                {[
                  'Software',
                  'Web',
                  'Marketing',
                  'Audiovisual',
                  'Diseño',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs uppercase tracking-[0.16em] text-white/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden h-[600px] lg:block">
              <div className="absolute right-0 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-white/10" />

              <div className="absolute right-[8%] top-[12%] h-3 w-3 rounded-full bg-[#ff3cac] shadow-[0_0_30px_#ff3cac]" />

              <div className="absolute bottom-[15%] left-[8%] h-2 w-2 rounded-full bg-white/50" />

              <div className="absolute left-1/2 top-1/2 flex h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-8xl font-black tracking-[-0.12em] text-white">
                    PK<span className="text-[#ff3cac]">.</span>
                  </div>

                  <p className="mt-4 max-w-[180px] text-xs uppercase leading-5 tracking-[0.2em] text-white/35">
                    Tecnología
                    <br />
                    creatividad
                    <br />
                    estrategia
                  </p>
                </div>
              </div>

              <div className="absolute right-0 top-[18%] rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Ideas → realidad
                </span>
              </div>

              <div className="absolute bottom-[20%] left-0 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#ff3cac]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Digital studio
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <a
          href="#servicios"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 transition-colors hover:text-white sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ArrowDownRight size={16} />
        </a>
      </section>

{/* MARQUEE */}
<section className="overflow-hidden border-y border-white/10 py-5">
  <div className="marquee">
    <div className="marquee-track">
      <div className="marquee-content">
        <span>Software</span>
        <span>✦</span>
        <span>Desarrollo Web</span>
        <span>✦</span>
        <span>Marketing Digital</span>
        <span>✦</span>
        <span>Producción Audiovisual</span>
        <span>✦</span>
        <span>Diseño</span>
        <span>✦</span>
        <span>Publicidad</span>
        <span>✦</span>
      </div>

      {/* Duplicado para crear el loop infinito */}
      <div className="marquee-content" aria-hidden="true">
        <span>Software</span>
        <span>✦</span>
        <span>Desarrollo Web</span>
        <span>✦</span>
        <span>Marketing Digital</span>
        <span>✦</span>
        <span>Producción Audiovisual</span>
        <span>✦</span>
        <span>Diseño</span>
        <span>✦</span>
        <span>Publicidad</span>
        <span>✦</span>
      </div>
    </div>
  </div>
</section>

{/* SERVICES */}
<section
  id="servicios"
  className="relative overflow-hidden border-t border-white/10"
>
  <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-40">

    {/* HEADER */}
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-[#ff3cac]">
          Lo que hacemos
        </span>

        <h2 className="mt-6 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
          Una idea.
          <br />
          <span className="text-white/30">
            Muchas posibilidades.
          </span>
        </h2>
      </div>

      <div className="flex items-end">
        <p className="max-w-lg text-sm leading-7 text-white/40 sm:text-base">
          Combinamos tecnología, creatividad y estrategia para crear
          soluciones que realmente tengan sentido para cada proyecto.
        </p>
      </div>

    </div>


    {/* SERVICES GRID */}
    <div className="mt-20 grid gap-x-8 gap-y-20 md:grid-cols-2">

      {/* 01 */}
      <article className="group">

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">

          <video
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            {/* COLOCÁ ACÁ LA RUTA DE TU VIDEO */}
            <source
              src="/videos/software_1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
              01
            </span>
          </div>

        </div>

        <div className="mt-6 flex items-start justify-between gap-6">

          <div>
            <h3 className="text-xl font-medium">
              Desarrollo de software
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
              Sistemas y herramientas digitales pensadas para la forma
              de trabajar de cada negocio.
            </p>
          </div>

          <ArrowRight
            size={18}
            className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
          />

        </div>

      </article>


      {/* 02 */}
      <article className="group">

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">

          <video
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            {/* COLOCÁ ACÁ LA RUTA DE TU VIDEO */}
            <source
              src="/videos/publik (9).mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
              02
            </span>
          </div>

        </div>

        <div className="mt-6 flex items-start justify-between gap-6">

          <div>
            <h3 className="text-xl font-medium">
              Desarrollo web
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
              Sitios web modernos, rápidos y diseñados para comunicar
              y generar resultados.
            </p>
          </div>

          <ArrowRight
            size={18}
            className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
          />

        </div>

      </article>


      {/* 03 */}
      {/* 03 */}
<article className="group">

  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">

    <video
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source
        src="/videos/publik (2).mp4"
        type="video/mp4"
      />
    </video>

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

    <div className="absolute left-5 top-5">
      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
        03
      </span>
    </div>

  </div>

  <div className="mt-6 flex items-start justify-between gap-6">

    <div>
      <h3 className="text-xl font-medium">
        Marketing digital
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
        Estrategias y campañas para conectar marcas con las
        personas correctas.
      </p>
    </div>

    <ArrowRight
      size={18}
      className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
    />

  </div>

</article>


      {/* 04 */}
<article className="group">

  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909] p-1">

    <div className="relative h-full w-full overflow-hidden rounded-[14px]">

      <video
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/videos/publik (10).mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
          04
        </span>
      </div>

    </div>

  </div>

  <div className="mt-6 flex items-start justify-between gap-6">

    <div>
      <h3 className="text-xl font-medium">
        Producción audiovisual
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
        Contenido fotográfico y audiovisual pensado para
        comunicar de manera diferente.
      </p>
    </div>

    <ArrowRight
      size={18}
      className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
    />

  </div>

</article>


{/* 05 */}
<article className="group">

  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">

    <video
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source
        src="/videos/publik (11).mp4"
        type="video/mp4"
      />
    </video>

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

    <div className="absolute left-5 top-5">
      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
        05
      </span>
    </div>

  </div>

  <div className="mt-6 flex items-start justify-between gap-6">

    <div>
      <h3 className="text-xl font-medium">
        Diseño gráfico
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
        Identidad visual, piezas gráficas y recursos que construyen
        una marca consistente.
      </p>
    </div>

    <ArrowRight
      size={18}
      className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
    />

  </div>

</article>


      {/* 06 */}
      <article className="group">

  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909] p-1">

    <div className="relative h-full w-full overflow-hidden rounded-[14px]">

      <video
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/videos/publik (7).mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
          06
        </span>
      </div>

    </div>

  </div>

  <div className="mt-6 flex items-start justify-between gap-6">

    <div>
      <h3 className="text-xl font-medium">
        Publicidad
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
        Campañas digitales enfocadas en visibilidad, alcance
        y crecimiento.
      </p>
    </div>

    <ArrowRight
      size={18}
      className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
    />

  </div>

</article>

{/* 07 */}
<article className="group">

  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909] p-1">

    <div className="relative h-full w-full overflow-hidden rounded-[14px]">

      <video
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/videos/publik (6).mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
          07
        </span>
      </div>

    </div>

  </div>

  <div className="mt-6 flex items-start justify-between gap-6">

    <div>
      <h3 className="text-xl font-medium">
        Branding
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
        Creamos identidades visuales que representan la esencia
        de una marca y la hacen reconocible.
      </p>
    </div>

    <ArrowRight
      size={18}
      className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
    />

  </div>

</article>


{/* 08 */}
<article className="group">

  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#090909] p-1">

    <div className="relative h-full w-full overflow-hidden rounded-[14px]">

      <video
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/videos/movilapp.mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
          08
        </span>
      </div>

    </div>

  </div>

  <div className="mt-6 flex items-start justify-between gap-6">

    <div>
      <h3 className="text-xl font-medium">
        Aplicaciones móviles
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
        Diseñamos y desarrollamos aplicaciones móviles pensadas
        para ofrecer experiencias simples y funcionales.
      </p>
    </div>

    <ArrowRight
      size={18}
      className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff3cac]"
    />

  </div>

</article>

    </div>

  </div>
</section>

      {/* DIFFERENTIAL */}
      <section
        id="nosotros"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#ff3cac]">
              Nuestra forma de trabajar
            </span>

            <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
              Tu negocio tiene una forma de hacer las cosas.
              <span className="text-white/30">
                {' '}
                Tu solución digital también debería.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Pensamos',
                text: 'Entendemos el proyecto antes de pensar en la solución.',
              },
              {
                number: '02',
                title: 'Diseñamos',
                text: 'Convertimos ideas y necesidades en experiencias claras.',
              },
              {
                number: '03',
                title: 'Desarrollamos',
                text: 'Construimos soluciones funcionales, escalables y reales.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#080808] p-8 sm:p-10"
              >
                <span className="text-xs text-[#ff3cac]">
                  {item.number}
                </span>

                <h3 className="mt-16 text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
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
              Trabajo que
              <br />
              <span className="text-white/30">habla por nosotros.</span>
            </h2>
          </div>

          <a
            href="#contacto"
            className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
          >
            Ver todos los proyectos

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Project 1 */}
          <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff3cac]/20 via-transparent to-[#7c3aed]/10 transition-transform duration-700 group-hover:scale-105" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold tracking-[-0.08em]">
                  LIRA<span className="text-[#ff3cac]">.</span>
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/30">
                  Sistema inmobiliario
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#ff3cac]">
                  Software
                </span>

                <h3 className="mt-2 text-xl font-medium">
                  Lira Inmobiliaria
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm">
                <ArrowRight size={16} />
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/15 via-transparent to-[#ff3cac]/10 transition-transform duration-700 group-hover:scale-105" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold tracking-[-0.08em]">
                  PUBLIK<span className="text-[#ff3cac]">.</span>
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/30">
                  Desarrollo web
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#ff3cac]">
                  Web
                </span>

                <h3 className="mt-2 text-xl font-medium">
                  Experiencias digitales
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm">
                <ArrowRight size={16} />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contacto"
        className="relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff3cac]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-40">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#ff3cac]">
              Empecemos
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              ¿Tenés un proyecto
              <br />
              <span className="text-white/30">en mente?</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/45">
              Contanos qué tenés en mente y vemos juntos cómo podemos
              convertirlo en algo real.
            </p>

            <a
              href="mailto:faculez07@gmail.com"
              className="group mt-10 inline-flex items-center gap-4 text-lg font-medium"
            >
              faculez07@gmail.com

              <ArrowRight
                size={20}
                className="text-[#ff3cac] transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
