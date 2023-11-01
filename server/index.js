import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


//data imports
import Affiliatestats from "./models/AffliateStat.js"
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transactions.js";
import  OvarallStat from "./models/OvarallStat.js"
import { dataUser, dataProductStat, dataProduct, dataTransaction, dataOverallStat, dataAffiliateStat } from './data/index.js'


//Configurations
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


//routes
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)


//Database setup
const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
   //await mongoose.connection.db.dropDatabase();
   User.insertMany(dataUser)
   Product.insertMany(dataProduct)
   ProductStat.insertMany(dataProductStat)
   Transaction.insertMany(dataTransaction)
   OvarallStat.insertMany(dataOverallStat)
   Affiliatestats.insertMany(dataAffiliateStat)
}).catch((error) => console.log(`${error} did not connect`))
