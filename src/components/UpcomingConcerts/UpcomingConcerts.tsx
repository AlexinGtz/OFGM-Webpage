import { ConcertCard } from '../ConcertCard/ConcertCard';
import './UpcomingConcerts.css'

export const UpcomingConcerts = () => {

    return (
        <div className='upcomingConcertsContainer'>
            <h1>Proximos Conciertos</h1>
            <ConcertCard />
        </div>
    );
}