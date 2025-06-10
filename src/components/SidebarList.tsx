import React from "react";
import { Search, ListEnd, Album } from "lucide-react";

const dummy_array = [
  { title: "Liked Songs", description: "Playlist - 114songs" },
  { title: "Chill Vibes", description: "Playlist - 50songs" },
  { title: "Workout Mix", description: "Playlist - 30songs" },
  { title: "Top Hits", description: "Playlist - 80songs" },
  { title: "Focus", description: "Playlist - 60songs" },
  { title: "Throwback", description: "Playlist - 40songs" },
  { title: "Party", description: "Playlist - 25songs" },
  { title: "Jazz Classics", description: "Playlist - 35songs" },
  { title: "Morning Boost", description: "Playlist - 20songs" },
  { title: "Evening Relax", description: "Playlist - 18songs" },
  { title: "Indie Mix", description: "Playlist - 22songs" },
  { title: "Rock Anthems", description: "Playlist - 55songs" },
  { title: "Pop Essentials", description: "Playlist - 70songs" },
  { title: "Hip Hop Beats", description: "Playlist - 45songs" },
  { title: "Classical Focus", description: "Playlist - 28songs" },
];

const SidebarList = () => {
  return (
    <div className="h-[30rem] overflow-y-scroll" style={{
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE 10+
      }}>
      <div className="flex justify-between my-6 mx-3 gap-2 ">
        <div className="text-gray-300 ">
          <Search size={20} />
        </div>
        <div className="text-gray-300 flex gap-1">
          <p>Recents</p>
          <ListEnd size={20} className="mt-1" />
        </div>
      </div>

      <div className="flex flex-col items-start mx-2 gap-2 ">

        {dummy_array.map((item, idx) => (
          <div className="flex justify-start gap-10" key={idx}>
            <div>
              <Album size={40} />
            </div>
            <div className="flex flex-col">
              <p>{item.title}</p>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarList;
