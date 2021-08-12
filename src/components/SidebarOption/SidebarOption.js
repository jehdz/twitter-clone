import React from 'react'
import './sidebarOption.css'

function SidebarOption({active, text, Icon }) {
    return (

        <div className={`sideBarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2> {text} </h2>
        </div>

    );
}

export default SidebarOption;