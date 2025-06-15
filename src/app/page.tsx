'use client';

import Image from 'next/image';
import Header from '../components/common/Header';

export default function AboutSensoPage() {
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

        {/* Градиент поверх изображения */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-gray-200/70 to-white/90" />

        {/* Контент */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            TM <span className="text-red-500">SENSO</span>
          </h1>

          <p className="text-lg text-gray-700 mb-6 max-w-4xl">
            TM SENSO – un marchio di nastri da mascheratura di alta qualità, prodotto in Italia da
            <strong> PPM INDUSTRIES SpA</strong>, progettato per le applicazioni più esigenti nel
            settore della carrozzeria e della verniciatura, noto per le sue eccellenti
            caratteristiche tecniche e risultati impeccabili.
          </p>

          <p className="text-lg text-gray-700 mb-6 max-w-4xl">
            La produzione avviene in Italia secondo standard internazionali di qualità (
            <strong>ISO 9001</strong>, <strong>IATF 16949</strong>), garantendo alte prestazioni,
            resistenza termica e rimozione pulita. I prodotti sono certificati{' '}
            <strong>FSC®</strong> e <strong>PEFC™</strong>, a conferma dell’uso di materie prime
            provenienti da fonti controllate e sostenibili.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            I nastri SENSO superano i concorrenti grazie a:
          </h2>
          <ul className="list-none list-inside space-y-2 text-gray-700">
            <li>
              <span className="text-green-600 font-semibold">✔</span> Maggiore resistenza al calore
              – fino a <strong>130°C</strong> (modello ORO)
            </li>
            <li>
              <span className="text-green-600 font-semibold">✔</span> Adesione forte senza residui
              – anche dopo un uso prolungato
            </li>
            <li>
              <span className="text-green-600 font-semibold">✔</span> Supporto ottimizzato – per
              linee di verniciatura perfette
            </li>
            <li>
              <span className="text-green-600 font-semibold">✔</span> Ecocompatibilità – privi di
              sostanze nocive
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
