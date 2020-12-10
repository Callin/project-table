export class Person {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  greeting: string;
  favoriteFruit: string;

  // properties in JavaScript start existing only after they have some value. Needed in the table component
  constructor() {
    this._id = '';
    this.index = 0;
    this.guid = '';
    this.isActive = true;
    this.balance = '';
    this.age = 0;
    this.eyeColor = '';
    this.firstName = '';
    this.lastName = '';
    this.company = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.about = '';
    this.registered = '';
    this.latitude = 0;
    this.longitude = 0;
    this.greeting = '';
    this.favoriteFruit = '';
  }
}
