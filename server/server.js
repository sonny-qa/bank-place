import bodyParser from 'body-parser'
import express from 'express'

import path from 'path'

//get the built react project
const staticFiles = express.static(path.join(__dirname,'../../client/build'))

//pass the static files (react app) to the express app
app.use(staticFiles)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const router = express.Router()

router.get('/cities',(req,res) => {
	const cities =[
	{name: 'New york',population: 7464764},
	{name: 'Los Angeles', population: 3792621},
    {name: 'Chicago', population: 2695598}
    ]

    res.json(cities)
})

app.use(router)

app.use('/*',staticFiles)

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), () => {
	 console.log(`Listening on ${app.get('port')}`)
})