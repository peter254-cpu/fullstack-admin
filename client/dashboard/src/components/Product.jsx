import { useState } from "react"
import { Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, } from "@mui/material"

const product = ({_id, name, description, price, rating, category, supply, stat }) => {
    const theme = useTheme()
    const [isExpanded, setIsExpandend] = useState(false)

    return (
        <Card
          sx = {{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.55rem"
          }}
        >
        <CardContent>
          <Typography sx={{ fontSize: 14}} color={theme.palette.secondary[700]} gutterBottom>
                {category}
          </Typography>
          <Typography variant="h5" component="div">
            <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[700]}>
                ${Number(price).toFixed(2)}
            </Typography>
            <Rating value={rating} readOnly />
            <Typography variant="body2">{description}</Typography>
          </Typography>
          <Button variant="primary" size="small" onClick={() => setIsExpandend(!isExpanded)}
        >
        see more
        </Button>
        </CardContent>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{color: theme.palette.neutral[300]}}>
            <Typography>id: {_id}</Typography>
            <Typography>Supply Left: {supply}</Typography>
            <Typography>Yearly Sales This Year: {stat.yearly}</Typography>
            <Typography>Yealy Units sold this year: {stat.yearlyTotalUnits}</Typography>
        </Collapse>
        </Card>
    )
}
export default product