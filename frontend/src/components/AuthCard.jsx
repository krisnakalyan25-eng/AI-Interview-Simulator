function AuthCard() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-black">Login</h2>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border-2 border-gray-300 p-4 rounded-xl text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border-2 border-gray-300 p-4 rounded-xl text-black"
        />

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}

export default AuthCard;