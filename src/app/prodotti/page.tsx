'use client';

import Image from 'next/image';
import Header from '@/components/common/Header';
import ProductTable from '@/components/common/ProductTable';

const products = [
  {
    id: 'bianco',
    name: 'SENSO BIANCO - AUTO +80°C',
    photo: '/images/prodotti_bianco.webp',
    usage: 'Protezione, fissaggio, mascheratura',
    description: [
      'Nastro leggero e maneggevole per lavori di base in officina.',
      'Adesione moderata – non lascia residui dopo la rimozione.',
      'Ideale per la protezione delle superfici nella verniciatura di piccole aree.',
      'Adatto anche all’uso domestico e per semplici applicazioni.',
    ],
    features: [
      'Larghezza: 18 mm, 24 mm, 36 mm, 48 mm',
      'Lunghezza: 40 yd',
      'Colore: bianco',
      'Resistenza termica: fino a +80°C',
    ],
    table: [
      {
        codice: 'SB18',
        nome: 'Nastro di mascheratura SENSO BIANCO + 80°C',
        colore: 'bianco',
        dimensione: '18mm x 40yd',
      },
      {
        codice: 'SB24',
        nome: 'Nastro di mascheratura SENSO BIANCO + 80°C',
        colore: 'bianco',
        dimensione: '24mm x 40yd',
      },
      {
        codice: 'SB36',
        nome: 'Nastro di mascheratura SENSO BIANCO + 80°C',
        colore: 'bianco',
        dimensione: '36mm х 40yd',
      },
      {
        codice: 'SB48',
        nome: 'Nastro di mascheratura SENSO BIANCO + 80°C',
        colore: 'bianco',
        dimensione: '48mm х 40yd',
      },
    ],
    footer: 'SENSO BIANCO – una scelta affidabile per lavori semplici!',
  },
  {
    id: 'marrone',
    name: 'SENSO MARRONE - AUTO +110°C',
    photo: '/images/prodotti_marrone.webp',
    priceTier: 'Fascia di prezzo: Media',
    usage: 'Uso professionale in officine',
    description: [
      'Alta adesione e resistenza agli sbalzi di temperatura.',
      'Ideale per la protezione di vetri, fari, parti cromate e carrozzeria durante la verniciatura.',
      'Flessibile, si strappa facilmente senza lasciare residui.',
      'Resistente a UV, umidità e sollecitazioni moderate.',
    ],
    features: [
      'Larghezza: 18 mm, 24 mm, 36 mm, 48 mm',
      'Lunghezza: 40 yd',
      'Colore: Marrone',
      'Resistenza termica: 1 ora fino a +90°C / 30 min fino a +110°C',
    ],
    table: [
      {
        codice: 'SM18',
        nome: 'Nastro di mascheratura SENSO MARRONE + 110°C',
        colore: 'marrone',
        dimensione: '18mm x 40yd',
      },
      {
        codice: 'SM24',
        nome: 'Nastro di mascheratura SENSO MARRONE + 110°C',
        colore: 'marrone',
        dimensione: '24mm x 40yd',
      },
      {
        codice: 'SM36',
        nome: 'Nastro di mascheratura SENSO MARRONE + 110°C',
        colore: 'marrone',
        dimensione: '36mm х 40yd',
      },
      {
        codice: 'SM48',
        nome: 'Nastro di mascheratura SENSO MARRONE + 110°C',
        colore: 'marrone',
        dimensione: '48mm х 40yd',
      },
    ],
    footer: 'Raggiungi risultati perfetti con SENSO MARRONE!',
  },
  {
    id: 'rossa',
    name: 'SENSO ROSSA - AUTO +120°C',
    photo: '/images/prodotti_rossa.webp',
    priceTier: 'Fascia di prezzo: Premium',
    usage: 'Cabine di verniciatura, levigatura e lucidatura',
    description: [
      'Adesione potenziata e resistenza a condizioni estreme (alte temperature, umidità, agenti chimici).',
      'Ideale per superfici sensibili, vernice fresca, lucidatura.',
      'Offre linee di verniciatura nitide, senza sbavature.',
      'Utilizzato nei centri di restauro auto e nelle carrozzerie professionali.',
    ],
    features: [
      'Larghezza: 24 mm, 36 mm, 48 mm',
      'Lunghezza: 40 yd',
      'Colore: Rosso',
      'Resistenza termica: 1 ora fino a +90°C / 30 min fino a +120°C',
    ],
    table: [
      {
        codice: 'SR24',
        nome: 'Nastro di mascheratura SENSO ROSSA + 120°C',
        colore: 'rosso',
        dimensione: '24mm x 40yd',
      },
      {
        codice: 'SR36',
        nome: 'Nastro di mascheratura SENSO ROSSA + 120°C',
        colore: 'rosso',
        dimensione: '36mm х 40yd',
      },
      {
        codice: 'SR48',
        nome: 'Nastro di mascheratura SENSO ROSSA + 120°C',
        colore: 'rosso',
        dimensione: '48mm х 40yd',
      },
    ],
    footer:
      'SENSO ROSSA – innovazione italiana: adesivo che polimerizza a contatto con la vernice e supporto trattato per una maggiore resistenza.',
  },
  {
    id: 'oro',
    name: 'SENSO ORO - AUTO +130°C',
    photo: '/images/prodotti_oro.webp',
    priceTier: 'Fascia di prezzo: Lusso',
    usage: 'Per le applicazioni più impegnative',
    description: [
      'Resistente all’umidità e ai raggi UV.',
      'Perfetto per verniciature multicolore e processi complessi.',
      'Elastico e flessibile – adatto a superfici curve.',
      'Adesione controllata e fissaggio ottimale.',
      'Rimozione pulita dopo cicli di cottura fino a +130°C.',
    ],
    features: [
      'Larghezza: 24 mm, 36 mm, 48 mm',
      'Lunghezza: 40 yd',
      'Colore: Giallo',
      'Resistenza termica: 1 ora fino a +130°C',
    ],
    table: [
      {
        codice: 'SO24',
        nome: 'Nastro di mascheratura SENSO ORO + 130°C',
        colore: 'giallo',
        dimensione: '24mm x 40yd',
      },
      {
        codice: 'SO36',
        nome: 'Nastro di mascheratura SENSO ORO + 130°C',
        colore: 'giallo',
        dimensione: '36mm х 40yd',
      },
      {
        codice: 'SO48',
        nome: 'Nastro di mascheratura SENSO ORO + 130°C',
        colore: 'giallo',
        dimensione: '48mm х 40yd',
      },
    ],
    footer: 'SENSO ORO – funziona dove gli altri falliscono!',
  },
];

export default function Prodotti() {
  return (
    <div>
      <Header />
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container px-5 lg:px-10 mx-auto py-3 flex flex-wrap gap-4 justify-center md:justify-end">
          {products.map((product) => (
            <a
              key={product.id}
              href={`#${product.id}`}
              className="text-red-600 hover:text-red-800 font-semibold transition-colors"
            >
              {product.name.split(' ')[1]}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-gray-300 to-gray-100">
        <div className="container mx-auto px-4 py-16 space-y-24">
          {products.map((product) => (
            <section id={product.id} key={product.id} className="scroll-mt-24">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Заглушка под изображение */}
                <div className="w-full md:w-1/3 h-64 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-600 text-xl font-medium">
                  <Image
                    src={product.photo}
                    alt={product.name.split(' ')[1]}
                    width={700}
                    height={300}
                    className="w-full object-contain rounded-lg"
                    priority
                  />{' '}
                  {/* Immagine {product.name.split(' ')[1]} */}
                </div>

                {/* Контент */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
                    {product.name}
                  </h2>
                  {product.priceTier && (
                    <p className="text-sm text-gray-600 italic mb-1">{product.priceTier}</p>
                  )}
                  <p className="text-gray-700 mb-4 font-semibold">
                    Destinazione d’uso: {product.usage}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Descrizione:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                    {product.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Caratteristiche tecniche:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                    {product.features.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  {product.table && <ProductTable rows={product.table} />}

                  <p className="text-md font-medium text-gray-800 mt-2">{product.footer}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
