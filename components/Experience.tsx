"use client";

import { motion } from "framer-motion";

const experiences = [
    {
    role: "Freelance Full Stack Developer",
    company: "Outlier (Remote)",
    duration: "Sep 2024 – May 2025",
    desc: "Designed scalable backend systems, improved UI performance, and collaborated with cross-functional remote teams.",
    tech: ["REST APIs", "Frontend Optimization", "System Design", "Agile"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Appwars Technologies",
    duration: "Jan 2024 – Jun 2024",
    desc: "Worked on MERN-based web applications with authentication, REST APIs, and performance optimization.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Express"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 py-12">
      <h2 className="text-3xl font-bold text-center">Experience</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-2 sm:px-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="block rounded-2xl border border-gray-200 bg-gradient-to-br from-white/80 to-gray-50/80 p-6 shadow-md backdrop-blur-sm transition hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {exp.role}
            </h3>

            <p className="rounded-full bg-blue-100 text-blue-700 text-xs px-2 py-1 inline-block mt-2">
              {exp.company} • {exp.duration}
            </p>

            <hr className="my-3 border-gray-200" />

            <p className=" border-gray-200 border-l-4 pl-4 text-gray-700">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}