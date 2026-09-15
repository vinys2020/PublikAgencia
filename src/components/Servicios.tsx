import { ArrowRight } from "lucide-react"

const Servicios = () => {
  return (
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
                  src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789483147/wwryymki1ihieb6lp5zo.mp4"
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
                  src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482840/lsyaugaoouvib8836fcx.mp4"
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
                  src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482838/mlspyyfjzrgleb2ouigq.mp4"
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
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482841/o2hjvfcc4jmf9t0gfimd.mp4"
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
                  src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482840/m4gavhbqsa85lufhqkzn.mp4"
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
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482840/umduhqesqithoqoclxdw.mp4"
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
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482840/nrxeuvhmnx8fe0wobrzq.mp4"
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
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789482816/l9csd0mzymwmwu3ylje4.mp4"
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
  )
}

export default Servicios