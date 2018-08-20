import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {
    }

    getTemp(cityName: string) {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=25a3c5d24b90c13b0d5cb5d2c3baeaaf&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.main.temp);
    }
}