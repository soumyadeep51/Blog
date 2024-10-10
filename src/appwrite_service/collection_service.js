import {Client,Databases,ID, Query} from 'appwrite'
export class collection_service{
     client=new Client()
     database
    constructor(){
                        this.client                        
                        .setEndpoint(String(import.meta.env.VITE_APPWRITE_URL))
                        .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID))
                        this.database=new Databases(this.client)
                    }
    async createpost({title,content, image, userId}){
        return await this.database.createDocument(
                  String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                  String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                  ID.unique(),
                  {title,content,image,userId}
            )

    }
    async listallposts(){
        return await this.database.listDocuments(
            String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
            String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
            [
                Query.equal("status",["active"])
            ]
        )
    }                
}

const  collection=new collection_service()
export default collection