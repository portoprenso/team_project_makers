import React, { useRef, useState} from 'react';
import { Card, Button, Form, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css'
import Big from '../../assets/img/hito.jpg'


const useStyles = makeStyles((theme) => ({
    signin__card__h2: {
        alignSelf: "center",
        margin: "0 auto",
        textAlign: "center"
    },
    signin__card: {
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-around',
        flexDirection: 'column'
    }
}));


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const classes = useStyles();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch(error){
            console.log(error);
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    return (
        <div>
            <>
            <div className="hito">
                {/* <div className="imagess">
                    <img src={Big} alt="" />
                </div> */}
                <Card>
                    <div className="big">
                    <div className={classes.signin__card}>
                        <h2 className={classes.signin__card__h2} >Авторизация</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control className="signin__emailInput" placeholder="Email" type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                {/* <Form.Label>Пароль</Form.Label> */}
                                <Form.Control className="signin__passInput" placeholder="Password" type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">Авторизоваться</Button>
                        </Form>
                        <div className="w-101 text-center mt-3">
                            <Link id="color" to='/forgot-password'>Забыли пароль?</Link>
                        </div>
                        <div className="w-101 text-center mt-2">
                            Нужен аккаунт? <Link id="color" to="/signup">Зарегистрироваться</Link>
                        </div>
                    </div>
                    
                    </div>
                </Card>
            </div>
            </>
        </div>
    );
};

export default Login;