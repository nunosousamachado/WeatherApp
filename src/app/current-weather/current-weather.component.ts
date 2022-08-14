import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from "../Interfaces/ICurrentWeather";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

    currentWeather: ICurrentWeather;

    constructor() {
        this.currentWeather = {
            city: 'Porto',
            country: 'PT',
            date: new Date(),
            image: 'assets/weather-icons/sunny.svg',
            temperature: 72,
            description: 'sunny'
        } as ICurrentWeather;
    }

    ngOnInit(): void {
        // not implemented
  }

}
