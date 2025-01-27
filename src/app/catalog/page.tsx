'use client';

import { NextPage } from "next";
import { Pollame, Preparati_Pronti, Salumi, Carni_Rosse } from "../data/product";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import './catalog.css';

interface Product {
  name: string;
  description: string;
  image: string;
}

// Componente separato per il contenuto che usa useSearchParams
const CatalogContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  let products: Product[] = category === 'Carni_Rosse' ? Carni_Rosse : 
                           category === 'Pollame' ? Pollame : 
                           category === 'Preparati_Pronti' ? Preparati_Pronti : 
                           category === 'Salumi' ? Salumi : [];
  
  return (
    <>
      {/* Intestazione Categoria */}
      <section className="category-header">
        <h2>Catalogo Prodotti</h2>
        <p>Esplora i nostri prodotti freschi e di qualità!</p>
      </section>

      {/* Griglia Prodotti */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <figure>
              <img src={product.image} alt={product.name} />
              <figcaption>{product.name}</figcaption>
            </figure>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// Componente principale della pagina
const CatalogPage: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogContent />
      </Suspense>
    </div>
  );
};

export default CatalogPage;