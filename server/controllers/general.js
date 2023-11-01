import { connect } from 'mongoose'
import User from '../models/User.js'
import OverallStat from "../models/OvarallStat.js"
import Transaction from "../models/Transactions.js"

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDashboardStats = async (req, res) => {
    try {
        //hardCoded values
        const currentMonth = "November";
        const currentYear = "2021";
        const currentDay = "2021-11-15";

        //Recent Transactions
        const transaction = await Transaction.find().limit(50).sort({createdOn: -1})

        //OverrallStats
        const overrallStat = await OverallStat.find({ year: currentYear})

        const {
            totalCustomer,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory

        } = overrallStat[0]

        const thisMonthStats = overrallStat[0].monthlyData.find(({ month }) => {
            return month === currentMonth
        })
        const totalStats = overrallStat[0].dailyData.find(({ date }) => {
            return date === currentDay
        })

        res.status(200).json({ totalCustomer, yearlyTotalSoldUnits, yearlySalesTotal, monthlyData, salesByCategory, thisMonthStats, totalStats })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
