{
    type Video = {
        id: string,
        title: string,
        url: string,
        data: string,
    };

    // type VideoMetadata = Pick<Video, 'id' | 'title'>;
    // type VideoMetadata = Omit<Video, 'url' | 'data'>;

    function getVideo(id: string): Video {
        return {
            id : id,
            title: 'video',
            url: 'http://',
            data: 'byte-data...',
        }
    }

    // function getVideoMetadata(id: string): VideoMetadata {
    //     return
    // }




}