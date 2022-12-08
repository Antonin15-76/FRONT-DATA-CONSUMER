import { IconButton, ListItemIcon, ListItemText, MenuItem } from "@material-ui/core"
import { forwardRef, Fragment, useMemo } from "react"
import { Link } from "react-router-dom"
import Home from "../../pages/app/data"
import Map from "../../pages/app/map"
import Infos from "../../pages/app/infos"

const navItems = [
    { label: 'Accueil', to: '/app/infos', Icon: Infos, hasDivider: true },
    { label: 'Données', to: '/app/data', Icon: Home, hasDivider: true },
    { label: 'Map', to: '/app/map', Icon: Map, hasDivider: true },
]

const useNavigationItems = () => {
    return useMemo(() => {
        return navItems.filter(navItem => {
            if (!navItem.authorizedItems || navItem.authorizedItems.length === 0) return true
        })
    }, [])
}

const NavItems = () => {
    const navigationItemsToUse = useNavigationItems()
  
    return (
        navigationItemsToUse.map(navItem => {
          const LinkTo = forwardRef((props, ref) =>
          <Link {...props} ref={ref} to={navItem.to} />
        )
          const Icon = navItem.Icon || null
        return (
            <Fragment key={navItem.to}>
                <MenuItem key={navItem.label} component={LinkTo}>
                    {Icon && <ListItemIcon><IconButton /></ListItemIcon>}
                    <ListItemText>{navItem.label}</ListItemText> 
                </MenuItem>
            </Fragment>
            )
        })  
    )
  }

  export default NavItems