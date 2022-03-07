import React, { useState, useEffect } from 'react'
import { Fade, AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography, TextField, FormHelperText } from '@material-ui/core'
import { makeStyles, alpha } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import MokeData from './MokeData'
import axios from 'axios'


import toFirstCharUppercase from './contans'

const useStyle = makeStyles((theme) => ({
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
    },
    searchContainer: {
        display: 'flex',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        marginTop: '5px',
        marginRight: '20px',
        marginLeft: '20px',
        marginBottom: '5px'
    },
    searchicon: {
        alignSelf: 'flex-end',
        marginLeft: '10px'
    },
    serachInput: {
        width: '300px',
        margin: '5px'
    }

}))




const Pokedex = () => {


    const classes = useStyle()
    const [pokemonData, setPokemanData] = useState({})
    const [filter, setFilter] = useState("")
    const navigate = useNavigate();


const handleSearch=(e)=>{
    setFilter(e.target.value)
}

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
                        sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
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
                <Toolbar>
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchicon} />
                        <TextField className={classes.serachInput} label="Pokemon" variant='standard' onChange={handleSearch} />
                    </div>



                </Toolbar>
            </AppBar>

            {pokemonData ? (<Grid container spacing={4} className={classes.pokedexContainer}>

                {Object.keys(pokemonData).map((pokemonid) =>
                    pokemonData[pokemonid].name.includes(filter) &&
                    getpokemancard(pokemonid))}

            </Grid>) : (<CircularProgress />)}



        </>
    )
}

export default Pokedex