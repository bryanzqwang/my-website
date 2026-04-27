export function Footer() {
  return (
    <footer className="w-full mt-16" style={{ backgroundColor: '#182E6F' }}>
      <div className="mx-auto max-w-6xl px-6 py-40 sm:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left side - Newsletter signup */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Bryan Wang
              </h2>
              <p className="mt-2 text-lg text-white/90">
                Sign up for my newsletter
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#182E6F] transition hover:bg-white/90"
              >
                Subscribe →
              </button>
            </form>
          </div>

          {/* Right side - Call to action */}
          <div className="flex-1 space-y-4 lg:text-right">
            <h3 className="text-2xl font-semibold text-white">
              Stay Updated
            </h3>
            <p className="text-base text-white/90">
              Get the latest insights on web development, design trends, and technology updates delivered straight to your inbox.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}