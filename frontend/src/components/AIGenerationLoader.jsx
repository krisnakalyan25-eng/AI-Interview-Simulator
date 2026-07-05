import { useEffect, useState } from "react"

const steps = [
  "📄 Reading your resume...",
  "🧠 Identifying your skills...",
  "🤖 Creating interview questions...",
  "✨ Finalizing your interview..."
]

function AIGenerationLoader() {

  const [step, setStep] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setStep(prev =>
        prev < steps.length - 1 ? prev + 1 : prev
      )

    }, 1800)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-[500px]">

        <div className="flex justify-center mb-6">

          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center animate-pulse text-4xl">

            🤖

          </div>

        </div>

        <h2 className="text-2xl font-bold text-center">
          AI is preparing your interview
        </h2>

        <p className="text-gray-500 text-center mt-2">
          This usually takes 10–20 seconds.
        </p>

        <div className="mt-8 space-y-4">

          {steps.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              {index < step ? (
                <span className="text-green-600 text-xl">
                  ✓
                </span>
              ) : index === step ? (
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-gray-400">
                  ○
                </span>
              )}

              <span
                className={
                  index <= step
                    ? "font-medium"
                    : "text-gray-400"
                }
              >
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  )

}

export default AIGenerationLoader