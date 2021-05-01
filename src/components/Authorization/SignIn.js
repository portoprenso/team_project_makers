import React, { useRef, useState} from 'react';
import { Card, Button, Form, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    signin__card__h2: {
        alignSelf: "center",
        margin: "0 auto",
        textAlign: "center"
    },
    signin__card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            <Card>
                <div className={classes.signin__card}>
                    <h2 className={classes.signin__card__h2}>Авторизация</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Авторизоваться</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to='/forgot-password'>Забыли пароль?</Link>
                    </div>
                    <div className="w-100 text-center mt-2">
                        Нужен аккаунт? <Link to="/signup">Зарегистрироваться</Link>
                    </div>
                </div>
            </Card>
            </>
        </div>
    );
};

export default Login;