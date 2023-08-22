import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { UpcomingConcerts } from '../../components/UpcomingConcerts/UpcomingConcerts'
import './MainPage.css'

export const MainPage = () => {
    const navigate = useNavigate()
    return (
        <div className="mainPageContent">
            <div className='mainPageImageAndText'>
                <div className='mainPageAppear'>
                    <div className='mainPageInfoText'>
                        <h1>Orquesta Filarmonica Gustav Mahler</h1>
                        <p>Somos una orquesta que busca promoverla musica academica dentro y fuera de la ZMG. Dandole la oportunidad a los musicos locales de poderse desarrollar en este ambito.
                        Nuestra meta es Acercar a las personas a la belleza de la musica academica.</p>
                    </div>
                    <div className='mainPageButton'>
                        <Button
                            text='Conciertos'
                            expand={true}
                            onClick={() => {navigate('/concerts')}}
                            showChevron
                            
                        />
                    </div>
                </div>
            </div>
            <UpcomingConcerts />
        </div>
    )
}