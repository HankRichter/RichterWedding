export default function WeddingParty() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-serif text-primary mb-8">The Wedding Party</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-secondary p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif text-gray-800 mb-4">Bridesmaids</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif text-gray-800 mb-4">Groomsmen</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}