import mongoose from 'mongoose'

const AffiliateStatSchema = new mongoose.Schema(
    {
       userId : { type: mongoose.Types.ObjectId, ref: "User"},
       affliateSales: {
        type: [mongoose.Types.ObjectId],
        ref: "Transaction"
       }
    },
    {timestamps : true}
)

const Affiliatestat = mongoose.model("Affiliatestat", AffiliateStatSchema)
export default Affiliatestat