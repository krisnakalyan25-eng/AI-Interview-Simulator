import {
  Upload,
  Bot,
  FileQuestion,
  MessageSquare,
  Trophy
} from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Resume"
  },
  {
    icon: Bot,
    title: "AI Analysis"
  },
  {
    icon: FileQuestion,
    title: "Generate Questions"
  },
  {
    icon: MessageSquare,
    title: "Get Feedback"
  },
  {
    icon: Trophy,
    title: "Track Progress"
  }
]

function HowItWorks() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg text-center"
            >

              <step.icon
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />

              <h3 className="font-semibold">
                {step.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks