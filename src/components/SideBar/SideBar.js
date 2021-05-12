import React, {useContext, useState} from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import { productsContext } from '../../contexts/ProductsContext';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    }
  }))

const SideBar = ({ history }) => {
    const classes = useStyles();
    const { getProductsData } = useContext(productsContext)
    const [sliderValue, setSliderValue] = useState([0, 20000])
    const [genre, setGenre] = useState((getGenre()))
    const [checkedGenre, setcheckedGenre] = useState({
        actions: false,
        rpg: false,
        strategy: false,
        all: false,
      });

    function getGenre() {
        const search = new URLSearchParams(history.location.search)
        return search.get('category')
    }

    function getSlider() {
            const search = new URLSearchParams(history.location.search)
            return search.get('price_lte')
    }

    const handleChangeGenre = async (event) => {
        if(event.target.value === "all") {
            await history.push(`${history.location.pathname.replace('category')}`)
            getProductsData(history)
            return
        }
        const search = new URLSearchParams(history.location.search)
        await search.set('category', event.target.value)
        await history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData(history)
        setGenre(event.target.value)
    }

        async function handleSliderValue(e, value) {
        console.log(e, value)
        // const search = new URLSearchParams(history.location.search)
        // await search.set('price_lte', value)
        await history.push(`${history.location.pathname}?_limit=8&price_gte=${value[0]}&price_lte=${value[1]}`)
        getProductsData(history)
            setSliderValue(value)
    }
    
    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Жанры</FormLabel>
            <RadioGroup value={genre} onChange={handleChangeGenre} aria-label="genre" name="genre1">
                <FormControlLabel value="Книги" control={<Radio />} label="Книги" name="actions"/>
                <FormControlLabel value="Аксессуары" control={<Radio />} label="Аксессуары" name="rpg"/>
                <FormControlLabel value="Одежда" control={<Radio />} label="Одежда" name="strategy"/>
                <FormControlLabel value="all" control={<Radio />} label="All" name="all"/>
            </RadioGroup>

            {/* <RadioGroup value={memory} onChange={handleChangeMemory} aria-label="memory" name="memory1">
                <FormControlLabel value="Экшены" control={<Radio />} label="Экшены" />
                <FormControlLabel value="РПГ" control={<Radio />} label="РПГ" />
                <FormControlLabel value="Стратегии" control={<Radio />} label="Стратегии" />
                <FormControlLabel value="512" control={<Radio />} label="512GB" />
                <FormControlLabel value="1024" control={<Radio />} label="1024GB" />
                <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup> */}
            </FormControl>

               <Grid>
                   <Slider
                       value={sliderValue}
                       min={500}
                       max={20000}
                       onChange={handleSliderValue}
                       valueLabelDisplay="auto"
                       aria-labelledby="range-slider"
                   />
               </Grid>


            </Paper>
        </Grid>
    );
};

export default SideBar;