'use client';

import Image from 'next/image';
import Header from '@/components/common/Header';

export default function ChiSiamo() {
  return (
    <div>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        {/* Фон */}
        <div
          className="hidden md:block absolute inset-y-0 right-0 z-10 w-1/2 max-w-[600px] pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        >
          <Image
            src="/images/senso-bg.jpg"
            alt="SENSO background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Градиент поверх */}
        <div className="absolute inset-0 z-15 bg-gradient-to-r from-gray-300 to-gray-100" />

        {/* Контент */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mr-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#242F35] mb-10 text-center md:text-left">
              Vantaggi del marchio <span className="text-red-600">SENSO</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-5 text-[#242F35]">Vantaggi:</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>Qualità e affidabilità italiane.</li>
                  <li>Gamma completa per tutte le esigenze e budget.</li>
                  <li>Resistenza a condizioni estreme.</li>
                  <li>Applicazione e rimozione facili, senza residui.</li>
                  <li>Ottimo rapporto qualità/prezzo.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-5 text-[#242F35]">
                  Caratteristiche uniche:
                </h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>
                    Qualità italiana: Produzione interamente in Italia con tecnologie
                    all’avanguardia.
                  </li>
                  <li>
                    Eco-compatibilità: Nastri sicuri per l’ambiente e privi di sostanze nocive.
                  </li>
                  <li>Versatilità: Adatti a superfici in plastica, metallo, vetro e carbonio.</li>
                  <li>Facilità d’uso: Si applicano e si rimuovono facilmente senza residui.</li>
                  <li>
                    Varietà di colori: Ogni nastro ha un colore distinto per un’identificazione
                    rapida.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
