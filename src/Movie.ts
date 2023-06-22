class Movie {
    movie_title: string;
    year_of_release: number;
    genre: string;
    rating: number;

    constructor(movie_title: string, year_of_release: number, genre: string, rating: number) {
        this.movie_title = movie_title;
        this.year_of_release = year_of_release;
        this.genre = genre;
        this.rating = rating;
    }

    getMovie() {
        return {
            title: this.movie_title,
            year_of_release: this.year_of_release,
            genre: this.genre,
            rating: this.rating
        }
    }
}

export {Movie}

