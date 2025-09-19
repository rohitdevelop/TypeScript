import React, { useState } from 'react';

// TypeScript: Define types for our data
type Mood = 'happy' | 'sleepy' | 'hungry' | 'playful' | 'grumpy';

type Pet = {
  id: number;
  name: string;
  type: 'cat' | 'dog' | 'rabbit';
  mood: Mood;
  energy: number;
};

// TypeScript: Interface for component props
interface PetCardProps {
  pet: Pet;
  onMoodChange: (petId: number, newMood: Mood) => void;
}

// Child component with TypeScript props
const PetCard: React.FC<PetCardProps> = ({ pet, onMoodChange }) => {
  const getMoodEmoji = (mood: Mood): string => {
    const moodMap: Record<Mood, string> = {
      happy: '😊',
      sleepy: '😴',
      hungry: '🍽️',
      playful: '🎾',
      grumpy: '😠'
    };
    return moodMap[mood];
  };

  const getPetEmoji = (type: Pet['type']): string => {
    return type === 'cat' ? '🐱' : type === 'dog' ? '🐶' : '🐰';
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border-2 border-purple-200">
      <div className="text-center mb-3">
        <div className="text-4xl mb-2">{getPetEmoji(pet.type)}</div>
        <h3 className="font-bold text-lg text-gray-800">{pet.name}</h3>
        <p className="text-sm text-gray-600 capitalize">{pet.type}</p>
      </div>
      
      <div className="text-center mb-3">
        <div className="text-3xl mb-1">{getMoodEmoji(pet.mood)}</div>
        <p className="text-sm font-medium text-gray-700 capitalize">Feeling {pet.mood}</p>
      </div>
      
      <div className="mb-3">
        <p className="text-xs text-gray-600 mb-1">Energy Level</p>
        <div className="bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
            style={{ width: `${pet.energy}%` }}
          ></div>
        </div>
        <p className="text-xs text-center mt-1 text-gray-600">{pet.energy}%</p>
      </div>
      
      <div className="flex flex-wrap gap-1 justify-center">
        {(['happy', 'sleepy', 'hungry', 'playful', 'grumpy'] as Mood[]).map((mood) => (
          <button
            key={mood}
            onClick={() => onMoodChange(pet.id, mood)}
            className={`px-2 py-1 rounded text-xs transition-colors ${
              pet.mood === mood 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
            }`}
          >
            {getMoodEmoji(mood)}
          </button>
        ))}
      </div>
    </div>
  );
};

const PetMoodTracker: React.FC = () => {
  // TypeScript: State with proper typing
  const [pets, setPets] = useState<Pet[]>([
    { id: 1, name: 'Whiskers', type: 'cat', mood: 'sleepy', energy: 30 },
    { id: 2, name: 'Buddy', type: 'dog', mood: 'playful', energy: 85 },
    { id: 3, name: 'Coco', type: 'rabbit', mood: 'hungry', energy: 60 }
  ]);

  // TypeScript: Function with proper parameter types and return type
  const handleMoodChange = (petId: number, newMood: Mood): void => {
    setPets(prevPets => 
      prevPets.map(pet => 
        pet.id === petId 
          ? { 
              ...pet, 
              mood: newMood,
              energy: newMood === 'playful' ? Math.min(pet.energy + 10, 100) :
                      newMood === 'sleepy' ? Math.max(pet.energy - 5, 0) : pet.energy
            }
          : pet
      )
    );
  };

  // TypeScript: Computed value with proper typing
  const averageEnergy: number = Math.round(
    pets.reduce((sum, pet) => sum + pet.energy, 0) / pets.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🐾 Pet Mood Tracker
          </h1>
          <p className="text-gray-600">
            TypeScript Learning: Types, Interfaces & State Management
          </p>
          <div className="mt-2 inline-block bg-white rounded-full px-4 py-2 shadow-sm">
            <span className="text-sm text-gray-700">
              Average Energy: <span className="font-bold text-purple-600">{averageEnergy}%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pets.map(pet => (
            <PetCard 
              key={pet.id} 
              pet={pet} 
              onMoodChange={handleMoodChange}
            />
          ))}
        </div>
        
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">TypeScript Features Demonstrated:</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>• <strong>Union Types:</strong> Mood = 'happy' | 'sleepy' | 'hungry'...</p>
            <p>• <strong>Object Types:</strong> Pet interface with typed properties</p>
            <p>• <strong>Function Types:</strong> Parameters and return types</p>
            <p>• <strong>Generic Types:</strong> useState&lt;Pet[]&gt;</p>
            <p>• <strong>Record Types:</strong> Record&lt;Mood, string&gt;</p>
            <p>• <strong>Component Props:</strong> Interface for component props</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetMoodTracker;