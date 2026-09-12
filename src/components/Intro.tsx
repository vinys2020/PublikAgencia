import { useEffect, useState } from 'react'

function Intro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 4800)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="intro fixed inset-0 z-[9999] overflow-hidden bg-[#050505]">

      {/* ATMÓSFERA */}
      <div className="intro-glow" />
      <div className="intro-glow-secondary" />

      {/* TÚNEL 3D */}
      <div className="intro-tunnel">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="intro-tunnel-ring"
            style={
              {
                '--ring-index': index,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* LÍNEAS DEL TÚNEL */}
      <div className="intro-tunnel-lines">
        {Array.from({ length: 14 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                '--line-index': index,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* PARTÍCULAS */}
      <div className="intro-particles">
        {Array.from({ length: 32 }).map((_, index) => (
          <span
            key={index}
            className="intro-particle"
            style={
              {
                '--i': index,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* ENERGÍA CENTRAL */}
      <div className="intro-energy">
        <div className="intro-energy-core" />
      </div>

      {/* ESTELAS INMERSIVAS */}
      <div className="intro-trail intro-trail-one" />
      <div className="intro-trail intro-trail-two" />
      <div className="intro-trail intro-trail-three" />
      <div className="intro-trail intro-trail-four" />
      <div className="intro-trail intro-trail-five" />
      <div className="intro-trail intro-trail-six" />
      <div className="intro-trail intro-trail-seven" />

      {/* NÚCLEO */}
      <div className="intro-core">
        <div className="intro-core-inner" />
      </div>

{/* LOGO */}
<div className="intro-logo">

  <img
    src="/images/branding/isologo.png"
    alt="Publik"
    className="intro-isologo"
  />

  <div className="intro-brand">
    publi<span>k</span>
  </div>

  <div className="intro-subtitle">
    Software & Marketing Digital
  </div>

</div>

      {/* DESTELLO */}
      <div className="intro-flash" />

      {/* SALIDA */}
      <div className="intro-exit-glow" />

      {/* PROGRESO */}
      <div className="intro-progress" />

    </div>
  )
}

export default Intro