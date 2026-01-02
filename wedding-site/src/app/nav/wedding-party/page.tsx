"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function WeddingParty() {
  const [activeTab, setActiveTab] = useState<'bridesmaids' | 'groomsmen' | 'kids'>('bridesmaids');

  const bridesmaids = [
    { name: "Alyssa Rotkiewicz", role: "Matron of Honor", relation: "Friend of the Bride", photo: "/photos/wedding-party/alyssa.jpg" },
    { name: "Sarah Castellano", role: "Maid of Honor", relation: "Friend of the Bride", photo: "/photos/wedding-party/SarahC.jpeg" },
    { name: "Lauryn Kukic", role: "Bridesmaid", relation: "Friend of the Bride", photo: "/photos/wedding-party/LaurynK.jpg" },
    { name: "Brianna Buckley", role: "Bridesmaid", relation: "Sister of the Bride", photo: "/photos/wedding-party/brianna.jpg" },
    { name: "Helene Buckley", role: "Bridesmaid", relation: "Sister-in-law of the Bride", photo: "/photos/wedding-party/helene.jpg" },
  ];

  const groomsmen = [
    { name: "Gus Richter", role: "Best Man", relation: "Brother of the Groom", photo: "/photos/wedding-party/gus.jpg" },
    { name: "Gavin Foy", role: "Groomsman", relation: "Friend of the Groom", photo: "/photos/wedding-party/gavin.jpg" },
    { name: "Brad Borodaty", role: "Groomsman", relation: "Friend of the Groom", photo: "/photos/wedding-party/brad.jpg" },
    { name: "Aaron Dill", role: "Groomsman", relation: "Friend of the Groom", photo: "/photos/wedding-party/aaron.jpg" },
    { name: "Josh Gyurnek", role: "Groomsman", relation: "Friend of the Groom", photo: "/photos/wedding-party/josh.jpg" },
  ];

  const kids = [
    { name: "Joanna Buckley", role: "Flower Girl", relation: "Niece of the Bride", photo: "/photos/wedding-party/joanna.jpg" },
    { name: "Madeline Buckley", role: "Flower Girl", relation: "Niece of the Bride", photo: "/photos/wedding-party/madeline.jpg" },
    { name: "Zachary Buckley", role: "Ring Bearer", relation: "Nephew of the Bride", photo: "/photos/wedding-party/zachary.jpg" },
  ];

  const tabs = [
    { id: 'bridesmaids' as const, label: 'Bridesmaids' },
    { id: 'groomsmen' as const, label: 'Groomsmen' },
    { id: 'kids' as const, label: 'Flower Girls & Ring Bearer' },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'bridesmaids': return bridesmaids;
      case 'groomsmen': return groomsmen;
      case 'kids': return kids;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 text-center">Wedding Party</h1>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-primary text-secondary shadow-lg'
                : 'bg-secondary text-primary hover:bg-primary/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {getActiveData().map((person) => (
          <div 
            key={person.name} 
            className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-square">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-medium text-primary">{person.name}</p>
              <p className="text-primary/80 font-serif italic">{person.role}</p>
              <p className="text-sm text-primary/60">{person.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}