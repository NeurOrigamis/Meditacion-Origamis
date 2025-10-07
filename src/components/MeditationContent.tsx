import React from 'react';
import { Heart, Brain, Sparkles, Wind, Leaf, Sun } from 'lucide-react';

const MeditationContent = () => {
  const techniques = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Respiración Consciente",
      description: "Aprende técnicas de respiración que te ayudarán a encontrar la calma interior y reducir el estrés en momentos de tensión.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Mindfulness",
      description: "Desarrolla la atención plena para vivir el presente con mayor consciencia y reducir la ansiedad.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Meditación Guiada",
      description: "Sesiones diseñadas para conectar con tu interior, cultivar la compasión y fortalecer tu bienestar emocional.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Relajación Progresiva",
      description: "Técnicas corporales para liberar tensiones acumuladas y alcanzar un estado profundo de relajación.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Visualización Creativa",
      description: "Utiliza el poder de tu imaginación para crear estados de bienestar y alcanzar tus objetivos personales.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Meditación en Movimiento",
      description: "Combina movimientos suaves con consciencia corporal para integrar cuerpo y mente en armonía.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const benefits = [
    "Reduce el estrés y la ansiedad",
    "Mejora la concentración y claridad mental",
    "Fortalece el sistema inmunológico",
    "Aumenta la autocompasión y bienestar emocional",
    "Mejora la calidad del sueño",
    "Desarrolla resiliencia ante desafíos"
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Prácticas de Meditación y Mindfulness
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Encuentra tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">paz interior</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              En Origamis te acompañamos en el camino hacia una vida más consciente y equilibrada.
              Descubre técnicas de meditación respaldadas por la neurociencia que transformarán tu bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meditación Guiada
              </h2>
              <p className="text-lg text-gray-600">
                Comienza tu práctica con esta sesión de meditación guiada
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-2">
              <div className="relative rounded-xl overflow-hidden">
                <video
                  className="w-full h-auto rounded-xl"
                  controls
                  preload="metadata"
                >
                  <source src="https://www.origamis.cl/wp-content/uploads/2025/10/Meditacion.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Técnicas de Meditación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora diferentes prácticas diseñadas para cultivar tu bienestar integral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${technique.color} text-white mb-6`}>
                  {technique.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{technique.title}</h3>
                <p className="text-gray-600 leading-relaxed">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Beneficios de la Meditación
              </h2>
              <p className="text-lg text-gray-600">
                Respaldados por investigaciones en neurociencia y psicología
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>

              <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Evalúa tu bienestar emocional
              </h2>
              <p className="text-lg mb-8 text-emerald-50">
                Completa nuestro cuestionario de bienestar gratuito y recibe una evaluación personalizada de tu estado emocional. El primer paso hacia tu transformación.
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.origamis.cl/tamizaje/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Completar Cuestionario
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeditationContent;
