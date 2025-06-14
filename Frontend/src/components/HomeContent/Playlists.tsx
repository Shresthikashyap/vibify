import { Album } from "lucide-react";
import { Card, CardContent } from "./SongCarousel/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./SongCarousel/carousel";

//playlist...
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

// Removed carouselClass as it is not a valid className value

const Playlists = () => {
  return (
    <div className="bg-white overflow-y-scroll" style={{
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE 10+
      }} >
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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-3">
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
        <div className="mt-4">
          <h2 className="font-semibold text-2xl mb-2">Made For you</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {playlists.map((playlist) => (
                <CarouselItem
                  key={playlist.id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Card className="aspect-square hover:bg-gray-200 transition-colors border border-red-600">
                   <CardContent className="p-4">
                      
                       <div className="p-12 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="text-center z-10 p-4">
                          <div className="text-2xl mb-2">♪</div>
                          <div className="text-xs font-medium opacity-90">
                            {playlist.title}
                          </div>
                        </div>
                      </div>
                    </CardContent> 
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 -left-4" />
            <CarouselNext className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 -right-4" />
          </Carousel>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl mb-2">Made For you</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {playlists.map((playlist) => (
                <CarouselItem
                  key={playlist.id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Card className="aspect-square hover:bg-gray-200 transition-colors border border-red-600">
                   <CardContent className="p-4">
                      
                       <div className="p-12 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="text-center z-10 p-4">
                          <div className="text-2xl mb-2">♪</div>
                          <div className="text-xs font-medium opacity-90">
                            {playlist.title}
                          </div>
                        </div>
                      </div>
                    </CardContent> 
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 -left-4" />
            <CarouselNext className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 -right-4" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Playlists;