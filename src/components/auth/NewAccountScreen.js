import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { NewAccount } from '../../actions/AuthActions'


const cleanFormData = {
    nombres: '',
    apellido_primero: '',
    apellido_segundo: '',
    curp: '',
    curp2: '',
    telefono: '',
    telefono2: '',
    email: '',
    email2: '',
}

const NewAccountScreen = () => {

    const [formData, setFormValues] = useState({
        nombres: '',
        apellido_primero: '',
        apellido_segundo: '',
        curp: '',
        curp2: '',
        telefono: '',
        telefono2: '',
        email: '',
        email2: '',
    })
    const [formSent, setFormSent] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = async () => {
        await NewAccount(formData).then( response => {
            if( response ){

                if( response.status === 200){
                    console.log(response)
                }
            }
        })
        setFormValues(cleanFormData)
        setFormSent(true)
    }

    if (formSent) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Se ha enviado su solicitud para crear una cuenta
                </Typography>
                <Typography variant='body1'>
                    Dentro de poco recibira un mensaje en su correo electronico.
                </Typography>
                <Typography variant='body1'>
                    <Link to='/' className='link'>
                        Regresar al inicio
                    </Link>
                </Typography>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Crear una nueva cuenta
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                        <Grid item md={12} xs={12}>
                            <TextField
                                fullWidth
                                label='Nombres'
                                type='text'
                                variant='outlined'
                                name='nombres'
                                value={formData.nombres}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Apellido paterno'
                                type='text'
                                variant='outlined'
                                name='apellido_primero'
                                value={formData.apellido_primero}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Apellido materno'
                                type='text'
                                variant='outlined'
                                name='apellido_segundo'
                                value={formData.apellido_segundo}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='CURP'
                                type='text'
                                variant='outlined'
                                name='curp'
                                value={formData.curp}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='De nuevo el CURP'
                                type='text'
                                variant='outlined'
                                name='curp2'
                                value={formData.curp2}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Teléfono Celular'
                                type='text'
                                variant='outlined'
                                name='telefono'
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='De nuevo el Teléfono Celular'
                                type='text'
                                variant='outlined'
                                name='telefono2'
                                value={formData.telefono2}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Correo Electrónico'
                                type='email'
                                variant='outlined'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='De nuevo el Correo Electrónico'
                                type='email'
                                variant='outlined'
                                name='email2'
                                value={formData.email2}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant='body1'>
                                He leído y acepto...
                            </Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label='Aviso de privacidad'
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label='Términos y condiciones de uso'
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Card variant='outlined'>
                                <Typography variant='body1'>
                                    No soy un robot
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Crear una nueva cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <Link to='/' className='link'>
                                Si ya tienes una cuenta, regresa a la pagina inicial
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </ContainerCardCenter>
        )
    }

}

export default NewAccountScreen
