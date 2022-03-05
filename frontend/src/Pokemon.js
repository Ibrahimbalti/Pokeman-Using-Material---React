import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MokeData from './MokeData'
import toFirstCharUppercase from './contans'
import { CardMedia, Typography } from '@material-ui/core'
const Pokemon = () => {
    const { pokemonid } = useParams()
    const [pokemon, setPokemondata] = useState(MokeData[`${pokemonid}`])
    const generatePokemons = () => {
        const { name, id, species, types, height, width, sprites } = pokemon
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites

        return (
            <>
                <Typography variant='h1'>
                    {`${id}.`}{`${toFirstCharUppercase(name)}`}
                    <img src={front_default} />
                </Typography>
                <img src={front_default} style={{ height: '300px', width: '300px' }} />
                <Typography variant='h3'>Pokemon Info</Typography>
                <Typography>{"species :"}
                    <Link to={species.url} >{species.name}</Link>
                </Typography>
                <Typography>Height :{height}</Typography>
                <Typography>Width :{width}</Typography>
                <Typography>Type:</Typography>


                {types.map((typeinfo) => {
                    const { type }=typeinfo;
                const {name}=type ;
                return <Typography key="name">{`${name}`}</Typography>
                    })}

            </>
        )
    }
    return <>{generatePokemons()}</>


}

export default Pokemon