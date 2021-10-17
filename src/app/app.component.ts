import {Component} from '@angular/core';
import {OfficeHourService} from "./services/office-hour-service";
import { OfficeHour } from './officehour'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coms-e6156';
  officeHourService: OfficeHourService;
  data: any;

  constructor(officeHourService: OfficeHourService) {
    this.officeHourService = officeHourService;
  }

  ngOnInit(): void {
    this.getData();
   // this.postData();
    //this.deleteData();
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    this.officeHourService.getData().subscribe((data: any) => this.setData(data));
  }

  postData() {
    this.officeHourService.postData().subscribe((data: any) => this.setData(data));
  }

  putData() {
    this.officeHourService.putData().subscribe((data: any) => this.setData(data));
  }

  deleteData() {
    this.officeHourService.deleteData().subscribe((data: any) => this.setData(data));
  }

}
