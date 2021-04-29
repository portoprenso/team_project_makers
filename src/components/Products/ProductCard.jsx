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

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: "100%",
        width: "100%",
        display: "flex",
        border: "solid black 1px"
    },
    media: {
        backgroundSize: "contain",
        // width: 500,
        width: "25%",
        minWidth: "10%",
        // paddingTop: '56.25%', // 16:9
    },
    productCard__price: {
        alignSelf: 'center'
    }
}));

export default function ProductCard({ item }) {
    const classes = useStyles();
    const { addProductToCart, checkProductInCart } = useContext(productsContext)
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={item.image}
                title={item.title}
            />
            <CardHeader
                title={<Typography align="center" variant="h5">{item.title}</Typography>}
                subheader={<Typography align="center" color="textSecondary">{item.author}</Typography>}
            />
            {/* <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    {item.description}
                </Typography>
            </CardContent> */}
                <Typography className={classes.productCard__price} align="center" variant="h5" color="textPrimary" component="p">
                    {`${item.price}сом`}
                </Typography>
            <CardActions disableSpacing>
                <IconButton onClick={() =>
                {addProductToCart(item)}}
                aria-label="share"
                color={checkProductInCart(item.id) ? "secondary" : "primary"}>
                    <ShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
