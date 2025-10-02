"use client";

import ErrorReporter from "@/components/ErrorReporter";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // En production, ne pas utiliser ErrorReporter pour éviter les problèmes de postMessage
  if (process.env.NODE_ENV === 'production') {
    return (
      <html>
        <body>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
            padding: '20px'
          }}>
            <h1>Une erreur s'est produite</h1>
            <p>Veuillez réessayer ou contacter le support.</p>
            <button 
              onClick={reset}
              style={{
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Réessayer
            </button>
          </div>
        </body>
      </html>
    );
  }

  return <ErrorReporter error={error} reset={reset} />;
}
