"use client";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
import ContactButtons from "@/app/components/ContactButtons";
import TypeIt from "typeit-react";
import { Canvas } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";
import { useEffect, useRef, Suspense } from "react";

export default function Hero() {
  const DodecahedronColor = "#6ee7b7";

  const DodecahedronRef = useRef(null) as any;
  useEffect(() => {
    const interval = setInterval(() => {
      if (DodecahedronRef.current === null) return;
      DodecahedronRef.current.rotation.x += 0.007;
      DodecahedronRef.current.rotation.y += 0.007
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={
        roboto.className + " hero flex flex-col justify-center gap-10 pb-20"
      }
    >
      <div className="absolute -z-10 w-full h-full blur-lg">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <Dodecahedron ref={DodecahedronRef}
              args={[1, 0]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[1.5, 1.5, 1.5]}
            >
              <meshStandardMaterial color={DodecahedronColor} />
            </Dodecahedron> 
          </Suspense>
        </Canvas>
      </div>
      <TypeIt options={{ speed: 10 }} className="sm:text-left text-center">
        <h1 className=" text-emerald-400 text-xl">
          Hey There! I&apos;m -<br />{" "}
          <span className="text-8xl">Thomas Stephan</span>
        </h1>
        <p className="text-3xl">I&apos;m a Fullstack Web Developer</p>
      </TypeIt>
      <ContactButtons />
    </section>
  );
}
