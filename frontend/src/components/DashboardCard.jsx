function DashboardCard({ title, children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-md
        p-6
        border
        border-gray-100
        ${className}
      `}
    >
      {title && (
        <h2 className="text-2xl font-semibold mb-4">
          {title}
        </h2>
      )}

      {children}
    </div>
  )
}

export default DashboardCard