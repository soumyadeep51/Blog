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
    async createpost({title,Content, featuredimage, user_id,owner_name}){
        try {
            return await this.database.createDocument(
                  String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                  String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                  ID.unique(),
                  {title,Content,featuredimage,user_id,owner_name}
            )
        }catch(error){
            console.log("Appwrite service :: collection.createpost :: error",error)
        }

    }
    async listallposts(){
        try{
        return await this.database.listDocuments(
            String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
            String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
            [
                
            ]
        )
        }
        catch(error){
            console.log("appwrite service :: collection.listallpost :: error",error)
        }
    }
    async UserPosts(userid){
        try{
            return await this.database.listDocuments(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                [
                   Query.equal("user_id",[userid])
                ]
            ) 
        }catch(error){
               console.log("appwrite service :: collection.getuserpost :: error",error)
        }
    }
    async deletePost(documentId){
        try {
            return await this.database.deleteDocument(
            String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
            String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
            documentId
        )
       }catch(error){
            console.log("appwrite service :: collection.deletePost :: error",error)
       }
    }
    async getCommentsList(postid){
        try{
            return await this.database.listDocuments(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COMMENTS_ID),
                [
                    Query.equal("postid",[postid])
                ]
            )
        }catch(error){
             console.log("Error from collection service.getCommentslist",error)
        }
    }
    async createComment(postid,comment,commentername){
          try{
            return await this.database.createDocument(
              String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
              String(import.meta.env.VITE_APPWRITE_COMMENTS_ID),
              ID.unique(),
              {postid,comment,commentername}
            )
          }catch(error){
               console.log("appwrite service:: postcomment.error :: error ",error)
          }
    }            
}

const  collection=new collection_service()
export default collection