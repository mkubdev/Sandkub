export default function Todo({ featureName }) {
    return (
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-16">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-amber-600 font-semibold tracking-wide uppercase">
                🚧
              </span>
              <span className="mt-2 block text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">
                { featureName } is coming soon...
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 leading-8">
            Check back in the future to see github projects, fun APIs, Twitter OAuth, and more...
            </p>
          </div>
        
        </div>
      </div>
    )
  }
  