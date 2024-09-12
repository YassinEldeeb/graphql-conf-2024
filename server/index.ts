import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
import express from 'express'
import path from 'path'

const yoga = createYoga({ schema })

const app = express()

// serve the images from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/graphql', yoga)

app.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
    console.info('Images are served at http://localhost:4000/images')
})