import { Account, Client, ID } from "appwrite"

export class AuthService {
       client= new Client()
       account
       constructor() {
          this.client.setEndpoint(String(import.meta.env.VITE_APPWRITE_URL))
                     .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID))
           this.account=new Account(this.client);
       }
       async createuser({email,password,name}){
             try {
             return await this.account.create(ID.unique(),email, password, name) 
             } catch (error) {
               console.log("Appwrite :: auth.createuser :: error ",error);
             } 
             
       }
       async login({email,password}){
              try {
                     const result= await this.account.createEmailPasswordSession(email,password)
                     
                     
                     return result;
              } catch (error) {
                     console.log("appwrite :: auth.login :: error ",error);
                     
                     
              }
       }
       async logout(){
              try {
                     return await this.account.deleteSession('current')
              } catch (error) {
                     console.log("appwrite :: auth.logout :: error ",error);
                     
              }
       }
       async getcurrentuser(){
                let name=null
                try {
                     const result=await this.account.get()
                     name=result.name
                }catch(error){
                        name=null
                } 
               ///console.log(name);
                
                return name 
       
              }
}
export const authservice=new AuthService()
/*export const client= new Client()
client.setEndpoint("https://cloud.appwrite.io/v1")
       .setProject("66f430a7002f5a309f6e")
export const account=new Account(client)
export {ID} from 'appwrite'*/