
const app = require('express')();
const PORT = 8080;

app.listen( //fire up the server
    PORT, //port
    () => console.log(`Server listening on port ${PORT}`) //callback: to know when the server is up
)

app.get('/sticker' , (req, res) => { //handler for the /sticker route
   res.status(200).send({
        sicker:'🔖',
        size: 'medium'
   }); //send a sticker
});

app.post('/sticker/:id', (req, res) => { //handler for the /sticker/:id route
    const { id } = req.params; //get the id from the url
    const { drawing } = req.body; //get the drawing from the body

    if (!drawing) {
        res.status(400).send({
            error: 'Missing drawing'
        });
    }

    res.send({
        sticker: '🔖 with your drawing ${drawing} and ID ${id}',
    })
});