import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  columnOptions = [];
  cols = [];
  ordersData = [];
  orders = [];

  authToken;

  constructor(
    private AppService: AppService
  ) {}

  ngOnInit(){

    this.AppService.fetchToken()
        .subscribe(data => {
            this.AppService.fetchData(data.data.token)
              .subscribe(data => {
                  this.ordersData = data.data.results;
                  this.orders = this.ordersData.map(order => {
                    return {
                      'awb': order.awb,
                      'so_number': order.so_number,
                      'order_type': order.order_type,
                      'customer_name': order.drop.name,
                      'driver': order.allocation.driver_name,
                      'status':order.latest_status,
                      'client': order.client,
                      'created_at': this.formatTime(new Date(order.created_at))
                    }
                  });  
            })
        });
    this.cols = this.AppService.fieldsToDisplay;
        
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
  }

  formatTime(date) {
    let day = date.getDay();
    let month = this.getMonth(date.getMonth());
    let year = date.getFullYear();

    let dateToDisplay = `${day}-${month}-${year} ${this.formatAMPM(date)}`;
    return dateToDisplay;
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

  getMonth(mon) {
    let month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[mon];
  }


}