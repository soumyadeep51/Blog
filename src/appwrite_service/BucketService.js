import { Client,ID,Storage } from "appwrite";
 class  BucketService{
    storage;
    constructor(){
        const client=new Client()
        .setEndpoint(String(import.meta.env.VITE_APPWRITE_URL))
        .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID))
         this.storage=new Storage(client)
    }
    async uploadImage(file){
        try{
            return await this.storage.createFile(
                String(import.meta.env.VITE_APPWRITE_IMAGES_BUCKET_ID),
                ID.unique(),
                file
            )
        }catch(error){
            console.log("appwrite service :: BucketService.upload :: error",error);
            
        }
    }
    async getImage(file_id){
        try {
            const image= await this.storage.getFileView(String(import.meta.env.VITE_APPWRITE_IMAGES_BUCKET_ID),file_id)
            return image.href
        } catch (error) {
            console.log("appwrite service :: getimage ::error ",error)       
        }
    }
}

const imageservice=new BucketService()
export default imageservice