function Spinner({ size = "h-5 w-5", color = "border-white" }) {
  return (
    <div
      className={`
        ${size}
        border-2
        ${color}
        border-t-transparent
        rounded-full
        animate-spin
      `}
    />
  )
}

export default Spinner