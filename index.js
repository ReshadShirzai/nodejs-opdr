import express from "express"
const app = express()
const port = 3000

let increment = 1;
let counter = 0;

app.get('/counter', (request, response) => {
    if (request.query.incrementby) {
        increment = Number( request.query.incrementby );
    }
    counter = counter + increment;
  response.send('Total: ' + counter)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})