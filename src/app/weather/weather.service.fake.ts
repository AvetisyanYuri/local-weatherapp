import { Observable, of } from "rxjs";
import { ICurrentWeather } from "../interfaces";
import { IWeatherService } from "./weather.service";

export const fakeWeather: ICurrentWeather = {
    city: 'Yerevan',
    country: 'AM',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle'
}

export class WeatherServiceFake implements IWeatherService{

    getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        return of(fakeWeather);
    }

}