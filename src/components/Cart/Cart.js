import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './Cart.css'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import { calcTotalPrice } from '../../helpers/calcPrice';
import { Link, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



const Cart = () => {
    const classes = useStyles();
    const { getCart, cart, changeProductCount, removeProductFromCart } = useContext(productsContext)

    useEffect(() => {
        getCart()
    }, [])

    return (
        <div className="cart">
            {cart.products ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Изображение</th>
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Старая цена</th>
                                <th>Скидка</th>
                                <th>Количество</th>
                                <th>Предварительный итог</th>
                                <th>Убрать из корзины</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map(elem => (
                                    <tr key={elem.item.id}>
                                        <td>
                                            <img style={{width: 100}} src={elem.item.image} />
                                        </td>
                                        <td>{elem.item.title}</td>
                                        <td>{elem.item.price}</td>
                                        <td>{elem.item.oldPrice}</td>
                                        <td>{elem.item.discountPercent}%</td>
                                        <td><input onChange={(e) => changeProductCount(e.target.value, elem.item.id)} type="number" value={elem.count} /></td>
                                        <td>{elem.subPrice}</td>
                                        <td><Button onClick={() => removeProductFromCart(elem.item)}>Удалить</Button></td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4>Общий итог: {calcTotalPrice(cart.products)}</h4>
                    <Link exact to="/checkout"><Button>Купить</Button></Link>
                </div>
            ) : (
                <CircularProgress />
            ) }
        </div>
    );
};

export default Cart;