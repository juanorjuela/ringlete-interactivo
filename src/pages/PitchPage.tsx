import { useEffect } from "react";
import "./PitchPage.css";
import Hero from "@/components/Pitch/Hero";
import Problem from "@/components/Pitch/Problem";
import Solution from "@/components/Pitch/Solution";
import Value from "@/components/Pitch/Value";
import Model from "@/components/Pitch/Model";
import Market from "@/components/Pitch/Market";
import Clients from "@/components/Pitch/Clients";
import Team from "@/components/Pitch/Team";
import Roadmap from "@/components/Pitch/Roadmap";
import Investment from "@/components/Pitch/Investment";

const PitchPage = () => {
  useEffect(() => {
    // Agregar clase CSS para activar estilos del pitch
    document.documentElement.classList.add('pitch-page-active');
    
    // Remover clase al desmontar
    return () => {
      document.documentElement.classList.remove('pitch-page-active');
    };
  }, []);

  return (
    <main className="bg-white text-gray-900 font-outfit min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Value />
      <Model />
      <Market />
      <Clients />
      <Team />
      <Roadmap />
      <Investment />
    </main>
  );
};

export default PitchPage; 