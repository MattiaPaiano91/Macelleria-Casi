
import { NextPage } from "next";
import { Pollame, Preparati_Pronti, Salumi, Carni_Rosse } from "../data/product";

import { JSX, Suspense } from 'react'
import './catalog.css';

interface Product {
  name: string;
  description: string;
  image: string;
}

// Componente separato per il contenuto che usa useSearchParams
  const catalogMapping: Record<string, Product[]> = {
    Carni_Rosse: Carni_Rosse,
    Pollame: Pollame,
    Preparati_Pronti: Preparati_Pronti,
    Salumi: Salumi,
  };

  interface CatalogContentProps {
    category: string | null;
  }

  const CatalogContent: React.FC<CatalogContentProps> = (props) => {
    
    const category = props.category;
    const products: Product[] = category ? catalogMapping[category] ?? [] : [];
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


interface CatalogPage {
  params: {
    catalog: string;
  };
}

export default async function CatalogPage({ params }: { params: Promise<{ catalog: string }> }): Promise<JSX.Element> {
 
 const { catalog } = await params;

  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogContent category={catalog} />
      </Suspense>
    </div>
  );
};



