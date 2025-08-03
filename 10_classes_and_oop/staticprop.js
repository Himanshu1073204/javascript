class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}
const hitesh = new User("Hitesh")
//console.log(hitesh.createId())

class teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@123.com")
iphone.logMe()


