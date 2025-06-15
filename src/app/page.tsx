'use client';

import Image from 'next/image';
import Header from '../components/common/Header';
import BoardSlider from '../components/common/BoardSlider';

export default function AboutSensoPage() {
  return (
    <div>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        {/* Фоновое изображение */}
        <div className="hidden md:block absolute inset-y-0 right-0 z-0 w-1/2 max-w-[600px] pointer-events-none">
          <Image
            src="/images/senso-bg.jpg"
            alt="SENSO background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Градиент поверх */}
        <div className="absolute inset-0 z-10 bg-[#E3D7D7] lg:bg-gradient-to-tr from-[#242F35]/80 to-[#EAEFF3]/90" />

        {/* Контентная карточка */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 md:p-12 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#242F35] mb-6">
              TM <span className="text-red-600">SENSO</span>
            </h1>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              TM SENSO – un marchio di nastri da mascheratura di alta qualità, prodotto in Italia da{' '}
              <strong>PPM INDUSTRIES SpA</strong>, progettato per le applicazioni più esigenti nel
              settore della carrozzeria e della verniciatura, noto per le sue eccellenti
              caratteristiche tecniche e risultati impeccabili.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              La produzione avviene in Italia secondo standard internazionali di qualità (
              <strong>ISO 9001</strong>, <strong>IATF 16949</strong>), garantendo alte prestazioni,
              resistenza termica e rimozione pulita. I prodotti sono certificati{' '}
              <strong>FSC®</strong> e <strong>PEFC™</strong>, a conferma dell’uso di materie prime
              provenienti da fonti controllate e sostenibili.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Perché scegliere <span className="text-red-600">SENSO</span>:
            </h2>

            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✔</span>
                <span>
                  Maggiore resistenza al calore – fino a <strong>130°C</strong> (modello ORO)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✔</span>
                <span>Adesione forte senza residui – anche dopo un uso prolungato</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✔</span>
                <span>Supporto ottimizzato – per linee di verniciatura perfette</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✔</span>
                <span>Ecocompatibilità – privi di sostanze nocive</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative z-20 container mx-auto px-4 py-16">
          <BoardSlider />
        </div>
      </div>
    </div>
  );
}
