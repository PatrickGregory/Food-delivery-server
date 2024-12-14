const cloudinary = require('cloudinary');

    // Configuration
    cloudinary.config({ 
        cloud_name: 'digojpxzf', 
        api_key: '252815851582887', 
        api_secret: 'DJfLW-yrCOcCAZyXza_e89YpR_Y' // Click 'View API Keys' above to copy your API secret
    });

    const ImageUpload = async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.files.image.path)
            res.json({
                url: result.secure_url,
                public_id: result.public_id
            })
        }catch (error) {
            console.log(error)
        }
    }

    module.exports = {ImageUpload};

