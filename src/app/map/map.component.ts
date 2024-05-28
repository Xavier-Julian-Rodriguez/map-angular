import { Component, Injectable, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Svg } from './svg.component';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterOutlet, Svg],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  providers: [ApiService],
})
export class MapComponent {
  @Input() countryId!: string;

  title: string = 'World Map';
  subTitle: string = 'Click On A Country For Quick Statistics.';
  data: any = {};

  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.countryId = '';
    this.data = {};
    this.apiService = apiService;
  }

  ngAfterViewInit(): void {
    this.svgPathEventListener();
  }
  async svgPathEventListener() {
    document.querySelectorAll('path').forEach((element) => {
      element.addEventListener('click', async (event) => {
        let id = element.getAttribute('id');
        if (id !== null) {
          this.countryId = id;
          console.log(this.countryId);
          this.fetchData();
        }
      });
    });
  }

  fetchData() {
    if (this.countryId) {
      this.data = this.apiService.callApi(this.countryId).subscribe({
        next: (jsonData) => {
          if (jsonData) {
            this.data = jsonData[1][0];
          }
        },
      });
    }
  }
}
