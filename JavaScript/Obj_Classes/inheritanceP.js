class Dean{
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    dance() {
        console.log("dance");
    }
    read() {
        console.log("read");
    }
}

class Engineer extends Dean{
    work(){
        console.log("solve problems");
    }
}

let engObj = new Engineer();