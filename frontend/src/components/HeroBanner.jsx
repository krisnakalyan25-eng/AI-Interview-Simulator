import { ArrowRight } from "lucide-react"

function HeroBanner({ user }) {

  return (

    <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl text-white p-10 mb-8">

      <h1 className="text-4xl font-bold">
        Welcome back,
        <br />
        {user?.name}
      </h1>

      <p className="mt-4 text-blue-100 text-lg">
        Practice interviews and improve your confidence.
      </p>

      <button
        className="
        mt-8
        bg-white
        text-blue-600
        px-6
        py-3
        rounded-xl
        flex
        items-center
        gap-2
        font-semibold
        hover:scale-105
        transition
        "
      >
        Start Interview

        <ArrowRight size={18} />
      </button>

    </div>

  )

}

export default HeroBanner