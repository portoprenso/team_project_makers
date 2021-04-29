import React, { useRef, useState} from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { makeStyles } from '@material-ui/core/styles';

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
            <Card>
                <Card.Body className={classes.forgot__card}>
                    <h2 className={classes.forgot__card__h2}>Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to='/login'>Log In</Link>
                    </div>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
                </Card.Body>
            </Card>
            </>
        </div>
    );
};

export default ForgotPassword;