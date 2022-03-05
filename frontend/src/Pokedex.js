import React, { useState } from 'react'
import { AppBar, Toolbar, Grid, Card,CardContent,CircularProgress,CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import MokeData from './MokeData'

import toFirstCharUppercase from './contans'

const useStyle = makeStyles({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    CardMedia:{
        margin:'auto'
    },

    CardContent:{
        textAlign:'center'
    }
})




const Pokedex = () => {

    const classes = useStyle()
    const [pokemonData,setPokemanData] =useState(MokeData)
    const navigate = useNavigate();
    

    const getpokemancard = (pokemonid) => {
        const {id,name}=pokemonData[`${pokemonid}`]
        const sprites=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
        <Grid item sm={4} key={pokemonid}>
            <Card onClick={()=>navigate ((`/${pokemonid}`))}>
                <CardMedia className={classes.CardMedia} image={sprites} style={{width:'130px',height:'130px'}}/>
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
       
            { pokemonData ? (<Grid container spacing={4} className={classes.pokedexContainer}>
                
                {Object.keys(pokemonData).map((pokemonid)=>getpokemancard(pokemonid))} 
 
             </Grid>) : (<CircularProgress/>)}

            

        </>
    )
}

export default Pokedex