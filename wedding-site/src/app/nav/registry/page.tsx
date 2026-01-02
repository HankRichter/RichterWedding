export default function Registry() {
  const registries = [
    // Add Registrys Here
    {
      name: "Williams Sonoma",
      description: "Kitchen essentials and culinary tools",
      url: "#", // Replace with our actual registry link
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">Registry</h1>
      
      <p className="text-center text-primary/70 mb-12 max-w-2xl mx-auto">
        Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we&apos;ve registered at the following stores.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {registries.map((registry) => (
          <a
            key={registry.name}
            href={registry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-primary/70 group-hover:text-primary transition-colors mb-4 flex justify-center">
              {registry.icon}
            </div>
            <h2 className="text-xl font-serif text-primary mb-2">{registry.name}</h2>
            <p className="text-sm text-primary/60">{registry.description}</p>
          </a>
        ))}
      </div>

      <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-md text-center">
        <div className="text-primary/70 mb-4 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">Honeymoon Fund</h2>
        <p className="text-primary/70 mb-6 max-w-xl mx-auto">
          If you&apos;d prefer to contribute to our honeymoon adventure, we would be incredibly grateful. Your generosity will help us create unforgettable memories together.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Contribute to Our Honeymoon
        </a>
        
        <div className="mt-6 pt-6 border-t border-primary/20">
          <p className="text-sm text-primary/60">
            Venmo: <span className="text-primary">@YourVenmoHandle</span>
          </p>
          <p className="text-sm text-primary/60">
            PayPal: <span className="text-primary">your@email.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}