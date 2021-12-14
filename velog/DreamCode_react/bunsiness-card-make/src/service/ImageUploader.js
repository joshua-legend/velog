class ImageUploader{
    async upload(file){

        const data = new FormData();
        data.append('file',file)
        data.append('upload_preset', 'pd')



        return 'file';
    }
}

export default ImageUploader;