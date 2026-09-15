import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Full Stack AI Engineer | AI Integration Specialist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          position: 'relative',
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

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Asliddin Ergashev
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 30,
            }}
          >
            Full Stack AI Engineer
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#10b981',
              marginBottom: 40,
            }}
          >
            AI Integration Specialist
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#a0a0a0',
              maxWidth: '900px',
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            Specializing in LLM-powered document intelligence, RAG systems, and production-ready AI applications
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: 28,
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
