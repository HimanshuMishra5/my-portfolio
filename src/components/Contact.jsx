import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="p-12 bg-gray-900 text-white text-center">
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4 text-yellow-400"
      >
        Let’s Connect ✉️
      </motion.h2>
      <p>Email: <a href="mailto:golu@example.com" className="text-blue-400">golu@example.com</a></p>
      <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-400">github.com/yourusername</a></p>
    </section>
  );
}
