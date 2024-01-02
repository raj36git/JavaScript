// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.
let data = "Your information:"
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(data);
    }
}

let stu1 = new User("Sri","sri@gmail.com");
let stu2 = new User("Kri","kri@gmail.com");
let stu3 = new User("Pri","pri@gmail.com");

let teach1 = new User("Dri","deanri@gmail.com");
let teach2= new User("Deri","deanri@gmail.com");


// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "data edited";
    }
}

let admin1 = new Admin("admin","admin@gmail.com");