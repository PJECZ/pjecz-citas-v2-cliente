import React from 'react';
import { Container, Typography } from '@mui/material';

const styles = {
    paragraph : {
        padding:'10px 0',
        align:'justify',
    },
    list : {
        padding:'0 30px',
    }
}

export const PrivacyTerms = () => {

    return (
        <Container sx={{ marginTop: '40px' }}>
            <Typography variant='h4'>
                AVISO DE PRIVACIDAD SIMPLIFICADO
            </Typography>

            <Typography style={styles.paragraph}>
                En los términos de lo dispuesto por los artículos 16, 20, 21 y 22 de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Coahuila, se emite el actual aviso de privacidad simplificado, en los siguientes términos:
            </Typography>

            <Typography style={styles.paragraph}>
                Las finalidades del tratamiento para las cuales se obtienen sus datos personales.
            </Typography>

            <Typography style={styles.paragraph}>
                El Sistema de Citas mediante plataforma en línea (en adelante SCL), recaba datos personales de los usuarios con el fin de brindar los servicios siguientes: 
            </Typography>    
                <Typography style={styles.list}> 
                    a) revisión de expedientes;
                </Typography>
                <Typography style={styles.list}>  
                    b) tramitación de oficios, edictos y exhortos; 
                </Typography>
                <Typography style={styles.list}> 
                    c) citas con actuarios y actuarias (civiles y familiares únicamente); 
                </Typography>
                <Typography style={styles.list}> 
                    d) citas con el juzgador o juzgadora; 
                </Typography>
                <Typography style={styles.list}> 
                    e) expedición de copias simples o certificadas; 
                </Typography>
                <Typography style={styles.list}> 
                    f) devolución de documentos; 
                </Typography>
                <Typography style={styles.list}> 
                    g) entrega de cheques y certificados de depósitos; 
                </Typography>
                <Typography style={styles.list}> 
                    h) los demás que estén disponibles por parte de las autoridades en beneficio de la ciudadanía. Razón por la cual los datos personales únicamente serán utilizados en el momento en el que se brinden los servicios mencionados.
                </Typography>

            <Typography style={styles.paragraph}>
                Transferencias de datos personales.
            </Typography>

            <Typography style={styles.paragraph}>
                Sus datos personales no podrán ser difundidos o transmitidos a terceros o al público en general, salvo que: 
            </Typography>
                <Typography style={styles.list}> 
                    a) medie su consentimiento expreso; 
                </Typography>
                <Typography style={styles.list}> 
                    b) por disposición legal; o 
                </Typography>
                <Typography style={styles.list}> 
                    c) por ser indispensable para el ejercicio de alguna atribución por parte de esta u otra autoridad competente, incluyendo cualquier otro órgano jurisdiccional o área del Poder Judicial, en términos de los artículos 16 y 72 de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Coahuila.
                </Typography>

            <Typography style={styles.paragraph}>
                Mecanismos y medios disponibles para manifestar la negativa para el tratamiento de sus datos personales para finalidades y transferencias de datos personales.
            </Typography>

            <Typography style={styles.paragraph}>
                Usted por su propia cuenta o por medio de su representante, podrán solicitar el acceso, rectificación, cancelación u oposición al tratamiento de sus datos personales, conocidos como derechos ARCO. Para lo anterior, deberá comparecer personalmente o presentar la solicitud respectiva, por escrito, ante la Unidad de Atención a las Solicitudes de Acceso a la Información de la Secretaría Técnica y de Transparencia de la Presidencia del Tribunal Superior de Justicia del Estado. ubicada en Blvd. Venustiano Carranza número 2673, Colonia Santiago, en Saltillo, Coahuila de Zaragoza en un horario de atención de 8:30 a 16:30 horas de lunes a viernes.
            </Typography>

            <Typography style={styles.paragraph}>
                El teléfono de contacto de la Unidad de Atención a las Solicitudes de Acceso a la Información Pública de la Secretaría Técnica y de Transparencia de la Presidencia del Tribunal Superior de Justicia del Estado, para cualquier duda, es el siguiente: 844 438 09 80 ext. 6808, el cual será atendido en un horario de lunes a viernes de 08:30 a 16:30 horas.
            </Typography>

            <Typography style={styles.paragraph}>
                El sitio donde se podrá consultar el Aviso de Privacidad Integral.
            </Typography>

            <Typography style={styles.paragraph}>
                El Aviso de Privacidad Integral estará a su disposición en la página de internet siguiente: https://www.pjecz.gob.mx/aviso-de-privacidad/
            </Typography>

        </Container>
    );

}
