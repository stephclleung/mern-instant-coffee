
const uploadImage = async () => {
    //at this point :
    // JWt should be verified
    // replications should be verified.

    const options = {
        url: process.env.IMG_UPLOAD_URL,
        method: 'POST',
        headers: {
            'Authorization:': 'Bearer ' + process.env.ACCESS_TOKEN
        },
        body: {
            'image': '',//TODO: replace this,
            'type': '', //replace this
        },
        json: true
    }

    try {
        const res = await axios.post(options);
        return res;

    } catch (error) {
        console.log("Image upload error : ", error);
        return null;
    }
}

const storeImageToDB = async (image) => {
    //Find the file that should already be in the database,
    //update the image to the string.
}

module.exports = {
    uploadImage,
    storeImageToDB
}