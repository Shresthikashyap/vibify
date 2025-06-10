import { Album } from "lucide-react";

const playlists = [
  {
    id: 1,
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    image: "🎵",
  },
  {
    id: 2,
    title: "RapCaviar",
    description: "New music from Lil Baby, 21 Savage and more",
    image: "🎤",
  },
  {
    id: 3,
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    image: "📀",
  },
  {
    id: 4,
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    image: "🎸",
  },
  {
    id: 5,
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    image: "🌅",
  },
  {
    id: 6,
    title: "Vibe Right Now",
    description: "The mood right now",
    image: "✨",
  },
];

const recentlyPlayed = [
  { title: "Blinding Lights", artist: "The Weeknd", image: "🎵" },
  { title: "Watermelon Sugar", artist: "Harry Styles", image: "🍉" },
  { title: "Good 4 U", artist: "Olivia Rodrigo", image: "💜" },
  { title: "Levitating", artist: "Dua Lipa", image: "✨" },
  { title: "Save Your Tears", artist: "The Weeknd", image: "💧" },
  { title: "Peaches", artist: "Justin Bieber", image: "🍑" },
];

const Playlists = () => {
  return (
    <div className="bg-white">
      <div className="ml-4 mt-2 mr-1.5">
        <div className="flex justify-start items-start gap-2 text-white text-center ">
          <p className="bg-gray-800 px-3.5 text-[0.9rem] py-2 rounded-full">
            All
          </p>
          <p className="bg-gray-800 px-3.5 text-[0.9rem] py-2 rounded-full">
            Music
          </p>
          <p className="bg-gray-800 px-3.5 text-[0.9rem] py-2 rounded-full">
            Podcasts
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {recentlyPlayed.map((song, id) => (
            <div key={id} className="p-4 bg-gray-800 rounded-2xl text-white">
              <div className="flex gap-5">
                <Album size={45} />
                <div className="flex flex-col items-start justify-start">
                  <p>{song.title}</p>
                  <p>{song.artist}</p>
                </div>
              </div>
            </div>
          ))}          
        </div>
      </div>
    </div>
  );
};

export default Playlists;
