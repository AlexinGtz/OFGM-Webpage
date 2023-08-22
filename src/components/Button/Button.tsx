import { MouseEventHandler } from 'react'
import './Button.css'

export type ButtonProps = {
    text: string
    expand?: boolean
    showChevron?: boolean
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const Button = (props: ButtonProps) => {
    const expandClass =  props.expand ? 'buttonExpand' : 'buttonGrow';
    return(
        <div className={`buttonContainer ${expandClass}`} onClick={props.onClick}>
            <p className='buttonText'>{props.text}</p>
            {props.showChevron && 
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            }
        </div>
    )
}