import React from 'react'
import { Image } from '../Interface/Gifs'

export const GifGridItem = (props: GifGridItemProps) => {

    return (
        <div className='card animate__animated  animate__fadeIn'>
            <img src={props.imagen.url} alt={props.imagen.title} />
            <p>{props.imagen.title}</p>
        </div>
    )
}

interface GifGridItemProps{
    imagen: Image
}


