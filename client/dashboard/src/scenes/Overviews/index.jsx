import { useState } from "react"
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material"
import Header from "../../components/Header"
import Overviewchart from "../../components/Overviewchart"

const Overview = () => {
  const [view, setView] =useState("units")

  return (
   <Box m="1.5rem 2.5rem">
       <Header title="Overview" subtitle="Overview Of General revenue and profit" />
       <Box height="75vh">
         <FormControl sx={{ mt: "1rem"}} >
            <InputLabel>View</InputLabel>
            <Select value={view} onChange={(e) => setView(e.target.value)}>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">units</MenuItem>
            </Select>
         </FormControl>
         <Overviewchart view={view} />
       </Box>
   </Box>
  )
}

export default Overview
