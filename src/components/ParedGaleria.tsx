import { ArrowUpRight } from "lucide-react"

const ParedGaleria = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-12">

      {/* FOTO 01 — GRANDE VERTICAL */}
      <article className="group relative overflow-hidden rounded-2xl bg-[#0b0b0b] lg:col-span-5">

        <div className="aspect-[4/5] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250724/cwwuoumevb3xewcdkp4d.jpg"
            alt="Producción fotográfica para marca"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.05]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Fotografía
            </span>

            <h3 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
              Contenido para marcas
            </h3>

          </div>

          <div
            className="
              absolute
              right-6
              top-6
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:border-[#ff3cac]
              group-hover:bg-[#ff3cac]
              group-hover:text-black
            "
          >
            <ArrowUpRight size={17} />
          </div>

        </div>

      </article>


      {/* COLUMNA DERECHA */}
      <div className="grid gap-5 lg:col-span-7 lg:grid-cols-2">


{/* FOTO 02 */}
<article className="group relative overflow-hidden rounded-2xl bg-[#0b0b0b]">

<div className="relative aspect-[2.6/5] overflow-hidden sm:aspect-[2.4/5]">

    <img
      src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250757/v0ihlmvnaptfqtryntmz.jpg"
      alt="Producción visual"
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-1000
        ease-out
        group-hover:scale-[1.06]
      "
    />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">

      <span className="text-[9px] uppercase tracking-[0.22em] text-white/60 sm:text-[10px] sm:tracking-[0.25em]">
        Producción
      </span>

      <h3 className="mt-1.5 text-base font-medium leading-tight sm:mt-2 sm:text-xl">
        Una identidad visual
      </h3>

    </div>

  </div>

</article>


        {/* FOTO 03 — MÁS ESTRECHA */}
        <article className="group relative mt-0 mt-lg-10 overflow-hidden rounded-2xl bg-[#0b0b0b] sm:mt-16">

          <div className="aspect-[2.6/5] overflow-hidden">

            <img
              src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789239661/dsvbxmoytbberqhjzwr8.jpg"
              alt="Contenido para redes sociales"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-[1.06]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Social media
              </span>

              <h3 className="mt-2 text-xl font-medium">
                Imágenes que comunican
              </h3>

            </div>

          </div>

        </article>


        {/* FOTO 04 — PANORÁMICA */}
        <article className="group relative col-span-2 overflow-hidden rounded-2xl bg-[#0b0b0b]">

          <div className="aspect-[16/8] overflow-hidden">

            <img
              src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250785/wbfd3px35zuwuclon40a.jpg"
              alt="Producción audiovisual para marca"
              className="
                h-full
                w-full
                object-cover
                object-[center_5%]
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-[1.05]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/20" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Producción visual
              </span>

              <h3 className="mt-2 max-w-lg text-2xl font-medium tracking-tight sm:text-3xl">
                Una marca también se construye con imágenes.
              </h3>

            </div>

            <div
              className="
                absolute
                right-6
                top-6
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                text-white
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:border-[#ff3cac]
                group-hover:bg-[#ff3cac]
                group-hover:text-black
              "
            >
              <ArrowUpRight size={17} />
            </div>

          </div>

        </article>

      </div>


      {/* FOTO 05 — VERTICAL AISLADA */}
      <article className="group relative overflow-hidden rounded-2xl bg-[#0b0b0b] lg:col-span-4">

        <div className="aspect-[4/5] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250741/qxd60mbhmkk4re7ajjva.jpg"
            alt="Fotografía de producto"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.06]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

          <div className="absolute left-6 top-6">

          </div>

          <div className="absolute bottom-0 left-0 p-6">

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Fotografía
            </span>

            <h3 className="mt-2 text-xl font-medium">
              Detalles que hacen la diferencia
            </h3>

          </div>

        </div>

      </article>


      {/* FOTO 06 — VERTICAL DESPLAZADA */}
      <article className="group relative mt-0 overflow-hidden rounded-2xl bg-[#0b0b0b] lg:col-span-3 lg:mt-20">

        <div className="aspect-[4/5] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250752/qzxj4ukim493u5vshk6r.jpg"
            alt="Contenido visual para redes"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.07]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-5">

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Contenido
            </span>

            <h3 className="mt-2 text-lg font-medium">
              Presencia visual
            </h3>

          </div>

        </div>

      </article>


      {/* FOTO 07 — VERTICAL DESTACADA */}
      <article className="group relative overflow-hidden rounded-2xl bg-[#0b0b0b] lg:col-span-5">

        <div className="aspect-[4/5] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250735/xxowjpoyhejgoxhcdlrz.jpg"
            alt="Producción fotográfica para redes"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.05]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6">

            <div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Fotografía
              </span>

              <h3 className="mt-2 text-xl font-medium sm:text-2xl">
                Mostrar también es comunicar.
              </h3>

            </div>

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:border-[#ff3cac]
                group-hover:bg-[#ff3cac]
                group-hover:text-black
              "
            >
              <ArrowUpRight size={16} />
            </div>

          </div>

        </div>

      </article>


      {/* FOTO 08 — PANORÁMICA FINAL */}
      <article className="group relative overflow-hidden rounded-2xl bg-[#0b0b0b] lg:col-span-12">

        <div className="aspect-[8/7] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dcggcw8df/image/upload/v1789250798/r3tgij8zptsowmxrasox.jpg"
            alt="Producción de contenido para marcas"
            className="
              h-full
              w-full
              object-cover
              object-[center_30%]
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.04]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-end justify-between gap-8 p-6 sm:p-10">

            <div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff3cac]">
                Producción visual
              </span>

              <h3 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                Cada imagen tiene algo que contar.
              </h3>

            </div>

            <div
              className="
                hidden
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:border-[#ff3cac]
                group-hover:bg-[#ff3cac]
                group-hover:text-black
                sm:flex
              "
            >
              <ArrowUpRight size={18} />
            </div>

          </div>

        </div>

      </article>

    </div>
  )
}

export default ParedGaleria