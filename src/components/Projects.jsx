import { motion } from "framer-motion";

const projectList = [
  {
    title: "🌐 Portfolio Website",
    desc: "Personal website with React + Tailwind + Framer Motion",
    link: "#",
  },
  {
    title: "🤖 AI Code Review Bot",
    desc: "AI tool that reviews and suggests code improvements",
    link: "#",
  },
  {
    title: "📊 Automation Dashboard",
    desc: "Data visualization & automation with Node.js",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.desc}</p>
            <a href={project.link} className="text-blue-600 hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
