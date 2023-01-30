const Artist = require('../../model/Artist')

const ArtistController = {

    async createArtist(req, res){
        const bodyData = req.body

        try{
            const newArtist = await Artist.create(bodyData)
            return res.status(200).json(newArtist)
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    async getArtist(req, res){
        try{
            const allArtist = await Artist.find()
            return res.status(200).json(allArtist)
        }
        catch(err){
            return res.status(400).json(err)
        }
    }

}

module.exports = ArtistController