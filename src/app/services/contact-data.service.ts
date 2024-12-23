import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  private contactData = {
    email: "info@example.com",
    phoneNumber: "+995 599 123 456"
  };

  public getNumber(): string {
    return this.contactData.phoneNumber;
  }

  public getEmailAddress(): string {
    return this.contactData.email;
  }

  constructor() { }
}
