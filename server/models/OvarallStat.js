import mongoose from 'mongoose'

const overrallStatSchema = new mongoose.Schema(
   {
    totalCustomer: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,

        }
    ],
    dailyData: [{
        data: String,
        totalSales: Number,
        totalUnits: Number
    }],
    salesByCategory: {
        type: Map,
        of: Number,
        
    }
   }
)

const OverrallStat = mongoose.model("OverrallStat", overrallStatSchema)
export default OverrallStat