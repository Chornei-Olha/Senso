import React from 'react';

type ProductRow = {
  codice: string;
  nome: string;
  colore: string;
  dimensione: string;
};

type ProductTableProps = {
  rows: ProductRow[];
};

const ProductTable: React.FC<ProductTableProps> = ({ rows }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full table-auto border border-gray-300 text-xs md:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-white px-4 py-2 text-left">Codice</th>
            <th className="border border-white px-4 py-2 text-left">Nome prodotto</th>
            <th className="border border-white px-4 py-2 text-left">Colore</th>
            <th className="border border-white px-4 py-2 text-left">Dimensione</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="border border-white px-4 py-2">{row.codice}</td>
              <td className="border border-white px-4 py-2">{row.nome}</td>
              <td className="border border-white px-4 py-2">{row.colore}</td>
              <td className="border border-white px-4 py-2">{row.dimensione}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
