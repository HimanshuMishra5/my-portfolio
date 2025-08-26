import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 shadow-lg"
    >
      <h1 className="text-2xl font-bold tracking-wide">🚀 Golu's Portfolio</h1>
    </motion.nav>
  );
}
