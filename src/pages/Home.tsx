
import {
  ArrowDownRight,
  ArrowRight,
} from 'lucide-react'


import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Servicios from "../components/Servicios"
import Proyectos from "../components/Proyectos"
import ParedGaleria from "../components/ParedGaleria"
import ParedReels from "../components/ParedReels"


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

<Servicios />

{/* QUIÉNES SOMOS */}
<section
  id="nosotros"
  className="relative overflow-hidden bg-white text-black"
>
  <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-40">

    {/* ENCABEZADO */}
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

      <div>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#ff3cac]">
          Quiénes somos
        </span>

        <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          Creamos
          <br />
          <span className="text-black/30">cosas que funcionan.</span>
        </h2>
      </div>

      <div className="max-w-xs pt-2 lg:pt-16">
        <p className="text-sm leading-relaxed text-black/55">
          Somos Publik, un estudio de software y contenido digital que
          transforma ideas en soluciones reales.
        </p>
      </div>

    </div>

    {/* SEPARADOR */}
    <div className="my-20 h-px w-full bg-black/10" />

    {/* CONTENIDO */}
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">

      {/* TEXTO PRINCIPAL */}
      <div className="lg:col-span-7">

        <p className="max-w-4xl text-2xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl">
          En Publik desarrollamos soluciones digitales y contenido
          audiovisual para potenciar marcas y negocios.
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/55 sm:text-lg">
          Nos gusta involucrarnos en cada proyecto, entender cómo funciona
          cada negocio y encontrar la mejor manera de llevar sus ideas a
          lo digital.
        </p>

      </div>

{/* IDENTIDAD */}

<div className="lg:col-span-5 lg:flex lg:justify-end">

  <div className="w-full max-w-sm">


<div className="border-t border-black/10 py-6">
  <div className="flex items-center justify-between">
    <span className="text-xs uppercase tracking-[0.2em] text-black/40">
      Nuestra mirada
    </span>

    <span className="text-sm text-black/30">
      01
    </span>
  </div>

  <p className="mt-4 text-lg font-medium leading-snug tracking-tight">
    Primero entendemos el proyecto y después pensamos cómo llevarlo adelante.
  </p>
</div>

<div className="border-t border-black/10 py-6">
  <div className="flex items-center justify-between">
    <span className="text-xs uppercase tracking-[0.2em] text-black/40">
      Nuestra forma
    </span>

    <span className="text-sm text-black/30">
      02
    </span>
  </div>

  <p className="mt-4 text-lg font-medium leading-snug tracking-tight">
    Nos metemos de lleno en cada proyecto y prestamos atención a los detalles.
  </p>
</div>

<div className="border-y border-black/10 py-6">
  <div className="flex items-center justify-between">
    <span className="text-xs uppercase tracking-[0.2em] text-black/40">
      Lo que buscamos
    </span>

    <span className="text-sm text-black/30">
      03
    </span>
  </div>

  <p className="mt-4 text-lg font-medium leading-snug tracking-tight">
    Que cada idea tenga un sentido y que el resultado realmente sirva.
  </p>
</div>


  </div>

</div>


    </div>

    {/* FRASE FINAL */}
    <div className="mt-32 overflow-hidden">

      <p className="text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
        Ideas
        <span className="text-[#ff3cac]">.</span>
        <br />
        Código
        <span className="text-black/20">.</span>
        <br />
        Contenido
        <span className="text-black/20">.</span>
      </p>

    </div>

  </div>

  {/* DETALLE DECORATIVO */}
  <div className="pointer-events-none absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#ff3cac]/10 blur-3xl" />

</section>

<Proyectos />

{/* PRODUCCIÓN VISUAL */}

<section
  id="contenido"
  className="relative overflow-hidden bg-[#050505] text-white"
>
  {/* FONDO */}
  <div className="pointer-events-none absolute inset-0">

<div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#ff3cac]/[0.07] blur-[140px]" />

<div
  className="
    absolute
    inset-0
    opacity-[0.035]
    [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
    [background-size:80px_80px]
  "
/>


  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-40">


{/* ========================================= */}
{/* ENCABEZADO */}
{/* ========================================= */}

<div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

  <div>

    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#ff3cac]">
      Producción visual
    </span>

    <h2 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
      Lo que hacemos,
      <br />
      <span className="text-white/25">
        también se ve.
      </span>
    </h2>

  </div>


  <p className="max-w-sm text-sm leading-relaxed text-white/45 lg:pb-2 lg:text-right">
    Fotos, videos y contenido creado para marcas que quieren mostrar lo
    que hacen de una manera distinta.
  </p>

</div>


{/* SEPARADOR */}

<div className="my-20 h-px w-full bg-white/10 lg:my-28" />


<ParedGaleria />


<ParedReels />


{/* ========================================= */}
{/* CIERRE */}
{/* ========================================= */}

<div className="mt-32 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 lg:mt-48 sm:flex-row sm:items-end">

  <p className="max-w-xl text-lg font-medium leading-snug tracking-tight text-white/80 sm:text-2xl">
    No se trata solamente de sacar una foto o grabar un video.
    Se trata de encontrar la forma de mostrar una marca.
  </p>

  <span className="text-xs uppercase tracking-[0.25em] text-white/30">
    Publik / Producción visual
  </span>

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
