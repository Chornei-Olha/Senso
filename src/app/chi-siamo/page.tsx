'use client';

import Image from 'next/image';
import Header from '@/components/common/Header';

export default function ChiSiamo() {
  return (
    <div>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        {/* Картинка — НА ФОНЕ */}
        <div className="absolute inset-y-0 right-0 z-0 w-1/2 max-w-[600px] pointer-events-none">
          <Image
            src="/images/senso-bg.jpg"
            alt="SENSO background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Градиент поверх картинки */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-gray-400/70 to-white/90" />

        {/* Контент выше всех */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Vantaggi del marchio <span className="text-red-500">SENSO</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Vantaggi:</h2>
              <ul className="space-y-2 list-disc list-inside text-gray-600">
                <li>Qualità e affidabilità italiane.</li>
                <li>Gamma completa per tutte le esigenze e budget.</li>
                <li>Resistenza a condizioni estreme.</li>
                <li>Applicazione e rimozione facili, senza residui.</li>
                <li>Ottimo rapporto qualità/prezzo.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Caratteristiche uniche:</h2>
              <ul className="space-y-2 list-disc list-inside text-gray-600">
                <li>
                  Qualità italiana: Produzione interamente in Italia con tecnologie all’avanguardia.
                </li>
                <li>Eco-compatibilità: Nastri sicuri per l’ambiente e privi di sostanze nocive.</li>
                <li>Versatilità: Adatti a superfici in plastica, metallo, vetro e carbonio.</li>
                <li>Facilità d’uso: Si applicano e si rimuovono facilmente senza residui.</li>
                <li>
                  Varietà di colori: Ogni nastro ha un colore distinto per un’identificazione
                  rapida.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
