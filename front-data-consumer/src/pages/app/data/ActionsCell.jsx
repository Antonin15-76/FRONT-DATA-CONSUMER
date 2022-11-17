import { ListItemIcon, ListItemText, MenuItem } from "@material-ui/core"
import { Pencil, Delete } from 'mdi-material-ui'
import useDialog from '../../../Components/hooks/useDialog'
import Actions from '../../../Components/button/Actions'

const ActionsCell = (props) => {
    const { row } = props
    const editDialog = useDialog(false)
    const deleteDialog = useDialog(false)

    return (
        <>
          <Actions>
            <MenuItem onClick={editDialog.handleOnClick}>
              <ListItemIcon><Pencil color='primary' /></ListItemIcon>
              <ListItemText
                primary='Modifier'
              />
            </MenuItem>
            <MenuItem color='error' onClick={deleteDialog.handleOnClick}>
              <ListItemIcon><Delete color='error' /></ListItemIcon>
              <ListItemText primary='Supprimer' />
            </MenuItem>
          </Actions>
        </>
    )
}

export default ActionsCell
