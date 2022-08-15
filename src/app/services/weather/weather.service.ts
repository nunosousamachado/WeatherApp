import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ICurrentWeather } from "../../Interfaces/ICurrentWeather";
import {map} from "rxjs/operators";

interface ICurrentWeatherData {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    constructor(private httpClient: HttpClient) { }

    getCurrentWeather(city: string, country: string) {
        const uriParams = new HttpParams()
            .set('q', `${city},${country}`)
            .set('appId', environment.appId)

        return this.httpClient.get<ICurrentWeatherData>(
            `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?`, { params: uriParams}
        ).pipe(
            map(data => this.transformICurrentWeatherDataToICurrentWeather(data))
        );
    }

    private transformICurrentWeatherDataToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
        return {
            city: data.name,
            country: data.sys.country,
            date: this.convertUnixTimeStampToMilliseconds(data.dt),
            image: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            temperature: this.convertKelvinToCelsius(data.main.temp),
            description: data.weather[0].description
        };
    }

    private convertKelvinToCelsius(kelvin: number): number {
        return kelvin - 273.15;
    }

    private convertKelvinToFahrenheit(kelvin: number): number {
        return (kelvin - 273.15) * 1.8 + 32;
    }

    private convertUnixTimeStampToMilliseconds(timestamp: number): number {
        return timestamp * 1000;
    }
}
