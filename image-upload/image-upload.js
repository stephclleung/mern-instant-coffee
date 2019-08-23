const fs = require('fs');

const convertImgToBase64String = ({ path }) => {
    try {
        const data = fs.readFileSync(path);
        return new Buffer.from(data).toString('base64');
    } catch (error) {
        return null;
    }

}

const setUploadOption = (reqFile) => {
    const b64string = convertImgToBase64String(reqFile)
    if (!b64string) {
        return null;
    }

    return {
        url: process.env.IMG_UPLOAD_URL,
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
        },
        body: {
            'album': process.env.ALBUM_HASH,
            'image': b64string,
            'type': 'base64',
        },
        json: true
    }

}

const storeImageToDB = async (image) => {
    //Find the file that should already be in the database,
    //update the image to the string.
}

module.exports = {
    setUploadOption,
    storeImageToDB
}