'use client';

import { NextPage } from "next";
import { products } from "../data/product";

interface Product {
  name: string;
  description: string;
  image: string;
}



const CatalogPage: NextPage = () => {
  return (
    <main className="container">
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
            <button
              onClick={() => {
                alert(`Dettagli per: ${product.name}`);
              }}
            >
              Scopri di più
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
        .category-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .product-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          padding: 1rem;
          background: #fff;
        }
        .product-card img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .product-card button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: #d90429;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .product-card button:hover {
          background: #b60322;
        }
      `}</style>
    </main>
  );
};

export default CatalogPage;
