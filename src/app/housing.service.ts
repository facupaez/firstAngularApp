import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private url = 'http://localhost:3000/locations';

  constructor() { }

  readonly baseUrl = 'https://cdn.prod.website-files.com';

 /*  housingLocationList: HousingLocation[] = [
    { id: 0, name: 'Acme Fresh Start Housing', city: 'Chicago', state: 'IL', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 4, wifi: true, laundry: true, },
    { id: 1, name: 'A113 Transitional Housing', city: 'Santa Monica', state: 'CA', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 0, wifi: false, laundry: true, },
    { id: 2, name: 'Warm Beds Housing Support', city: 'Juneau', state: 'AK', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 1, wifi: false, laundry: false, },
    { id: 3, name: 'Homesteady Housing', city: 'Chicago', state: 'IL', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 1, wifi: true, laundry: false, },
    { id: 4, name: 'Happy Homes Group', city: 'Gary', state: 'IN', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 1, wifi: true, laundry: false, },
    { id: 5, name: 'Hopeful Apartment Group', city: 'Oakland', state: 'CA', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 2, wifi: true, laundry: true, },
    { id: 6, name: 'Seriously Safe Towns', city: 'Oakland', state: 'CA', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 5, wifi: true, laundry: true, },
    { id: 7, name: 'Hopeful Housing Solutions', city: 'Oakland', state: 'CA', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 2, wifi: true, laundry: true, },
    { id: 8, name: 'Seriously Safe Towns', city: 'Oakland', state: 'CA', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 10, wifi: false, laundry: false, },
    { id: 9, name: 'Capital Safe Towns', city: 'Portland', state: 'OR', photo: `${this.baseUrl}/618bd2cc37f1e4994c09150a/620a97320357672ef8287e38_Open%20graph%20preview%402x-100.jpg`, availableUnits: 6, wifi: true, laundry: true, },
  ]; */

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Application submitted for ${firstName} ${lastName} with email ${email}`);
  }
}
