import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { productsContext } from '../../contexts/ProductsContext';
import { calcDiscountPercent } from '../../helpers/calcPrice'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root__small: {
        // maxWidth: "100%",
        width: "100%",
        display: "flex",
        padding: 5,
        justifyContent: "space-between",
        height: 'auto'
    },
    media: {
        backgroundSize: "contain",
        // width: 500,
        width: "25%",
        minWidth: "10%",
        // paddingTop: '56.25%', // 16:9
    },
    productCardSmall__price: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%'
    },
    productCardSmall__header: {
        width: '50%',
        padding: 5
    },
    productCardSmall__header__div:{
        fontSize: 10
    },
    productCardSmall__price__icon:{
        padding: 1
    },
    productCardSmall__discountButton:{
        maxHeight: "100%",
        height: "25%",
        alignSelf: 'center'
    }
}));

export default function ProductCardSmall({ item }) {
    const classes = useStyles();
    const { addProductToCart, checkProductInCart } = useContext(productsContext)
    return (
        <Card className={classes.root__small}>
            <CardMedia
                className={classes.media}
                image={item.image}
                title={item.title}
            />
            {/* <Typography>asd</Typography> */}
            <CardHeader className={classes.productCardSmall__header}
                // title={<Typography variant="body1">{item.title}</Typography>}
                title={<div className={classes.productCardSmall__header__div}>{item.title}</div>}
                subheader={<Typography color="textSecondary">
                    <Link id={item.id} exact to={`/catalogue/gamedetails/${item.id}`}>Подробнее</Link>
                </Typography>}
            />
                <Button className={classes.productCardSmall__discountButton} variant="contained" color="primary">{`-${calcDiscountPercent(item.oldPrice, item.price)}%`}</Button>
            {/* <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    {item.description}
                </Typography>
            </CardContent> */}
                <Typography className={classes.productCardSmall__price} align="center" variant="h6" color="textPrimary">
                    {`${item.price}с`}
                    <CardActions disableSpacing>
                        <IconButton className={classes.productCardSmall__price__icon} onClick={() =>
                        {addProductToCart(item)}}
                        aria-label="share"
                        color={checkProductInCart(item.id) ? "secondary" : "primary"}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </CardActions>
                </Typography>
        </Card>
    );
}
