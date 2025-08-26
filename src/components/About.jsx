import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="p-12 bg-white text-gray-800">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-4 text-purple-600"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg"
      >
        I love building scalable apps, experimenting with AI tools, and making
        websites come alive with **animations** ✨. Always curious and ready to
        learn something new every day.
      </motion.p>
    </section>
  );
}
