"use client";
import useDevtoolsBlocker from "@/components/NoDevTools";

const GuidesPage = () => {
    useDevtoolsBlocker();
    return (
        <div className="w-full h-full p-4 flex flex-col items-center justify-top gap-2 mt-10">
            <h1 className="text-5xl font-dm-serif font-light mb-6 tracking-wide">
                Be Curly Academy
            </h1>
            <h2 className="text-3xl font-playfair font-light">Bienvenida</h2>
            <p className="text-lg">
                Esta es la sección de tutoriales y guías de Be Curly. Aquí
                encontrarás recursos para aprender a cuidar tu cabello rizado.
            </p>

            {/* Reproductor de video */}
            <div className="mt-6 w-full max-w-5xl aspect-video">
                <video
                    className="w-full h-full rounded-xl shadow-lg object-cover"
                    controls
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}>
                    <source src="/videos/bienvenida.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </div>
    );
};

export default GuidesPage;
