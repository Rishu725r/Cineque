import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWUzNTU2MWZlNDVjNTQxYzliOWFmY2FhYWQ1YThhZiIsIm5iZiI6MTc0MjQ4NjgzMi4zNDQsInN1YiI6IjY3ZGMzZDMwMDg3NDllZmUzNGU3YmFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ye9s6QydE_ERYa_5iHFZ1906miOds9fNcPrZ3KiW5_A",
  },
});

export default instance;