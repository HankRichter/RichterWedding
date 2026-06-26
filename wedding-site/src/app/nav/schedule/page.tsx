export default function Schedule() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 text-center">Schedule</h1>

      <div className="space-y-8">
        {/* Friday */}
        <div className="bg-secondary p-8 md:p-12 rounded-lg shadow-md">
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-primary/80 uppercase tracking-widest">
              Friday, July 24, 2026
            </p>

            <h2 className="text-2xl md:text-3xl font-serif text-primary">
              Welcome Drinks
            </h2>

            <div className="space-y-1">
              <p className="text-lg md:text-xl text-primary font-medium">
                Fuell
              </p>
              <p className="text-primary/70">
                400 Renaissance Center, Detroit, MI 48243
              </p>
            </div>

            <div className="border-t border-primary/20 pt-6 space-y-4">
              <div className="flex justify-center items-center gap-4">
                <span className="text-primary font-serif text-lg">Drinks at Fuell</span>
                <span className="text-primary/60">—</span>
                <span className="text-primary/80">7 PM - 9 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Saturday */}
        <div className="bg-secondary p-8 md:p-12 rounded-lg shadow-md">
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-primary/80 uppercase tracking-widest">
              Saturday, July 25, 2026
            </p>

            <h2 className="text-2xl md:text-3xl font-serif text-primary">
              Ceremony & Reception
            </h2>

            <div className="space-y-1">
              <p className="text-lg md:text-xl text-primary font-medium">
                The Whiskey Factory - Detroit Distillery
              </p>
              <p className="text-primary/70">
                1000 Maple St, Detroit, MI 48207
              </p>
            </div>

            <div className="py-4">
              <span className="inline-block bg-primary text-secondary px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                Cocktail Attire
              </span>
            </div>

            <div className="border-t border-primary/20 pt-6 space-y-4">
              <div className="flex justify-center items-center gap-4">
                <span className="text-primary font-serif text-lg">Ceremony</span>
                <span className="text-primary/60">—</span>
                <span className="text-primary/80">5:30 PM - 6 PM</span>
              </div>

              <p className="text-primary/60 italic">Cocktail hour to follow</p>

              <div className="flex justify-center items-center gap-4">
                <span className="text-primary font-serif text-lg">Reception</span>
                <span className="text-primary/60">—</span>
                <span className="text-primary/80">7 PM - Midnight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}