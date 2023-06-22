import * as http from "http";
import {Movie} from "./Movie";

const port = 4000;
const movie = new Movie('asd', 2, 'asd', 3);

class MovieService {
    returnMovieAsJsonStringify() {
        const movie = new Movie(
            "The Guilty", 2021, "Thriller", 7.8
        );
        return JSON.stringify(movie.getMovie());
    }
}


const requestListener = (req: any, res: any) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/movies":
            res.writeHead(200);
            const movieService = new MovieService();
            res.end(movieService.returnMovieAsJsonStringify());
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({
                error: "Resource not found"
            }));
    }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
