import mongoose from 'mongoose'

const productsStatSchema = new mongoose.Schema(
    {
        productId: String,
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
        dailyData: [ {
            data: String,
            totalSales: Number,
            totalUnits: Number
        }]
    },
    {timestamps : true}
)

const ProductStat = mongoose.model("ProductStat", productsStatSchema)
export default ProductStat