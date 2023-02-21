import { Component } from '@angular/core';
import { Country } from './models/Country';
import { Region } from './models/Regions';
import { SelectService } from './select.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  regions: Region[] = [];
  countries: any;
  data: any;
  showtable: boolean = false
  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.regions = this.selectService.getRegions();
  }

  onSelectRegion(event: any) {
    this.showtable = false
    this.selectService.getCountries(event.target.value).subscribe(res => {
      this.countries = res
    });
  }

  onSelectCountries(event: any) {
    this.data = this.countries.filter((item: any) => item.name == event.target.value);
    this.showtable = true
  }


}
