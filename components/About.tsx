'use client'

export default function About() {
  return (
    <section
      id="about"
      className="rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 shadow-md backdrop-blur-sm transition hover:shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-white">About Me</h3>
      <p className="mt-3 text-gray-300">
     <span className="text-primary font-medium"> Full Stack Developer</span> with a passion for <span className="font-semibold text-white">scalable, performant web apps</span>.  
     Expertise in <span className="text-primary font-medium">MERN Stack</span> and modern web development.  
     Always learning new frameworks, tools, and libraries.  
     Open to freelance, collaborations, and job opportunities.
  </p><br></br>

 <section id="tech" className="space-y-6">
  <h3 className="text-xl font-semibold text-center">Tech Stack</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 justify-items-center">
    <span className="badge">JavaScript</span>
    <span className="badge">TypeScript</span>
    <span className="badge">React.js</span>
    <span className="badge">Next.js</span>
    <span className="badge">Node.js</span>
    <span className="badge">Express.js</span>
    <span className="badge">MongoDB</span>
    <span className="badge">PostgreSQL</span>
    <span className="badge">Tailwind CSS</span>
    <span className="badge">Material UI</span>
    <span className="badge">OpenAI API</span>
  </div>
</section>

</section>
  )
}
