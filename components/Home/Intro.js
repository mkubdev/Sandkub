export default function Intro() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-16">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 font-semibold tracking-wide uppercase">
              Welcome to Sandkub
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi there !
            </span>
          </h1>
          <p className="mt-8 text-md text-gray-500 leading-8 lg:text-xl">
            Hey, i&apos;m Maxime Kubik, <strong>musician, builder, and software engineer</strong> based in Lyon, France.
            I&apos;m currently buildings industrial webapps at <strong>TFT Labs.</strong> 🎩
          </p>
        </div>
        <div className="mt-6 prose prose-amber prose-lg text-gray-500 mx-auto">
  
          <blockquote>
            <p>
            Docendo discimus
            </p>
          </blockquote>
          <p>
            This is the first version of my website. I&apos;m currently working on it, but it&apos;s not finished yet. I&apos;ll be adding more features soon.
          </p>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1600273743219-2c6a637fc9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>22/03/2022 - David Bowie</figcaption>
          </figure>

          <button
   
        className="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 opacity-70">
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span className="ml-3">Click to transition</span>
      </button>

        </div>
      </div>
    </div>
  )
}
