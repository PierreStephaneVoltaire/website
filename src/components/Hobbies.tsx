interface HobbyItem {
  name: string;
  images: string[];
}

interface HobbiesProps {
  hobbies: HobbyItem[];
}

const Hobbies = ({ hobbies }: HobbiesProps) => {
  // Don't render the component if hobbies array is empty
  if (!hobbies || hobbies.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-6">
      <h3 className="text-white text-2xl font-bold">Hobbies & Interests</h3>
      
      {hobbies.map((hobby, hobbyIdx) => (
        <div key={hobbyIdx} className="mt-4">
          <h4 className="text-white text-xl font-semibold mb-3">{hobby.name}</h4>
          <div className="flex flex-wrap gap-4">
            {hobby.images.map((imageUrl, imageIdx) => (
              <div 
                key={`${hobbyIdx}-${imageIdx}`} 
                className="bg-gray-800 rounded-lg overflow-hidden w-[200px] h-[200px] relative group"
              >
                <img 
                  src={imageUrl} 
                  alt={`${hobby.name} ${imageIdx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
