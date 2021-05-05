import React, { useRef, useState} from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { makeStyles } from '@material-ui/core/styles';
import './ForgotPassword.css'

const useStyles = makeStyles((theme) => ({
    forgot__card__h2: {
        alignSelf: "center",
        margin: "0 auto",
        textAlign: "center"
    },
    forgot__card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));


const ForgotPassword = () => {
    const classes = useStyles()
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch(error){
            console.log(error);
            setError('Failed to reset password')
        }
        setLoading(false)
    }
    return (
        <div>
            <>
            <div className="hito">
            <Card>
                <div className="big">
                <div className={classes.forgot__card}>
                    <h2 className={classes.forgot__card__h2} id="sbr">Сброс пароля</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control className="signin__emailInput" placeholder="Email" type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="ww-100" type="submit">Сбросить пароль</Button>
                    </Form>
                    <div className="f-100 text-center mt-3">
                        <Link id="color" to='/login'>Авторизоваться</Link>
                    </div>
            <div className="f-100 text-center mt-2">
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

export default ForgotPassword;