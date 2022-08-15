import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from "../Interfaces/ICurrentWeather";
import { WeatherService } from "../services/weather/weather.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

    nullGuardMessage: string = 'No Data!!';
    currentWeather!: ICurrentWeather;

    constructor(private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.weatherService
            .getCurrentWeather('Porto', 'pt')
            .subscribe((data) => this.currentWeather = data);
    }

}
