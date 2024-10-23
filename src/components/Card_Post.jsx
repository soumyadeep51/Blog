

function Card_Post() {
  return (
    <>
         <div class="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-sm">
    <h2 class="text-2xl font-semibold text-center text-gray-700 mb-4">Login</h2>
    <form>
      <div class="mb-4">
        <label for="email" class="block text-gray-600 text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-600 text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Sign In
      </button>
      <p class="text-center text-gray-500 text-sm mt-4">
        Don't have an account?
        <a href="#" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </form>
   </div>
    </>
  )
}

export default Card_Post

