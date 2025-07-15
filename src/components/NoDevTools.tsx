import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useDevtoolsBlocker = () => {
    const router = useRouter();

    useEffect(() => {
        const detectDevTools = () => {
            const threshold = 160; // tamaño mínimo para detectar DevTools

            const devtoolsOpen =
                window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold;

            if (devtoolsOpen) {
                router.push("/");
            }
        };

        const interval = setInterval(detectDevTools, 1000); // verifica cada segundo
        return () => clearInterval(interval);
    }, [router]);
};

export default useDevtoolsBlocker;
