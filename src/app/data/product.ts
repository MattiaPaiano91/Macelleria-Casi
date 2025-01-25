
interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}



export const products: Product[] = [
   {
     id: 1,
     name: "Bistecca di Manzo",
     description: "Taglio di carne di prima qualità, perfetto per grigliate.",
     image: "https://source.unsplash.com/300x200/?steak",

   },
   {
    id: 2,
     name: "Arrosto di Maiale",
     description: "Preparato con spezie fresche e aromi naturali.",
     image: "https://source.unsplash.com/300x200/?pork",
   },
   {
    id: 3,
     name: "Salsicce Artigianali",
     description: "Prodotto fresco ogni giorno con carni selezionate.",
     image: "https://source.unsplash.com/300x200/?sausage",
   },
]