import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import Note from './modelOfNote';


const app = express()
const port = process.env.PORT || 5000
const dbUrl = process.env.MONGODB_URI

// app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbUrl, dbErr => {
  if (dbErr) throw new Error(dbErr)
  else console.log('db connected')

  app.post('/api/notes', (request, response) => {
    const { title, code, language, tags } = request.body

    new Note({
      name,
      age,
    }).save(err => {
      if (err) response.status(500)
      else {
        Note.find({}, (findErr, characterArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(characterArray)
        })
      }
    })
  })

  // app.get('/api/characters', (request, response) => {
  //   Character.find({}, (err, characterArray) => {
  //     if (err) response.status(500).send()
  //     else response.status(200).send(characterArray)
  //   })
  // })
  //
  // app.put('/api/characters', (request, response) => {
  //   const { id } = request.body
  //   Character.findByIdAndUpdate(id, { $inc: {"age": 1} }, err => {
  //     if (err) response.status(500).send()
  //     else {
  //       Character.find({}, (findErr, characterArray) => {
  //         if (findErr) response.status(500).send()
  //         else response.status(200).send(characterArray)
  //       })
  //     }
  //   })
  // })
  //
  // app.delete('/api/characters', (request, response) => {
  //   const { id } = request.body
  //   Character.findByIdAndRemove(id, err => {
  //     if (err) response.status(500).send()
  //     else {
  //       Character.find({}, (findErr, characterArray) => {
  //         if (findErr) response.status(500).send()
  //         else response.status(200).send(characterArray)
  //       })
  //     }
  //   })
  // })

  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})
