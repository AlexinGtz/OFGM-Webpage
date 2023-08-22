import './Footer.css'
import Logo from '../../assets/Imagotipo.png'
import { Button } from '../Button/Button';
import { SocialNetworksData } from '../SocialNetworksData/SocialNetworksData';

const contactInfo = [
    {
        text: '33 1339 2031',
        type: 'Whatsapp',
        clickAction: 'copy',
    },
    {
        text: 'Facebook',
        type: 'Facebook',
        clickAction: 'copy',
    },
    {
        text: 'Instagram',
        type: 'Instagram',
        clickAction: 'copy',
    },
    {
        text: 'contacto.ofgm@gmail.com',
        type: 'Mail',
        clickAction: 'copy',
    }
]

export const Footer = () => {

    return (
        <div className='footerContainer'>
            <div className='footerLogo'>
                <img src={Logo} />
            </div>
            <div className='footerData'>
                <p><b>Recibe un correo sobre los siguientes conciertos</b></p>
                <div className='footerSubscribe'>
                    <input placeholder='Correo Electronico' />
                    <Button text='Subscribirse' />
                </div>
                <p><b>Saludanos</b></p>
                <div className='footerContact'>
                    {contactInfo.map((info) => 
                        (<SocialNetworksData 
                            text={info.text} 
                            type={info.type} 
                            clickAction={info.clickAction}/>)
                    )}
                </div>
                <p><b>Patrocinadores</b></p>
                <div className='footerSponsors'>
                    <img src={Logo} />
                    <img src={Logo} />
                </div>
            </div>

        </div>
    );
}