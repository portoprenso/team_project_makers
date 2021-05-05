import { Button, CircularProgress, Grid, makeStyles, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { productsContext } from '../../contexts/ProductsContext';
import { calcTotalPrice } from '../../helpers/calcPrice';
import { Link, useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    checkout__root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        margin: '0 auto',
      },
      paper: {
        width: 800,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
      leftContainer: {
          display: 'flex',
          flexDirection: 'column',
          border: 'black solid 1px',
          padding: 50,
          backgroundColor: 'white',
          ['@media(max-width: 780px)'] : {
                  padding: 5
            },
          ['@media(max-width: 600px)'] : {
                  width: `100% !important`
            }
      },
      textfieldsHeaders:{
        fontSize: '1.5rem',
        letterSpacing: 0.75
      },
      textfieldsCommentary: {
          letterSpacing: 1
        },
        mainContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            ['@media(max-width: 600px)'] : {
                flexDirection: 'column'
          }
        },
        tdItem: {
            padding: '10px!important'
        },
        tableSumHeader:{
            justifySelf: 'center',
            textAlign:'center'
        },
        textFieldsContainer:{
            display: 'flex',
            flexDirection: 'column'
        },
        textfields__item: {
            margin: '10px auto'
        },
    }));
    
    const CheckoutPage = () => {
    const { getCart, cart, changeProductCount, removeProductFromCart } = useContext(productsContext)
    const { currentUser } = useAuth()
    const classes = useStyles()
    const nameRef = useRef()
    const phoneRef = useRef()
    const mailRef = useRef()
    const commentaryRef = useRef('asd')
    const history = useHistory()



        const handleStopProp = (e) => {
            e.stopPropagation();
            return console.log("Works?");
        };
      


        const handleChange = async (email) => {
            let { data } = await axios('http://localhost:8000/dbUsers')
            cart.comment = commentaryRef.current.children[1].children[0].value
                await data.forEach(item => {
                    console.log(commentaryRef.current.children[1].children[0].value)
                    // console.log(cart.comment)
                    // console.log(phoneRef.current)
                    // console.log(phoneRef.current.children[1].children[0].value)
                    // cart.comment = commentaryRef.current.children[1].children[0].value
                    if (email==item.email){
                        let newUser = {
                            name: item.name,
                            phone: item.phone,
                            mail: item.mail,
                            orders: [...item.orders, cart]
                        }
                        axios.patch(`http://localhost:8000/dbUsers/${item.id}`, newUser)
                    } else {
                        let newUser = {
                            name: nameRef.current.children[1].children[0].value,
                            phone: phoneRef.current.children[1].children[0].value,
                            mail: mailRef.current.children[1].children[0].value,
                            orders: [cart]
                        }
                        axios.post('http://localhost:8000/dbUsers', newUser)
                    }
                })
            console.log(cart);
            history.push('/buy')
            // console.log(currentUser);
    }


    useEffect(() => {
        getCart()
    }, [])
    
    return (
        <Grid xs={11} className={classes.checkout__root}>
            <Typography variant='h2'>Оформление заказа</Typography>
            <Grid className={classes.mainContainer}>
                <Grid lg={8} xl={12} className={classes.leftContainer}>
                <Typography className={classes.textfieldsCommentary}>Заполните простую форму и наши менеджеры свяжутся с вами, ответят на любые вопросы.</Typography>
                <form noValidate autoComplete="off">
                <div className={classes.textFieldsContainer}>
                    <TextField
                    ref={nameRef}
                    className={classes.textfields__item}
                    required
                    id="outlined-required"
                    label="Обязательно"
                    defaultValue="Ваше имя"
                    variant="outlined"
                    />
                    <TextField
                    ref={phoneRef}
                    className={classes.textfields__item}
                    required
                    id="outlined-required"
                    label="Обязательно"
                    defaultValue="Телефон"
                    variant="outlined"
                    />
                    <TextField
                    ref={mailRef}
                    className={classes.textfields__item}
                    required
                    InputProps={{
                        readOnly: true,
                      }}            
                    id="outlined-required"
                    label="Обязательно"
                    defaultValue={currentUser.email}
                    variant="outlined"
                    />
                    <TextField
                    ref={commentaryRef}
                    className={classes.textfields__item}
                    id="outlined-helperText"
                    label="Комментарий к заказу"
                    defaultValue="..."
                    variant="outlined"
                    />
                </div>
                </form>


                <Button onClick={() => handleChange(currentUser.email)} color='primary' variant='contained'>Оплатить</Button>

                    {/* <Typography required={true} className={classes.textfieldsHeaders} variant='p'>Ваше имя</Typography>
                    <TextareaAutosize required placeholder='Your name...'></TextareaAutosize>
                    <Typography required className={classes.textfieldsHeaders} variant='p'>Телефон</Typography>
                    <TextareaAutosize placeholder='Phone number...'></TextareaAutosize>
                    <Typography required className={classes.textfieldsHeaders} variant='p'>Электронная Почта</Typography>
                    <TextareaAutosize placeholder='E-Mail...'></TextareaAutosize>
                    <Typography className={classes.textfieldsHeaders} variant='p'>Комментарий к заказу</Typography>
                    <TextareaAutosize rowsMin={3} placeholder='Order commentary...'></TextareaAutosize> */}
                </Grid>
                <Grid xs={4} className={classes.rightContainer}>
                    
                    



    <div className="cart">
        {cart.products ? (
            <div>
                <table>
                    {/* <thead>
                        <tr>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Итог</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {cart.products.map(elem => (
                                <tr key={elem.item.id}>
                                    <li className={classes.tdItem}>Название: <strong>{elem.item.title}</strong></li>
                                    <li className={classes.tdItem}>Цена: <strong>{elem.item.price}с</strong></li>
                                    <li className={classes.tdItem}>Количество: <input min={0} onChange={(e) => changeProductCount(e.target.value, elem.item.id)} type="number" value={elem.count} /></li>
                                    <li className={classes.tdItem}>Предварительный итог: <strong>{elem.subPrice}с</strong></li>
                                    <hr />
                                </tr>
                        ))}
                    </tbody>
                </table>
                <h4 className={classes.tableSumHeader}>Общий итог: {calcTotalPrice(cart.products)}</h4>
            </div>
        ) : (
            <CircularProgress />
        ) }
    </div>













                </Grid>
            </Grid>

            </Grid>
    );
};

export default CheckoutPage;