import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private locations: string[] = [
    "SAMTREDIA",
    "KUTAISI",
    "KUTAISI_INTERNATIONAL_AIRPORT"
  ];

  getLocations(): string[] {
    return this.locations;
  }

  constructor() { }
}
