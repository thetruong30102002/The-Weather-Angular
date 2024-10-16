import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  cities: string[] = ['Hà Nội', 'Thành Phố Hồ Chí Minh', 'Đà Nẵng', 'Nha Trang'];
  selectedCity: string = this.cities[0];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getWeather(this.selectedCity).subscribe(data => {
      this.weatherData = data;
    });
  }

  onCityChange(city: string) {
    this.getWeatherData(); // Gọi lại API để lấy dữ liệu thời tiết cho thành phố mới
  }
}