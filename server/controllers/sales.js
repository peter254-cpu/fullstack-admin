import OvarallStat from  "../models/OvarallStat.js"


export const getSales = async (req, res) => {
    try {
        const overallStat = await OvarallStat.find();
        res.status(200).json(overallStat[0])
    } catch (error) {
        console.log(error)
    }
}