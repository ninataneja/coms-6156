import {Component} from '@angular/core';
import {OfficeHourService} from "./services/office-hour-service";
import { OfficeHour } from './officehour'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coms-e6156 office hour';
  officeHourService: OfficeHourService;
  data: any;
  inputData = new OfficeHour();

  constructor(officeHourService: OfficeHourService) {
    this.officeHourService = officeHourService;
    //this.inputData = [];
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
    this.officeHourService.postData(this.inputData).subscribe((data: any) => this.setData(data));
  }

  putData() {
    this.officeHourService.putData(this.inputData).subscribe((data: any) => this.setData(data));
  }

  deleteData() {
    this.officeHourService.deleteData(this.inputData).subscribe((data: any) => this.setData(data));
  }

}
