import { GridColumnMenuContainer, GridFilterAltIcon } from "@mui/x-data-grid"

const CustomColumnMenu = (props) => {
    const [hideMenu, currentColumn, open] = props;
  return (
    <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
    >
    <GridFilterAltIcon onClick = {hideMenu} column = {currentColumn}/>
    
    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu
