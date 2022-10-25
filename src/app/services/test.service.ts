
export class TestService {

    message= "Hello From Service"

    getMessage(){
    return this.message;
    }


    setNewMessage(){
        this.message = "New Message";
    }

}