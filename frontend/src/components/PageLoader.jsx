import Spinner from "./Spinner"

function PageLoader({ text = "Loading..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <Spinner size="h-12 w-12" color="border-blue-600" />

      <p className="mt-5 text-gray-600 text-lg">
        {text}
      </p>
    </div>
  )
}

export default PageLoader