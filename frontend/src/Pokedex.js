import React from 'react'
import { AppBar, Toolbar, Grid, Card,CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px'
    }
})

const getpokemancard = () => {
return(
    <Grid item sm={4}>
        <Card>
            <CardContent>Hello</CardContent>
        </Card>
    </Grid>
)
}
const Pokedex = () => {

    const classes = useStyle()
    return (
        <>
            <AppBar position='static '>
                <Toolbar></Toolbar>
            </AppBar>
            <Grid container spacing={4} className={classes.pokedexContainer}>
               {getpokemancard()} 
               {getpokemancard()} 
               {getpokemancard()} 
               {getpokemancard()} 

            </Grid>

        </>
    )
}

export default Pokedex