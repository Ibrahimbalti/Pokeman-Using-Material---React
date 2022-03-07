import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import MokeData from './MokeData'
import axios from 'axios'

import toFirstCharUppercase from './contans'

const useStyle = makeStyles({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    CardMedia: {
        margin: 'auto'
    },

    CardContent: {
        textAlign: 'center'
    }
})




const Pokedex = () => {

    const classes = useStyle()
    const [pokemonData, setPokemanData] = useState({})
    const navigate = useNavigate();
    
    

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=80`)
          .then(function (response) {
            const { data } = response;
            const { results } = data;
            const newPokemonData = {};
            results.forEach((pokemon, index) => {
              newPokemonData[index + 1] = {
                id: index + 1,
                name: pokemon.name,
                sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`,
              };
            });
            setPokemanData(newPokemonData);
          });
      }, []);

    const getpokemancard = (pokemonid) => {
        const { id, name, sprites } = pokemonData[pokemonid]

        return (
            <Grid item sm={4} key={pokemonid}>
                <Card onClick={() => navigate((`/${pokemonid}`))}>
                    <CardMedia className={classes.CardMedia} image={sprites} style={{ width: '130px', height: '130px' }} />
                    <CardContent className={classes.CardContent}><Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography></CardContent>
                </Card>
            </Grid>
        )
    }



    return (
        <>
            <AppBar position='static '>
                <Toolbar></Toolbar>
            </AppBar>

            {pokemonData ? (<Grid container spacing={4} className={classes.pokedexContainer}>

                {Object.keys(pokemonData).map((pokemonid) => getpokemancard(pokemonid))}

            </Grid>) : (<CircularProgress />)}



        </>
    )
}

export default Pokedex