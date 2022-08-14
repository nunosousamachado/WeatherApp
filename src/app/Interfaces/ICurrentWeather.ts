/**
 *  This is the description of the interface
 *
 *  @interface ICurrentWeather
 *  @param {string} city
 *  @param {string} country
 *  @param {Date} date
 *  @param {string} image
 *  @param {number} temperature
 *  @param {string} description
 *  @field {string}
 *      city: city name,
 *      country: country code,
 *      date: current date,
 *      image: current weather icon,
 *      temperature: current temperature,
 *      description: current weather description
 *
 */
export interface ICurrentWeather {
    city: string;
    country: string;
    date: Date;
    image: string;
    temperature: number;
    description: string;
}
