"use client";
import RotatingText from "@/components/RotatingText";
import {
    FilmIcon,
    BookOpenIcon,
    MoonIcon,
    SparklesIcon,
    ShoppingBagIcon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";
import BgShader from "@/components/BgShader";
import Iridescence from "@/components/Iridescence";

const HomePage = () => {
    const tutorialCategories = [
        {
            title: "Wash Day Routine",
            description: "Step-by-step guide for your perfect wash day",
            icon: <BookOpenIcon className="w-10 h-10 text-pink-500" />,
        },
        {
            title: "Styling Techniques",
            description: "Learn various methods to style your curls",
            icon: <SparklesIcon className="w-10 h-10 text-pink-500" />,
        },
        {
            title: "Nighttime Care",
            description: "Protect your curls while you sleep",
            icon: <MoonIcon className="w-10 h-10 text-pink-500" />,
        },
        {
            title: "Refresh Methods",
            description: "Revive your curls between wash days",
            icon: <FilmIcon className="w-10 h-10 text-pink-500" />,
        },
    ];

    const bg_animation_option: number = 1; // 1 for Iridescence, 2 for BgShader:
    const curlTips = [
        "Use a wide-tooth comb on wet hair with conditioner",
        "Apply products in sections for even distribution",
        "Diffuse on low heat to prevent frizz",
        "Sleep on a satin pillowcase to reduce breakage",
        "Clarify your hair monthly to remove buildup",
    ];

    return (
        <>
            {bg_animation_option === 1 ? (
                <Iridescence
                    color={[1, 1, 1]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={1.0}
                />
            ) : (
                <BgShader color={[0.7, 0.6, 0.8]} speed={1.2} />
            )}
            <div className="font-dm-serif w-full h-full p-2 ml-2 overflow-y-auto rounded-xl drop-shadow-lg ">
                {/* Welcome Message */}
                <div
                    className="mb-4 p-6 bg-gray-400/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl  border border-gray-100
">
                    <div className="w-full flex flex-row mb-8 overflow-hidden items-center justify-center">
                        <h1 className="w-[45%] text-white text-5xl md:text-7xl font-bold items-center text-right m-2">
                            Be
                        </h1>
                        <div className="w-[55%] flex items-center justify-left">
                            <RotatingText
                                texts={[
                                    "Curly",
                                    "Beautiful",
                                    "Confident",
                                    "Unique",
                                    "Empowered",
                                    "Radiant",
                                ]}
                                mainClassName="px-2 sm:px-2 md:px-3 bg-pink-300 text-black text-5xl md:text-7xl overflow-hidden py-1 md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1 md:pb-1"
                                transition={{
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 400,
                                }}
                                rotationInterval={3000}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-2 text-center">
                        Bienvenida a tu exclusiva travesía hacia el mundo de los
                        rizos!
                    </h2>
                    <p className="text-base md:text-xl text-center lg:px-80">
                        Descubre las mejores técnicas para cuidar de tu hermosos
                        rizos desde casa. Navega por nuestros tutoriales,
                        aprende tips profesionales, y acepta la textura natural
                        de tu cabello.
                    </p>
                </div>

                {/* Tutorial Categories */}
                <section className="mb-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                        Learn the Basics
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tutorialCategories.map((category, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-500/50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-400 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-center mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 text-center text-sm mb-4">
                                    {category.description}
                                </p>
                                <button className="w-full bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium py-2 px-4 rounded-lg transition-colors">
                                    View Tutorials
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Video */}
                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                        Featured Tutorial
                    </h2>
                    <div className="relative w-full h-0 pb-[56.25%]  bg-gray-500/50 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-400 overflow-hidden shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                            <div className="text-center p-4">
                                <FilmIcon className="w-12 h-12 mx-auto text-pink-500 mb-2" />
                                <p className="text-lg font-medium">
                                    The Perfect Wash Day Routine
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Tips */}
                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                        <LightBulbIcon className="w-6 h-6 mr-2 text-pink-500" />
                        Quick Curl Tips
                    </h2>
                    <div className="bg-gray-500/50 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-400 p-6  shadow-sm text-lg">
                        <ul className="space-y-3">
                            {curlTips.map((tip, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-pink-500 mr-2">
                                        •
                                    </span>
                                    <span className="">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Products Recommendation */}
                <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                        <ShoppingBagIcon className="w-6 h-6 mr-2 text-pink-500" />
                        Recommended Products
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 cursor-pointer">
                                <div className="h-40 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                                    <ShoppingBagIcon className="w-12 h-12 text-pink-400" />
                                </div>
                                <div className="p-3">
                                    <p className="font-bold text-sm">
                                        Product {item}
                                    </p>
                                    <p className="text-gray-500 text-xs">
                                        For curly hair
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
