import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-yellow-300">Himanshu Mishra</span> 👋
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-xl"
      >
        A passionate <span className="font-bold">Full Stack Developer</span> &
        <span className="font-bold"> AI Enthusiast</span> who loves creating
        eye-catchy, modern, and animated web apps.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
