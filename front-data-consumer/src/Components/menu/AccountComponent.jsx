import { Divider, Popover, Stack, Typography } from "@material-ui/core"
import { AccountCircle, AccountCircleOutline } from "mdi-material-ui"
import React, { useState } from "react"
import { useLocalStorage } from "react-use"

const AccountComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <AccountCircleOutline
                sx={{
                    color: 'white',
                    width: '31px',
                    height: '31px',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#F2F4FE'
                    }
                }}
                title='Mon profil'
                onClick={handlePopoverOpen}
            />
            <Popover
                id='profil'
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
            >
                <PopoverContent />
            </Popover>
        </>
    )
}

const PopoverContent = (props) => {
    const [user] = useLocalStorage('user')

    return (
        <>
            <Stack style={{ padding: '16px 24px' }} spacing={2} align='center'>
                <AccountCircle
                    sx={{
                        width: '95px',
                        height: '55px'
                    }}
                />
                <Stack align='center'>
                    <Typography variant='subtitle2' color='textSecondary'>{user}</Typography>
                </Stack>
                <Divider flexItem sx={{ height: '1px', marginRight: '-24px', marginLeft: '-24px' }} />
                <Typography variant='subtitle2' color='textSecondary'>35/50 calls api</Typography>
            </Stack>
        </>
    )
}

export default AccountComponent
