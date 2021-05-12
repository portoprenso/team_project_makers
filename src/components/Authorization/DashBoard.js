import React, {useContext, useEffect, useRef, useState} from 'react';
import './DashBoard.css'
import Pro from './../../assets/img/caitama.jpg'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Grid, makeStyles, TextareaAutosize, Typography } from '@material-ui/core';
import { productsContext } from '../../contexts/ProductsContext';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  oldOrders__itemContainer: {
      margin: '10px auto',

    }
  }));


const DashBoard = ({title, body}) => {
 // const { receiveCookie, createCookie, setCookie } = useAuth()
    // console.log(createCookie)
    const classes = useStyles()
    const { addNewProduct, cart } = useContext(productsContext)
    const [error, setError] = useState("")
    const [perc, setPerc] = useState(0)
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    const oldPriceRef = useRef()
    const discountPercentPriceRef = useRef()
    const authorRef = useRef()
    const categoryRef = useRef()
    const imageRef = useRef()
    const imageLargeRef = useRef()
    const countInStockRef = useRef()  
    // console.log(currentUser);  

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push("/login")
        } catch(error) {
            console.log(error);
            setError('Ошибка при авторизации')
        }
      }

    async function handleChange() {
        let newObj = {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          price: parseInt(priceRef.current.value),
          oldPrice: parseInt(oldPriceRef.current.value),
          discountPercent: parseInt(discountPercentPriceRef.current.value),
          author: authorRef.current.value,
          category: categoryRef.current.value,
          image: imageRef.current.value,
          imageLarge: imageLargeRef.current.value,
          countInStock: parseInt(countInStockRef.current.value)
        }
        await addNewProduct(newObj, history)
        titleRef.current.value = null
        descriptionRef.current.value = null
        priceRef.current.value = null 
        oldPriceRef.current.value = null
        discountPercentPriceRef.current.value = null
        authorRef.current.value = null 
        categoryRef.current.value = null 
        imageRef.current.value = null 
        imageLargeRef.current.value = null 
        countInStockRef.current.value = null

    }

    function calcDiscountpercent(first, second){
        let discount = Math.ceil(100 - ( first / second )*100)
        setPerc(discount)
    }

    const [ oldOrders, setOldOrders] = useState([])

    async function getOldOrders() {
      // console.log('asd')
      let { data } = await axios(`http://localhost:8000/dbUsers`)
      console.log(data);
      let filteredOrders = []
      console.log(currentUser.email)
      data.forEach(element => {
        console.log(element.mail)
        if(currentUser.email == element.mail){
          console.log(element);
          filteredOrders.push(element.orders)
        }
      });
      setOldOrders(filteredOrders)
      // console.log(filteredOrders);
    }
  
    useEffect(() => {
      getOldOrders()
    }, []);

  return (
    <div style={{dispaly:"flex"}}>
      <div className='fff'>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4"></h2>
            <div className="card-container">
      <div className="card-content">
      <div className="image-container">
        <h3 className="profile"></h3>
        <img className="img-pro" src={Pro} alt=""/>
      </div>
      <div className="card-title">
        <h3></h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>

      </div>
      <div className="btn">
        <button>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
        </button>
       
    </div>
      </div>
      <ButtonGroup className="dashBoard__buttongroup">
            <Button color="primary" variant="contained"><Link to="/update-profile">Ред. профиль</Link></Button>
            <Button color="primary" variant="contained" className="dashboard__logoutButton" onClick={handleLogout}><Link>Выйти</Link></Button>
      </ButtonGroup>
        </Card.Body>
    </Card>
    <div>
    <form className="inp-type" >
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Название</Typography>
        <TextareaAutosize className="inp-type__input" ref={titleRef} placeholder="Название"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Описание</Typography>
        <TextareaAutosize className="inp-type__input" ref={descriptionRef} placeholder="Описание"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Цена со скидкой</Typography>
        <TextareaAutosize className="inp-type__input" ref={priceRef} placeholder="Цена со скидкой"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Цена без скидки</Typography>
        <TextareaAutosize onChange={() => calcDiscountpercent(priceRef.current.value, oldPriceRef.current.value)} className="inp-type__input" ref={oldPriceRef} placeholder="Цена без скидки"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Процент скидки</Typography>
        <TextareaAutosize className="inp-type__input" ref={discountPercentPriceRef} value={perc} placeholder="Процент скидки"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Издатель</Typography>
        <TextareaAutosize className="inp-type__input" ref={authorRef} placeholder="Издатель"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Жанр</Typography>
        <TextareaAutosize className="inp-type__input" ref={categoryRef} placeholder="Жанр"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Маленькое изображение</Typography>
        <TextareaAutosize className="inp-type__input" ref={imageRef} placeholder="Маленькое изображение"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Большое изображение</Typography>
        <TextareaAutosize className="inp-type__input" ref={imageLargeRef} placeholder="Большое изображение"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Количество в наличии</Typography>
        <TextareaAutosize className="inp-type__input" ref={countInStockRef} placeholder="Количество в наличии"/>
      </Grid>
      <Button onClick={() => handleChange()} color="primary" variant="contained">Добавить новый товар</Button>
    </form>
    </div>
    </div>
        <div>
          {oldOrders.length > 0 ? 
          
          (
            oldOrders[0].map(item => {
              console.log(oldOrders)
              // console.log(item);
            return(
            <Grid className={classes.oldOrders__itemContainer}>
                  <div>
                    <table>
                        <tbody>
                            {item.products.map(elem => (
                                    <tr key={elem.item.id}>
                                    <div className="img">
                                        <img src={elem.item.image}/>
                                    </div>
                                    <li>Название: <strong><span>{elem.item.title}</span></strong></li>
                                    <li>Цена: <strong><span>{elem.item.price}</span></strong></li>
                                    <li>Старая цена: <strong><span>{elem.item.oldPrice}</span></strong></li>
                                    <li>Скидка: <strong><span>{elem.item.discountPercent}</span></strong></li>
                                    <li>Количество: <strong>{elem.count}</strong></li>
                                    <li>Предварительный итог: <span><strong>{elem.subPrice}</strong></span></li>
                                    <hr />
                                </tr>
                            ))}
                            <li>Общий итог: <span><strong>{item.totalPrice}</strong></span></li>
                            <li>Комментарий: <span><strong>{item.comment}</strong></span></li>
                        </tbody>
                    </table>
                </div>
            </Grid>
            )
          })

          )
          :
          ('Старых заказов нет')
        }
        </div>
    </div>
  );
};
export default DashBoard;