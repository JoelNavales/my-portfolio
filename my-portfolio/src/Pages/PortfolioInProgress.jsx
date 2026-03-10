import { TypeAnimation } from "react-type-animation"

export default function PortfolioInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-5xl font-bold mb-6">
          Joel Navales
        </h1>

        <div className="text-xl text-gray-300 mb-8">
          <TypeAnimation
            sequence={[
              "Building something awesome...",
              2000,
              "Crafting my developer portfolio...",
              2000,
              "Launching soon 🚀",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-gray-400 mb-10">
          My portfolio is currently under construction.
          I'm working on projects, refining designs, and preparing something great.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/JoelNavales"
            target="_blank"
            className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/joel-franco-v-navales-5bba6831a/"
            target="_blank"
            className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:navales546@gmail.com"
            className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact
          </a>

        </div>

        <div className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Joel Navales
        </div>

      </div>

    </div>
  )
}