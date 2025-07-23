import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform float uSpeed;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec3 wave = 0.3 + 0.1 * cos(vUv.xyx + uTime * uSpeed);
  vec3 color = wave + uColor * 0.9;
  gl_FragColor = vec4(color, 1.0);
}
`;

interface CosineShaderProps {
    color?: [number, number, number];
    speed?: number; // <- nuevo
    className?: string;
}

export default function CosineShader({
    color = [0.95, 0.75, 0.95],
    speed = 1.0,
    className = "",
    ...rest
}: CosineShaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const renderer = new Renderer();
        const gl = renderer.gl;
        gl.clearColor(1, 1, 1, 1);

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uSpeed: { value: speed },
                uColor: { value: new Color(...color) },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });

        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }

        window.addEventListener("resize", resize);
        resize();
        container.appendChild(gl.canvas);

        let animationId: number;
        const update = (t: number) => {
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene: mesh });
            animationId = requestAnimationFrame(update);
        };
        animationId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
            gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
    }, [color, speed]);

    return (
        <div
            ref={containerRef}
            className={`absolute top-0 left-0 w-full h-full -z-10 ${className}`}
            {...rest}
        />
    );
}
