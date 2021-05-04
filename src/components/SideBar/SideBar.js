import React, {useContext, useState} from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import { productsContext } from '../../contexts/ProductsContext';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { Link } from 'react-router-dom';

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
    // const [sliderValue, setSliderValue] = useState([getSliderMin(), getSliderMax()])
    const [sliderValue, setSliderValue] = useState([0,20000])
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

    // function getSliderMin() {
    //         const search = new URLSearchParams(history.location.search)
    //         return search.get('price_lte')
    // }

    // function getSliderMax() {
    //         const search = new URLSearchParams(history.location.search)
    //         return search.get('price_gte')
    // }

    const handleChangeGenre = async (event) => {
        if(event.target.value === "all") {
            await history.push(`${history.location.pathname.replace('category')}`)
            getProductsData(history)
            return
        }
        const search = new URLSearchParams(history.location.search)
        if(search.has('category', event.target.value)){
            await search.delete('category', event.target.value)
            await history.push(`${history.location.pathname}?${search.toString()}`)
            getProductsData(history)
            setGenre(event.target.value)
            return
        } else if(search.has('category')) {
            await search.append('category', event.target.value)
            await history.push(`${history.location.pathname}?${search.toString()}`)
            getProductsData(history)
            setGenre(event.target.value)
            return
        }
        await search.set('category', event.target.value)
        await history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData(history)
        setGenre(event.target.value)
    }

        async function handleSliderValue(e, value, activeThumb) {
        // console.log(e, value, activeThumb)
        // console.log(e.target.attributes[3].value)
        // console.log(e.nativeEvent)
        // console.log(activeThumb)
        const search = new URLSearchParams(history.location.search)
        if (!Array.isArray(value)) {
            return;
          }
      
        if (e.target.attributes[3].value===0){
            console.log(e.target.attributes[3].value);
            await search.set('price_lte', value[0])
            await history.push(`${history.location.pathname}?${search.toString()}`)
            getProductsData(history)
                setSliderValue([value[0], sliderValue[1]])
        } else{
            console.log(e.target.attributes[3].value);
            await search.set('price_gte', value[1])
            await history.push(`${history.location.pathname}?${search.toString()}`)
            getProductsData(history)
                setSliderValue([sliderValue[0], value[1]])
        }

    }
    
    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Жанры</FormLabel>
            
            <FormGroup value={genre} onChange={handleChangeGenre} aria-label="genre" name="genre1">
                <FormControlLabel value="Экшены" control={<Checkbox />} label="Экшены" name="actions"/>
                <FormControlLabel value="РПГ" control={<Checkbox />} label="РПГ" name="rpg"/>
                <FormControlLabel value="Стратегии" control={<Checkbox />} label="Стратегии" name="strategy"/>
                <FormControlLabel value="all" control={<Checkbox />} label="All" name="all"/>
            </FormGroup>
            {/* <FormGroup value={genre} onChange={handleChangeGenre} aria-label="genre" name="genre1">
                <FormControlLabel value="Экшены" control={<Checkbox />} label="Экшены" name="actions"/>
                <FormControlLabel value="РПГ" control={<Checkbox />} label="РПГ" name="rpg"/>
                <FormControlLabel value="Стратегии" control={<Checkbox />} label="Стратегии" name="strategy"/>
                <FormControlLabel value="all" control={<Checkbox />} label="All" name="all"/>
            </FormGroup> */}
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
                       disableSwap
                   />
               </Grid>
            </Paper>
        </Grid>
    );
};

export default SideBar;