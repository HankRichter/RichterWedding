"use client";

import { useState } from "react";

function HotelDetailsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-secondary rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary/60 hover:text-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-serif text-primary mb-6">Hotel Details</h3>

        <ol className="space-y-4 text-primary/80 list-decimal list-inside">
          <li><span className="font-medium text-primary">Parking:</span> I would advise guests to park in Beaubien Garage, which offers in-and-out privileges to hotel guests for a flat rate of $25 per day and can be charged to guestrooms. Valet parking is also available for $30 daily/$40 overnight.</li>
          <li><span className="font-medium text-primary">Check-In:</span> Our check-in time is 4:00 PM, and check-out time is 11:00 AM. For contactless arrival, we suggest Mobile Check-In and Mobile Key through the Marriott Bonvoy app if you&apos;re a Bonvoy member.</li>
          <li><span className="font-medium text-primary">Food & Beverage:</span> Our hotel restaurant and bar, Fuell, is currently open daily for breakfast, lunch, and dinner. We also have the Motor City Pantry open daily from 6:00 AM – midnight, which offers grab-and-go options. Illy Cafe is currently open daily from 6:00 AM - 1:00 PM.</li>
          <li><span className="font-medium text-primary">Housekeeping:</span> Our hotel has resumed providing daily stayover housekeeping service. If you need extra towels or any additional amenities, they are available at the front desk for pick-up, or you may dial &quot;0&quot; from any house phone to request these items be delivered to your hotel room.</li>
          <li><span className="font-medium text-primary">Wi-Fi:</span> $14.95 a day. Complimentary Basic Internet in guest rooms with individual Bonvoy membership. You can join by using this link:{" "}
            <a href="http://www.joinmarriottbonvoy.com/DTWDT" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              joinmarriottbonvoy.com/DTWDT
            </a>
          </li>
          <li><span className="font-medium text-primary">Cancellation Policy:</span> Cancellations must be made 48 hours prior to arrival. Please note that we will assess a one-night fee if you cancel after the deadline.</li>
        </ol>
      </div>
    </div>
  );
}

export default function Travel() {
  const [showHotelModal, setShowHotelModal] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {showHotelModal && <HotelDetailsModal onClose={() => setShowHotelModal(false)} />}
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
      <p className="text-primary/70 italic">
        Please book by Friday, June 26, 2026 to secure the group rate.{" "}
        <button
          onClick={() => setShowHotelModal(true)}
          className="underline hover:text-primary transition-colors"
        >
          View hotel details
        </button>
      </p>
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