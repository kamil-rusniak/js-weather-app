class Storage {
  constructor() {
    this.city;
    this.defaultCity = "Lublin";
  }

  getLocation() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    return {
      city: this.city,
    };
  }

  changeLocation(city) {
    localStorage.setItem("city", city);
  }
}
