import axios from "axios";
import { Song } from "../components/SongList";

// const songMocks: Song[] = [
//   {
//     id: 1,
//     name: "Song 1",
//     tone: "D",
//   },
//   {
//     id: 2,
//     name: "Song 2",
//     tone: "E",
//   },
//   {
//     id: 3,
//     name: "Song 3",
//     tone: "F",
//   },
//   {
//     id: 4,
//     name: "Song 4",
//     tone: "G",
//   },
//   {
//     id: 5,
//     name: "Song 5",
//     tone: "A",
//   },
//   {
//     id: 6,
//     name: "Song 6",
//     tone: "B",
//   },
//   {
//     id: 7,
//     name: "Song 7",
//     tone: "C",
//   },
// ];

export const getSongs = async () => {
  try {
    // const response = await axios.get("https://rep-mix.vercel.app/api/songs");
    const response = await axios.get("api/songs");
    const songs = response.data.songs;
    return songs;
    // return songMocks;
  } catch (error) {
    console.error(error);
  }
};
