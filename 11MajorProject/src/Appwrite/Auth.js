import conf from "../Config/conf.js"
import {Client, Account, ID} from "appwrite"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.APPWRITE_URL).setProject(conf.APPWRITE_ProjectID);
        this.account= new Account(this.client);
    }
    async create({email,password,name}){
        try {
            const user=await this.account.create(ID.unique(),email,password,name);
            if(user){
                //call another method which will be login
                this.login({email,password})
            }else{
                return user;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async currentUser(){
        try {
            return await  this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
};

const authService= new AuthService();
export default authService;