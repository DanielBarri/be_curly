import Link from "next/link";

const SubMenu = () => {
    const tutotialesMenu = [
        {
            topic: "Introducción",
            url: "/guides/intro",
            subtopics: [
                {
                    titulo: "Historia Estefania",
                    url: "/guides/intro/history-estefania",
                },
                {
                    titulo: "Historia Be Curly",
                    url: "/guides/intro/history-be-curly",
                },
                {
                    titulo: "Historia Rizos",
                    url: "/guides/intro/history-rizos",
                },
            ],
        },
        {
            topic: "Primeros pasos",
            url: "/guides/first-steps",
            subtopics: [
                {
                    titulo: "Técnicas básicas",
                    url: "/guides/first-steps/initial-setup",
                },
                {
                    titulo: "Primeros estilos",
                    url: "/guides/first-steps/first-styles",
                },
            ],
        },
        {
            topic: "Consejos",
            url: "/guides/tips",
            subtopics: [
                {
                    titulo: "Mantenimiento de Rizos",
                    url: "/guides/tips/curly-hair-maintenance",
                },
                {
                    titulo: "Productos Recomendados",
                    url: "/guides/tips/recommended-products",
                },
            ],
        },
    ];

    return (
        <div className="w-[200px] h-full flex flex-col items-start p-4 mt-4 gap-4">
            <h1 className="text-lg font-semibold">Tutoriales</h1>
            <div className="w-fullh-px bg-gradient-to-r from-gray-300/30 via-gray-400/80 to-gray-300/30"></div>
            <ul className="flex flex-col space-y-4">
                {tutotialesMenu.map((item) => (
                    <li key={item.topic}>
                        <div className="text-gray-700 hover:text-pink-500 transition duration-150 ease-in-out ">
                            <h1 className="mb-1 text-gray-400">{item.topic}</h1>
                            {item.subtopics.map((subtopic) => (
                                <ul key={subtopic.titulo} className="ml-2">
                                    <li>
                                        <Link
                                            href={subtopic.url}
                                            className="text-gray-700 hover:text-pink-500 transition duration-150 ease-in-out">
                                            {subtopic.titulo}
                                        </Link>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-gray-300/30 via-gray-400/80 to-gray-300/30 mt-6"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubMenu;
