import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transactions.js";
import getCountryISO3 from "country-iso-2-to-3"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        const productswithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return{
                    ...product._doc,
                    stat
                }
            })
            
        )
        res.status(200).json(productswithStats)
    } catch (error) {
        console.log(error)
    }
}

export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({role: "user"}).select("-password");
        res.status(200).json(customers)
    } catch (error) {
        console.log(error)
    }
}

export const getTransactions = async (req, res) => {
    try {

        //sort should look like: {"field": "userId", "sort", "desc"}
        const {page = 1, pageSize = 20, sort = null, search = ""} = req.query
        const gernerateSort = () => {

            //formatted sort should look {userd: -1}
            const sortParsed = JSON.parse(sort)
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
            };
            return sortFormatted
        }
        const sortFormatted = Boolean(sort) ? gernerateSort() : {};

        const transactions = await Transaction.find({
            $or: [
                {cost:  { $regex: new RegExp(search, "i")}},
                {userId:  { $regex: new RegExp(search, "i")}},
            ],
        })

        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize)

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i"}
        });

        res.status(200).json({
            transactions,
            total
        })
    } catch (error) {
        console.log(error)
    }
}

export const getGeography = async (req, res) => {
    try {
        const users = await User.find()

        const mappedLocations = users.reduce((acc, {country}) => {
            const countryISO3 = getCountryISO3(country);
            if(!acc[countryISO3]){
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++
            return acc
        }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
        ([country, count]) =>  {
            return {
                id: country,
                value: count
            }
        }
    )
    res.status(200).json(formattedLocations)
    } catch (error) {
        console.log(error)
    }
}