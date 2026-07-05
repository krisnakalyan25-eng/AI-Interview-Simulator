import {
  Target,
  Award,
  BarChart3,
  Brain,
  Trophy
} from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Role Specific Questions"
  },
  {
    icon: Award,
    title: "AI Feedback"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics"
  },
  {
    icon: Brain,
    title: "Improve Weak Areas"
  },
  {
    icon: Trophy,
    title: "Boost Confidence"
  }
]

function Benefits() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          What You Get
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg text-center"
            >

              <item.icon
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />

              <h3 className="font-semibold">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Benefits