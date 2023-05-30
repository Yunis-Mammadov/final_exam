const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const ServerSchema = new mongoose.Schema({
    imageURL: String,
    name: String,
    description: String
})

const ServerModel = new mongoose.model("server", ServerSchema)

app.get("/server", async(req, res) => {
    const { name } = req.query
    const server = await ServerModel.find(name)
    res.status(200).send(server)
})

app.get("/server/:id", async(req, res) => {
    const { id } = req.params
    const server = await ServerModel.findById(id)
    res.status(200).send(server)
})

app.delete("/server/:id", async(req, res) => {
    const id = req.params.id
    const server = await ServerModel.findByIdAndDelete(id)
    res.status(203).send({
        message: `${server} deleted successfully!`
    })
})

app.post("/server", async(req, res) => {
    const { imageURL, name, description } = req.body
    const newServer = new ServerModel({
        imageURL: imageURL,
        name: name,
        description: description 
    })
    await newServer.save()
    res.status(201).send({
        message: `${newServer} posted successfully!`
    })
})

PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect("mongodb+srv://yunis_admin:Admin123@author.osk3d9z.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Mongo DB connected !");
})