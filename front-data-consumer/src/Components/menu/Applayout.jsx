import React, { memo } from "react"
import { AppBar, Toolbar, Box } from '@material-ui/core'
import AppRoutes from "./AppRoutes"
import MenuBurger from "./MenuBurger"

const Applayout = memo(() => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuBurger />
            API
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <main>
        <AppRoutes />
      </main>
      
    </Box>
  )
})

export default Applayout
