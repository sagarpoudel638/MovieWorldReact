import axios from "axios";
const searchInput = useRef("");
const apiKEY = import.meta.env.VITE_APIKEY;

export async function getMovie(query) {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKEY}&t=${query}`
    );
  } catch (error) {
    console.error(error);
  }
  
}

