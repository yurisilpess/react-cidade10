import React from 'react'
import {Sidebar, Menu, MenuItem, SubMenu, sidebarClasses} from 'react-pro-sidebar'

const Side = () => {
  return (
    <Sidebar>
        <Menu>
            <SubMenu label="dashboard">
                <MenuItem>Home</MenuItem>
                <MenuItem>Exemplo1</MenuItem>
                <MenuItem>Exemplo2</MenuItem>
            </SubMenu>
        </Menu>
    </Sidebar>
  )
}

export default Side