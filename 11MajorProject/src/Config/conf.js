const conf={
    APPWRITE_URL:String(import.meta.env.VITE_APPWRITE_URL),
    APPWRITE_ProjectID:String(import.meta.env.VITE_PROJECT_ID),
    APPWRITE_DatabaseID:String(import.meta.env.VITE_DATABASE_ID),
    APPWRITE_CollectionID:String(import.meta.env.VITE_COLLECTION_ID),
    APPWRITE_BucketID:String(import.meta.env.VITE_BUCKET_ID),
}
export default conf;