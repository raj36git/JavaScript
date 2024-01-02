class students {
  cgpa() {
    console.log("CGPA calculated");
  }
  attende() {
    console.log("Marked present");
  }
  book() {
    console.log("alloted");
  }
  country(ctry){
    this.ctry = ctry;
  }
}
//creating object with the help of class
let aman = new students();
aman.country = "Nepal";
let sri = new students();
sri.country = "Belgium";