

import { Pollame, Preparati_Pronti, Salumi, Carni_Rosse } from "../data/product";
import { JSX, Suspense } from 'react'
import Image from "next/image";
import './catalog.css';


// Il nome della rotta è chiuso all'interno delle parentesi quadre -> [catalog] <-
// questo fa si che next crei una rotta che cambia nome in base al parametro che passi nel path url (dynamic route)


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
              <Image width={500} height={500} src={product.image } alt={product.name} />
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
  
  /* all'iterno del componente si può avere accesso alla promise "params" che contiene tra le altre cose
   il nome del path specificato nella home page
            |
            v
  */      
 const { catalog } = await params;

  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        {/**passo come props "catalog" al componente che sviluppa la pagina, ho trovato questo metodo e credo sia
         * migliore rispetto al passare il parametro come query come facevo prima, ora in base alla categoria
         * che si sceglie l'url avrà quel nome, es: /Carni_rosse, /Pollame ecc
         */}
        <CatalogContent category={catalog} />
      </Suspense>
    </div>
  );
};



