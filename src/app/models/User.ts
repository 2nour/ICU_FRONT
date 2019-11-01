export class User {
   
   

    constructor( private _username ?:string, 
         
        private _email?: string,
        private _password?:string) {}


        get username(){return this._username;}
        set username(username:string){this._username=username;}

        
        get email(){return this._email;}
        set email(email:string){this._email=email;}

        
        get password(){return this._password;}
        set password(password:string){this._password=password;}



}