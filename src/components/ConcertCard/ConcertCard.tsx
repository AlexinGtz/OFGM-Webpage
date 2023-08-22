import { Button } from '../Button/Button';
import ConcertImage from '../../assets/ConcertCard1.png'
import './ConcertCard.css'
import { useNavigate } from 'react-router-dom';

export const ConcertCard = () => {
    const navigate = useNavigate()

    return (
        <div className='concertCardContainer'>
            <div className='concertCardImageContainer'>
                <img src={ConcertImage} className='concertCardImage' />
            </div>
            <div className='concertCardInfo'>
                <p className='concertCardDate'>28 y 31 de Julio</p>
                <p className='concertCardName'>Concierto de Pelicula</p>
                <p className='concertCardComposer'><b>Wolfgang Amadeus Mozart</b> Obertura de la flauta Magica</p>
                <p className='concertCardComposer'><b>Johaness Brahms</b> Danza Hungara No. 3</p>
            </div>
            <div className='concertCardButton'>
                <Button text='Ver Concierto' onClick={() => { navigate('/concert/12234') }} />
            </div>
        </div>
    );
}