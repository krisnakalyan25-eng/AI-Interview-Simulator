// import AuthCard from "./AuthCard";
import heroImage from "/src/assets/hero-image.png";

function HeroSection() {
  return (
    <section
      className="
      bg-gradient-to-r
      from-slate-950
      via-blue-950
      to-indigo-950
      min-h-screen
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        grid
        lg:grid-cols-12
        gap-10
        items-center
        "
      >
        {/* LEFT */}

        <div className="lg:col-span-5">
          <div
            className="
            inline-block
            px-4
            py-2
            bg-blue-900/40
            text-blue-300
            rounded-full
            mb-6
            "
          >
            🚀 Ace Your Next Interview
          </div>

          <h1
            className="
            text-6xl
            font-bold
            text-white
            leading-tight
            "
          >
            Practice Smart.
            <br />
            <span
              className="
              bg-gradient-to-r
              from-blue-400
              to-purple-400
              bg-clip-text
              text-transparent
              "
            >
              Interview
              <br />
              Confidently.
            </span>
          </h1>

          <p
            className="
            text-gray-300
            mt-6
            text-lg
            "
          >
            Upload your resume, generate AI-powered interview questions,
            receive instant feedback, and improve your confidence.
          </p>

          <div
            className="
            flex
            gap-6
            mt-8
            text-white
            flex-wrap
            "
          >
            <span>✅ AI Questions</span>
            <span>✅ AI Feedback</span>
            <span>✅ Track Progress</span>
          </div>
        </div>

        {/* CENTER */}

        <div className="hidden lg:flex justify-center lg:col-span-7">
          <img
            src={heroImage}
            alt="AI Interview"
            className="
  w-full
  max-w-sm
 
  "
          />
        </div>

        {/* RIGHT */}

        {/* <div className="lg:col-span-4">a
          <AuthCard />
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;