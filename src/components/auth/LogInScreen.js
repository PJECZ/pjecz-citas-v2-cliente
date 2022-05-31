import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Grid, TextField, Typography } from '@mui/material'
import ReCAPTCHA from "react-google-recaptcha"

import ComponentCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { LogIn } from '../../actions/AuthActions'


const cleanFormData = {
    username: '',
    password: '',
}

const LoginScreen = () => {

    // crear un variable de estado para captcha
    const [captchaValido, setCaptchaValido] = useState(null) ;

    // crear referencia al checkbox 'recaptcha'
    const captcha = useRef(null)

    // crear funcion de evento onChange
    const onChange = () => {
        if(captcha.current.getValue()){
            setCaptchaValido(true) ;    
            console.log("google regreso un token y no es un robot") ;
        }
        else{
            console.log("Detectado como robot") ;
        }   
    }

    // Redirigir al inicio si ya esta logueado
    const data = window.localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (data) {
            navigate('/')
        }
    })

    // Formulario
    const [formData, setFormValues] = useState({
        username: '',
        password: '',
    })
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    // Enviar el formulario
    const submitForm = () => {
        if(captchaValido){
            LogIn(formData).then((response) => {
                if (response.status === 200) {
                    const { data } = response
                    window.localStorage.setItem('token', data.access_token)
                    navigate('/')
                } else {
                    setIsError(true)
                    setErrorMessage(response.data.detail)
                }
            })
            setFormValues(cleanFormData)
        }
        else{
            setCaptchaValido(false) ;
        }
    }

    if (isError) {
        return (
            <ComponentCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Error al tratar de ingresar
                </Typography>
                <Typography variant='body1'>
                    {errorMessage}
                </Typography>
            </ComponentCardCenter>
        )
    } else {
        return (
            <ComponentCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Ingresar al Sistema de Citas
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electronico"
                                type="email"
                                fullWidth
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type="password"
                                fullWidth
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Card variant='outlined'>
                                <Typography variant='body1'>
                                    <div className='recaptcha'>
                                        <ReCAPTCHA
                                            ref={captcha}
                                            sitekey='6LdL-yMgAAAAAFaW2_5KwUlT5FXJjZYaPQd7fFbP'
                                            /*sitekey={process.env.API_KEY_RECAPTCHA_GOOGLE}*/
                                            onChange={onChange}
                                        />   
                                    </div>
                                    {captchaValido === false && <div style={{color:'red'}}>Selecciona el captcha para continuar</div>}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Ingresar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                <Link to='/recover_account' className='link'>
                                    Olvide mi contrasena
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                <Link to='/new_account' className='link'>
                                    Quiero crear una nueva cuenta
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </ComponentCardCenter>
        )
    }

}

export default LoginScreen
