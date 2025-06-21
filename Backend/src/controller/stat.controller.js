import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";

export const getStats = async (req, res, next) => {
	try {
		const [totalSongs, totalAlbums, totalUsers, uniqueArtists] = await Promise.all([
			Song.countDocuments(),
			Album.countDocuments(),
			User.countDocuments(),

			Song.aggregate([
				{
					$unionWith: {
						coll: "albums", // Use the "albums" collection. coll is the name of the collection to union with.
                                        // The unionWith stage allows you to combine documents from another collection.

						pipeline: [], // No additional pipeline stages needed for the union. if there are any, you can add them here it will look like this: pipeline: [{ $match: { ... } }] or pipeline: [{ $group: { ... } }]
                        
                        //pipeline is an array of stages to apply to the documents from the "albums" collection before combining them with the "songs" collection.
					},
				},
				{
					$group: {
						_id: "$artist",
					},
				},
				{
					$count: "count", //"count" is the name of the field in the output document
				},
			]),
		]);

		res.status(200).json({
			totalAlbums,
			totalSongs,
			totalUsers,
			totalArtists: uniqueArtists[0]?.count || 0,
		});
	} catch (error) {
		next(error);
	}
};

/* Input documents: */ 

// { title: "Song A", artist: "Taylor Swift" }
// { title: "Song B", artist: "Ed Sheeran" }  
// { title: "Song C", artist: "Taylor Swift" }

/* $group: { _id: "$artist" } creates: */

// { _id: "Taylor Swift" }   // Groups Song A and Song C
// { _id: "Ed Sheeran" }     // Groups Song B