import Image from "next/image";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Marco Paiano",
            role: "Maestro Macellaio",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/placeholder.svg",
        },
        {
            name: "Giuseppe Paiano",
            role: "Specialista Carni",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/placeholder.svg",
        },
        {
            name: "Anna Paiano",
            role: "Responsabile Qualità",
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            image: "/placeholder.svg",
        },
        {
            name: "Luigi Paiano",
            role: "Esperto Salumi",
            description:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            image: "/placeholder.svg",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-36">
            {/* Metadata */}
            <title>Chi Siamo | Macelleria Paiano</title>
            <meta
                name="description"
                content="Scopri la storia e la tradizione della Macelleria Paiano."
            />

            {/* Sezione Introduttiva */}
            <section className="max-w-4xl mx-auto mb-28">
                <h1 className="text-4xl font-bold mb-8 text-center heroFont">
                    Chi Siamo
                </h1>
                <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                    Da oltre 50 anni, la Macelleria Casi rappresenta
                    l&apos;eccellenza nella tradizione della macelleria
                    artigianale. La nostra famiglia si dedica con passione alla
                    selezione delle migliori carni, garantendo qualità e
                    autenticità in ogni taglio.
                </p>
            </section>

            {/* Team Members */}
            <section className="max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={member.name}
                        className={`flex flex-col ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        } 
            items-center gap-8 mb-16 last:mb-0`}
                    >
                        {/* Immagine */}
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[3/4] w-full border">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Descrizione */}
                        <div className="w-full md:w-1/2 p-6">
                            <h2 className="text-3xl font-bold mb-2 heroFont">
                                {member.name}
                            </h2>
                            <h3 className="text-xl text-red-600 mb-4">
                                {member.role}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
