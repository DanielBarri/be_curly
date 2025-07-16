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

    const curlTips = [
        "Use a wide-tooth comb on wet hair with conditioner",
        "Apply products in sections for even distribution",
        "Diffuse on low heat to prevent frizz",
        "Sleep on a satin pillowcase to reduce breakage",
        "Clarify your hair monthly to remove buildup",
    ];

    return (
        <div className="font-dm-serif w-full h-full p-4 overflow-y-auto bg-gray-50 rounded-xl drop-shadow-lg">
            {/* Hero Section */}
            <div className="w-full flex flex-row mb-8 overflow-hidden bg-white  items-center justify-center">
                <h1 className="w-[45%] text-5xl md:text-7xl font-bold items-center text-right m-2">
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
                        mainClassName="px-2 sm:px-2 md:px-3 bg-pink-300 text-white text-5xl md:text-7xl overflow-hidden py-1 md:py-2 justify-center rounded-lg"
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

            {/* Welcome Message */}
            <div className="mb-8 p-6 bg-pink-50 rounded-xl shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-becurlyBlack">
                    Welcome to Your Curl Journey!
                </h2>
                <p className="text-base md:text-lg text-becurlyBlack">
                    Discover the best techniques to care for your beautiful
                    curls at home. Browse our tutorials, learn professional
                    tips, and embrace your natural texture.
                </p>
            </div>

            {/* Tutorial Categories */}
            <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Learn the Basics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tutorialCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
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
                <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
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
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <ul className="space-y-3">
                        {curlTips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">•</span>
                                <span className="text-gray-700">{tip}</span>
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
    );
};

export default HomePage;
