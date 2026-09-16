import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Full Stack AI Engineer | AI Integration Specialist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Fetch the profile photo
  const imageData = await fetch(
    new URL('../../public/foto.png', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Accent gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
          }}
        />

        {/* Left Side - Photo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '350px',
            height: '350px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #10b981',
              display: 'flex',
              position: 'relative',
            }}
          >
            <img
              src={`data:image/png;base64,${Buffer.from(imageData).toString('base64')}`}
              width="300"
              height="300"
              style={{
                objectFit: 'cover',
                filter: 'grayscale(0.3) brightness(0.95)',
              }}
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flex: 1,
            paddingLeft: '60px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Asliddin Ergashev
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: '#10b981',
              marginBottom: 20,
            }}
          >
            Full Stack AI Engineer
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#3b82f6',
              marginBottom: 30,
            }}
          >
            AI Integration Specialist
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 18,
              color: '#a0a0a0',
              maxWidth: '550px',
              lineHeight: 1.6,
              marginBottom: 30,
            }}
          >
            Specializing in LLM-powered document intelligence, RAG systems, and production-ready AI applications
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: '#10b981',
              letterSpacing: '0.05em',
            }}
          >
            fullaiengineer.com
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #10b981 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
