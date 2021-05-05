import React, { useRef, useState} from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { makeStyles } from '@material-ui/core/styles';
import './SignUp.css'

const useStyles = makeStyles((theme) => ({
    signup__card__h2: {
        alignSelf: "center",
        margin: "0 auto",
        textAlign: "center"
    },
    signup__card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));


const SignUp = () => {
    const classes = useStyles()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch(error){
            console.log(error);
            setError('Failed to create an account')
        }
        setLoading(false)
        history.push('/login')
    }
    return (
        <div>
            <>
            <div className="hito">
            <Card>
                <div className="big">
                <div className={classes.signup__card}>
                    <h2 className={classes.signup__card__h2}>Регистрация</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control className="signin__emailInput" placeholder="Email" type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            {/* <Form.Label>Пароль</Form.Label> */}
                            <Form.Control className="signin__passInput" placeholder="Password"  type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            {/* <Form.Label>Ещё раз пароль</Form.Label> */}
                            <Form.Control className="signin__passInput" placeholder="Password" type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                        {/* <Link id="color" to='/'>Зарегистрироваться</Link> */}
                        Зарегистрироваться
                        </Button>
                    </Form>
                    <div className="w-101 text-center mt-2">
                        Уже есть аккаунт? <Link id="color" exact to="/login">Авторизоваться</Link>
                    </div>
                   
                </div>
                </div>
            </Card>
            </div>
            </>
        </div>
    );
};

export default SignUp;