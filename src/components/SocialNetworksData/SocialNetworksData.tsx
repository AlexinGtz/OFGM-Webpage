import './SocialNetworksData.css'
import WhatsLogo from '../../assets/WhatsLogo.svg'
import FaceLogo from '../../assets/FaceLogo.svg'
import InstaLogo from '../../assets/InstaLogo.svg'
import MailLogo from '../../assets/MailLogo.svg'

export type SocialNetworksDataProps = {
    text: string
    type: string
    clickAction?: string
}

const mapTypeToLogo = (type: string) => {
    switch(type) {
        case 'Whatsapp': 
            return WhatsLogo
        case 'Facebook': 
            return FaceLogo
        case 'Instagram': 
            return InstaLogo
        case 'Mail': 
            return MailLogo
    }
}

export const SocialNetworksData = (props: SocialNetworksDataProps) => {
    return (
        <div className='socialNetworksContainer'>
            <img src={mapTypeToLogo(props.type)} className='socialNetworksLogo' />
            <p className='socialNetworksText'>{props.text}</p>
        </div>
    );
}