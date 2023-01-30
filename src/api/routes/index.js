const { Router } = require('express')
const routes = Router()

const ArtistController = require('../controller/ArtistController')

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/artist', ArtistController.createArtist)
routes.get('/artist', ArtistController.getArtist)


module.exports = routes