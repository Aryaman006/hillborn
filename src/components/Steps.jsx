export default function HowItWorks() {
    return (
      <div className="bg-gray-900 text-black py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl text-white font-semibold">How It Works?</h2>
          <p className="text-white mt-2">Get Your Website in 3 Easy Steps</p>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg text-lg font-bold mb-4">
                1
              </div>
              {/* <h3 className="text-lg font-semibold mb-2">Browse</h3> */}
              <p className="text-black text-left">
                Browse our collection and select the website type that perfectly matches your business goals.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg text-lg font-bold mb-4">
                2
              </div>
              {/* <h3 className="text-lg font-semibold mb-2">Personalize</h3> */}
              <p className="text-black text-left">
                Personalize your website package with features, layouts, and tools tailored to your unique needs.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className=" p-6 rounded-lg bg-white">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg text-lg font-bold mb-4">
                3
              </div>
              {/* <h3 className="text-lg font-semibold mb-2">Launch</h3> */}
              <p className="text-black text-left">
                Launch your fully-functional site effortlessly and start growing your online presence with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }