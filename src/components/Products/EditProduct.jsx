import React, {useContext, useEffect, useRef, useState} from 'react';
import Pro from './../../assets/img/hqdefault.jpg'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, ButtonGroup, Grid, TextareaAutosize, Typography } from '@material-ui/core';
import { productsContext } from '../../contexts/ProductsContext';



const EditProduct = ({title, body}) => {
    const { id } = useParams()
    const { getProductDetails, productDetails, editProduct } = useContext(productsContext)
    const [error, setError] = useState("")
    const [perc, setPerc] = useState(0)
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const priceRef = useRef(null)
    const oldPriceRef = useRef(null)
    const discountPercentPriceRef = useRef(null)
    const authorRef = useRef(null)
    const categoryRef = useRef(null)
    const imageRef = useRef(null)
    const imageLargeRef = useRef(null)
    const countInStockRef = useRef(null)    

    useEffect(() => {
        asd()
    }, [titleRef.current])

      function putData(){
          titleRef.current.value = productDetails.title
          descriptionRef.current.value = productDetails.description
          priceRef.current.value = productDetails.price
          oldPriceRef.current.value = productDetails.oldPrice
          discountPercentPriceRef.current.value = productDetails.discountPercent
          authorRef.current.value = productDetails.author
          categoryRef.current.value = productDetails.category
          imageRef.current.value = productDetails.image
          imageLargeRef.current.value = productDetails.imageLarge
          countInStockRef.current.value = productDetails.countInStock
        }

        async function asd(){
            await getProductDetails(id);
            console.log(productDetails);
            await putData()
        }


    //   setTimeout(() => {
    //     putData()
    //   }, 500);

    async function handleChange() {
        let newObj = {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          price: priceRef.current.value,
          oldPrice: oldPriceRef.current.value,
          discountPercent: discountPercentPriceRef.current.value,
          author: authorRef.current.value,
          category: categoryRef.current.value,
          image: imageRef.current.value,
          imageLarge: imageLargeRef.current.value,
          countInStock: countInStockRef.current.value
        }
        await editProduct(id, newObj, history)
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



  return (
    <div style={{dispaly:"flex"}}>
      <div className='fff'>
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
      <Button onClick={() => handleChange()} color="primary" variant="contained">Сохранить изменения</Button>
      <Link exact to="/homepage"><Button color="primary" variant="contained">Отмена</Button>
      </Link>
    </form>
    </div>
    </div>
        {/* <button onClick={receiveCookie}>Receive Cookie</button>
        <button onClick={() => setCookie()}>Create Cookie</button> */}

  

    </div>
  );
};
export default EditProduct;