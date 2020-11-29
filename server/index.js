const express = require("express")
const graphqlHTTP = require("express-graphql")
// const buildSchema = require('graphql')

const app = express()

const port = process.env.PORT || 5000

app.use("/graphql", graphqlHTTP({}))

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
