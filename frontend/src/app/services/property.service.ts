import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, IntelliTicks } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  // create task service
  createProperty(data: any) {
    return this.http.post(BACKEND_URL + IntelliTicks.createProperty, data);
  }

  // get Task service
  getProperty() {
    return this.http.get(BACKEND_URL + IntelliTicks.getProperty);
  }

  // get Task service
  deleteProperty(propertyId: any) {
    let body = {
      propertyId
    }
    return this.http.delete(BACKEND_URL + IntelliTicks.deleteProperty, { body });
  }
}
