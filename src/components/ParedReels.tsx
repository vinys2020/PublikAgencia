const ParedReels = () => {
  return (
    <div className="mt-32 lg:mt-48">

      {/* ENCABEZADO DE SALA */}

      <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

        <div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff3cac]">
            Galeria de reels
          </span>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Tu Marca
            <br />
            <span className="text-white/25">
              en movimiento.
            </span>
          </h3>

        </div>

        <p className="max-w-xs text-sm leading-relaxed text-white/35 sm:text-right">
          Reels y piezas audiovisuales creadas para comunicar,
          mostrar y generar movimiento.
        </p>

      </div>


      {/* REELS */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">


        {/* REEL 01 */}

        <a
          href="https://www.instagram.com/reel/Csh0GjONA79/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <article>

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.02]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789243817/jie9lepkdtzqes3idhrp.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 01
              </span>
            </div>

          </article>
        </a>


        {/* REEL 02 */}

        <a
          href="https://www.instagram.com/reel/CsKRKexJO6T/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group mt-12 sm:mt-20">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789245274/nyt7jjbxfbssia0bhntp.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 02
              </span>
            </div>

          </article>
        </a>


        {/* REEL 03 */}

        <a
          href="https://www.instagram.com/p/DA1l1BIpdW3/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789247010/o6cek2jj4defvizewaqe.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 03
              </span>
            </div>

          </article>
        </a>


        {/* REEL 04 */}

        <a
          href="https://www.instagram.com/reel/DEbBqZspiw6/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group mt-12 sm:mt-20">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789249960/ie8kiqmogummnijvj7ll.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 04
              </span>
            </div>

          </article>
        </a>


        {/* REEL 05 */}

        <a
          href="https://www.instagram.com/reel/DJiE1vNMkYo/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789247614/mdl5l1modznvynk2g2as.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 05
              </span>
            </div>

          </article>
        </a>


        {/* REEL 06 */}

        <a
          href="https://www.instagram.com/p/DZ56e_5RxVW/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group mt-12 sm:mt-20">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789244267/iqqogpmnqrt3npwerejc.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 06
              </span>
            </div>

          </article>
        </a>


        {/* REEL 07 */}

        <a
          href="https://www.instagram.com/p/DZN7rAIJnMI/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789244264/l7gmohxvffewwlqdxoc3.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 07
              </span>
            </div>

          </article>
        </a>


        {/* REEL 08 */}

        <a
          href="https://www.instagram.com/p/DXkkI7ojdXM/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group mt-12 sm:mt-20">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789247011/tw2ihdkixvvkqqoy5deg.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 08
              </span>
            </div>

          </article>
        </a>


        {/* REEL 09 */}

        <a
          href="https://www.instagram.com/p/DY3BP7Vtum0/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789248820/ltgijjhhx32d4stn9fz1.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 09
              </span>
            </div>

          </article>
        </a>


        {/* REEL 10 */}

        <a
          href="https://www.instagram.com/p/C_wWGYXpenC/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="group mt-12 sm:mt-20">

            <div className="relative overflow-hidden rounded-xl bg-[#111] p-1.5 shadow-2xl shadow-black/40">

              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.04]
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dcggcw8df/video/upload/v1789245652/q53qchroxm3gem81wn8r.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

            <div className="mt-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Reel / 10
              </span>
            </div>

          </article>
        </a>

      </div>

    </div>
  )
}

export default ParedReels