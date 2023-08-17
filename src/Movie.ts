class Movie {
	title: string;
	year: number;
	country: string;
	slogan: string;
	genre: string;
	time: number

	constructor(title: string, year: number, country: string, slogan: string, genre: string, time: number) {
		this.title = title;
		this.year = year;
		this.country = country;
		this.slogan = slogan;
		this.genre = genre;
		this.time = time;
	}
}