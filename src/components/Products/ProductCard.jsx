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
import { Button, Grid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { JSON_API } from '../../helpers/constants'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';



const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: "100%",
        width: "100%",
        display: "flex",
        padding: 20,
        justifyContent: "space-between",
    },
    media: {
        backgroundSize: "contain",
        // width: 500,
        width: "25%",
        minWidth: "10%",
        // paddingTop: '56.25%', // 16:9
    },
    productCard__price: {
        alignSelf: 'center',
        display: 'flex',
        // flexDirection: 'column'
        alignItems: 'center',
        width: '25%'
    },
    productCard__header: {
        width: '40%'
    },
    productCard__header__link: {
        alignSelf: 'center'
    }
}));

export default function ProductCard({ item }) {
    const history = useHistory()
    const classes = useStyles();
    const { addProductToCart, checkProductInCart, deleteProduct } = useContext(productsContext)
    const { currentUser } = useAuth()

    // console.log(history);

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                />
                <CardHeader className={classes.productCard__header}
                    title={<Typography variant="h7">{item.title}</Typography>}
                    subheader={<Typography color="textSecondary">{item.category}</Typography>}
                    subheader={<Typography color="textSecondary">{item.category}</Typography>}
                />
                <Typography className={classes.productCard__header__link}>
                    <Link id={item.id} exact to={`/catalogue/gamedetails/${item.id}`}>Подробнее</Link>
                </Typography>
            <Grid xs={1}>
                { currentUser ? (<div>
                    <Button onClick={() => deleteProduct(item.id, history)}>
                        <DeleteForeverIcon />
                    </Button>
                    <Link id={item.id} exact to={`/catalogue/editproduct/${item.id}`}>
                        <Button><EditIcon /></Button>
                    </Link>
                    </div>
                ) 
                : (
                    <div></div>
                )}
            </Grid>
                <Typography className={classes.productCard__price} align="center" variant="h5" color="textPrimary" component="p">
                    <Button variant="contained" color="primary">{`-${calcDiscountPercent(item.oldPrice, item.price)}%`}</Button>
                    {`${item.price}с`}
                    <CardActions disableSpacing>
                        <IconButton onClick={() =>
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
