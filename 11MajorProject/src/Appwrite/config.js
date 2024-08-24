import conf from "../Config/conf"
import {Client, Account,ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client=  new Client(conf.APPWRITE_URL).setProject(conf.APPWRITE_ProjectID);
        this.databases= new Databases(this.client);
        this.bucket= new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.APPWRITE_DatabaseID,
                conf.APPWRITE_CollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }
    async update(slug,{title,content,featuredImage,status}){
        try {
            return  await this.databases.updateDocument(
                conf.APPWRITE_DatabaseID,
                conf.APPWRITE_CollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }
    async delete(slug){
        try {
            return await this.databases.deleteDocument(
                conf.APPWRITE_DatabaseID,
                conf.APPWRITE_CollectionID,
                slug
            )
            return true;
        } catch (error) {
            return false;
        }
    }
    async  getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.APPWRITE_DatabaseID,
                conf.APPWRITE_CollectionID,
                slug
            )
        } catch (error) {
            return false;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DatabaseID,
                conf.APPWRITE_CollectionID,
                queries
            )
        } catch (error) {
            console.log()
        }
    }

    async UploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.APPWRITE_BucketID,
                ID.unique(),
                file,

            )
        } catch (error) {
            console.log("Appwrite service :: upload file:: ", error);
            return false;
            
        }
    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.APPWRITE_BucketID,
                fileId
            )
            return true;
        }catch(error){
            throw error;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.APPWRITE_BucketID,
            fileId
        )
    }
}



const service= new Service();
export default service;