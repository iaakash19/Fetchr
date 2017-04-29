import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Observable} from 'rxjs/observable';

@Injectable()
export class AppService {
    //options = new RequestOptions({ withCredentials: true });
    username = "aakash";
    password = "aakash";
    
    authToken = '';
    
    fieldsToDisplay = [
            {field: 'awb', header: 'AWB'},
            {field: 'so_number', header: 'SO NUMBER'},
            {field: 'order_type', header: 'Order type'},
            {field: 'customer_name', header: 'Customer Name'},
            {field: 'driver', header: 'Driver'},
            {field: 'status', header: 'Status'},
            {field: 'client', header: 'Client'},
            {field: 'created_at', header: 'Created At'}     
        ];

    constructor(
        private http: Http
    ) {}
    
    
    fetchToken(): Observable<any> {
         var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

        var creds = "username=" + this.username + "&password=" + this.password;
        
        return this.http.post('http://flms.internal.fetchr.us/api/auth/', creds, {
            headers: headers
        }).map( (res: Response) => {
                return res.json();
        }); 
    }

    fetchData(token) : Observable<any>{
        
        var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', `Token ${token}`);
        let options = new RequestOptions({ headers: headers });

        return this.http.get('http://flms.internal.fetchr.us/api/orders/', options)
                        .map( (res: Response) => res.json());
    }
}