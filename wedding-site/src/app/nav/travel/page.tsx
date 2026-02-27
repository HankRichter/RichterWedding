export default function Travel() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 text-center">Travel</h1>
      
      <div className="space-y-8">
        <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">Hotel Block</h2>
          <div className="space-y-4 text-primary">
            <div>
              <p className="font-medium text-lg">Detroit Marriott at the Renaissance Center</p>
              <p className="text-primary/70">400 Renaissance Drive, Detroit, MI 48243</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-8">
              <p><span className="text-primary/60">Phone:</span> (313) 568-8000</p>
            </div>
            <div>
              <a 
                href="https://book.passkey.com/e/51211406"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Your Room
              </a>
            </div>
            <p className="text-primary/70 italic">Please book by Friday, June 26, 2026 to secure the group rate.</p>
          </div>
        </div>

        <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">Shuttle Service</h2>
          <div className="text-primary">
            <p className="text-primary/80">
              Shuttle service will be provided between the hotel and venue. Details coming soon...
            </p>
          </div>
        </div>

        <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">Wedding Venue</h2>
          <div className="text-primary space-y-2">
            <p className="font-medium text-lg">The Whiskey Factory - Detroit Distillery</p>
            <p className="text-primary/70">1000 Maple St, Detroit, MI 48207</p>
            <a 
              href="https://maps.google.com/?q=1000+Maple+St+Detroit+MI+48207" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors mt-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>

        <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">J & H's Things To Do in Detroit</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg text-primary mb-3">Restaurants</h3>
              <ul className="space-y-2 text-primary/80">
                <li>• <a href="https://www.highlandsdetroit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">The Highlands</a></li>
                <li>• <a href="https://www.johnnynoodleking.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Johnny Noodle King</a></li>
                <li>• <a href="https://adelinadetroit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Adelina</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg text-primary mb-3">Attractions</h3>
              <ul className="space-y-2 text-primary/80">
                <li>• <a href="https://www.dia.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Detroit Institute of Arts</a></li>
                <li>• <a href="https://www.motownmuseum.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Motown Museum</a></li>
                <li>• <a href="https://easternmarket.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Eastern Market</a></li>
                <li>• <a href="https://detroitriverfront.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Detroit Riverwalk</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}