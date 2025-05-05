import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  useEffect(() => {
    document.title = "PROSPERA | Personalised Wellness & Rehab AI Platform";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#f6f9fc] py-6 px-8 shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold">PROSPERA</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-base hover:underline">Features</a>
          <a href="#ai-tech" className="text-base hover:underline">AI Technology</a>
          <a href="#contact" className="text-base hover:underline">Contact</a>
        </nav>
      </header>

      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#e8f0fe] to-white">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Personalised Wellness & Rehabilitation
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          Powered by AI, PROSPERA offers tailored physical and mental health support post-diagnosis, accessible via a unified multi-device platform.
        </p>
        <Button className="px-6 py-3 text-lg">Explore the Platform</Button>
      </section>

      <section id="features" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-xl mb-2">Tailored Exercise Plans</h4>
              <p className="text-gray-600">
                Adaptive workouts with form correction via wearable and phone sensors, plus access to expert-guided exercise videos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-xl mb-2">AI-Powered Nutrition Guidance</h4>
              <p className="text-gray-600">
                AI photo meal tracking and real-time dietary coaching for optimal recovery and ongoing wellness.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-xl mb-2">Mental Health & Motivation</h4>
              <p className="text-gray-600">
                Mindfulness tools, motivational prompts and chat-based AI emotional support for daily wellbeing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ai-tech" className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">AI That Understands You</h3>
          <p className="text-gray-700 text-lg text-center">
            PROSPERA's AI uses natural language processing, time series analysis and deep learning to understand user goals, monitor physical activity, and provide accurate, evolving recommendations.
          </p>
          <p className="text-gray-600 mt-4 text-center">
            Real-time form feedback, dietary advice, personalised reports, and adaptive plans all run on a secure, scalable AI infrastructure.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-sm">&copy; 2025 PROSPERA. All rights reserved.</p>
        <p className="text-xs mt-2">This is a mock site for educational purposes.</p>
      </footer>
    </div>
  );
}
