'use client';

import { NextPage } from "next";
import { Pollame, Preparati_Pronti, Salumi, Carni_Rosse } from "../data/product";
import { useSearchParams } from 'next/navigation'

import './catalog.css';

interface Product {
  name: string;
  description: string;
  image: string;
}

const CatalogPage: NextPage = () => {

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  let products: Product[] = category === 'Carni_Rosse' ? Carni_Rosse : category === 'Pollame' ? Pollame : category === 'Preparati_Pronti' ? Preparati_Pronti : category === 'Salumi' ? Salumi : [];
  
  return (
    <div className="container mx-auto">
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
            {/* <button
              onClick={() => {
                alert(`Dettagli per: ${product.name}`);
              }}
            >
              Scopri di più
            </button> */}
          </div>
        ))}
      </div>

    </div>
  );
};

export default CatalogPage;
