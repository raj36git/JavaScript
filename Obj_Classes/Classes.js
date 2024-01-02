class students {
  constructor(country,lang){
    this.country = country;
    this.lang = lang;
  }
  cgpa() {
    console.log("CGPA calculated");
  }
  attende() {
    console.log("Marked present");
  }
  book() {
    console.log("alloted");
  }
  // country(ctry){
  //   this.ctry = ctry; //we can directly write a constructor for it
  // }
}
//creating object with the help of class
let aman = new students("Nepal","Nepali");
// aman.country = "Nepal";
console.log(aman);
let sri = new students("Belgium","Portugese");
// sri.country = "Belgium";