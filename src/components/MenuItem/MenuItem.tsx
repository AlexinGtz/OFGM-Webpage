import './MenuItem.css'
import { NavLink } from 'react-router-dom'

export type MenuItemProps = {
    text: string
    to: string
    active: boolean
}

export const MenuItem = (props: MenuItemProps) => {
    const activeClass = props.active ? 'active' : ''

    return (
        <NavLink className={`menuItemContainer ${activeClass}`} to={props.to}>
            <p className='menuItemText'>{props.text}</p>
        </NavLink>
    );
}