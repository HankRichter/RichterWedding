"use client";

import { useState } from "react";

function HotelDetailsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

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
          <li><span className="font-medium text-primary">Parking:</span> The hotel recommends parking in Beaubien Garage, which offers in-and-out privileges for hotel guests at a flat rate of $25 per day, chargeable to your room. Valet parking is also available for $30 daily or $40 overnight.</li>
          <li><span className="font-medium text-primary">Check-In:</span> Check-in is at 4:00 PM and check-out is at 11:00 AM. If you&apos;re a Marriott Bonvoy member, the hotel suggests using Mobile Check-In and Mobile Key through the Bonvoy app for a contactless arrival experience.</li>
          <li><span className="font-medium text-primary">Food & Beverage:</span> The hotel&apos;s restaurant and bar, Fuell, is open daily for breakfast, lunch, and dinner. Motor City Pantry offers grab-and-go options daily from 6:00 AM – midnight, and Illy Cafe is open daily from 6:00 AM – 1:00 PM.</li>
          <li><span className="font-medium text-primary">Housekeeping:</span> The hotel provides daily stayover housekeeping service. If you need extra towels or additional amenities, you can pick them up at the front desk or dial &quot;0&quot; from any house phone to have items delivered to your room.</li>
          <li><span className="font-medium text-primary">Wi-Fi:</span> Wi-Fi is $14.95 per day, but is complimentary for Marriott Bonvoy members. You can sign up for free using this link:{" "}
            <a href="http://www.joinmarriottbonvoy.com/DTWDT" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              joinmarriottbonvoy.com/DTWDT
            </a>
          </li>
          <li><span className="font-medium text-primary">Cancellation Policy:</span> Cancellations must be made at least 48 hours before arrival. A one-night fee will be charged for any cancellations made after that deadline.</li>
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
            {/* <div>
              <a 
                href="https://book.passkey.com/e/51211406"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Your Room
              </a>
            </div> */}
            {/* <p className="text-primary/70 italic">
              Please book by Friday, June 26, 2026 to secure the group rate.{" "}
              <button
                onClick={() => setShowHotelModal(true)}
                className="underline hover:text-primary transition-colors"
              >
                View hotel details
              </button>
            </p> */}
          </div>
        </div>

        <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">Shuttle Service</h2>
          <div className="text-primary">
            <p className="text-primary/80">Lavdas Limousine will provide shuttle service between the hotel and venue on the day of the wedding  with a sign saying Allcorn/Richter wedding.</p><br/>
            <p className="text-primary/80"><b>Pick up times:</b> <br/> 4:45 PM <br/> 5:15 PM</p> <br/>
            <p className="text-primary/80"><b>Return times:</b> <br/> Continuous starting at 9:30 PM till 11:45 PM as the last shuttle.</p>
            {/* <p className="text-primary/80">There will be two pick up times before the ceremony from the hotel: 4:45 PM to 5:15 PM. The shuttle will run again from 9:30 PM with last shuttle at 11:45 PM.</p> */}
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
                <li>• <a href="https://basandetroit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Basan</a></li>
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