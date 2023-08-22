import { useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { MenuItem } from '../MenuItem/MenuItem'
import './NavBar.css'

const menuItems = [
    {
        menuName: 'Inicio',
        link: '/'
    },
    {
        menuName: 'Conciertos',
        link: '/concerts'
    },
    {
        menuName: 'Musicos',
        link: '/orchestra'
    },
    {
        menuName: 'Contactanos',
        link: '/about'
    }
]

export const NavBar = () => {
    const location = useLocation()

    const isTabActive = (tabLink: string) => {
        const path = location.pathname;
        console.log('PATH', path);
        console.log('TAB', tabLink);
        return path === tabLink
    }
    return (
        <div className='navBarContainer'>
            <img src={Logo} className='navBarLogo' />
            <div className='navBarMenuItems'>
                {menuItems.map((item) => 
                    <MenuItem 
                        text={item.menuName} 
                        to={item.link}
                        active={isTabActive(item.link)}/>
                    )}
            </div>
        </div>
    )
}