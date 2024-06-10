import { List, ListIcon, ListItem, Stack, Text, Button, Link} from '@chakra-ui/react';
import {CheckIcon, SpinnerIcon} from '@chakra-ui/icons'
import CardProject from '../Card/CardProject';
import Footer from '../Footer/Footer';


const fechaNacimiento = new Date('2000-03-02')
const fechaActual = new Date()

const dif = fechaActual - fechaNacimiento

const edadMiliseg = new Date(dif)

const edad = Math.abs(edadMiliseg.getUTCFullYear() - 1970)

const Home = () => {
    return (
        <>
            <Stack direction='column' px={3} rowGap='2rem' mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold'>Hola!</Text>
                <Text fontSize='lg' >
                    Soy Nicolás Ríos, tengo {edad} años y soy de Mendoza, Argentina.
                    Soy estudiante de Programación en la UTN. Inicié en la programacion en diciembre de 2021 realizando cursos.
                </Text>
                <Text fontSize='lg'>
                    En la actualidad me encuentro perfeccionando y aprendiendo nuevas tecnologías que me impulsen a crecer en el mundo IT.
                </Text>

                <Link href='./CV.pdf' target='_blank' maxW='80px'>
                    <Button maxW='100px' variant='outline' shadow='dark-lg' color='primary'>Ver CV</Button>
                </Link>
            </Stack>

            <Stack px={3} mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold'>Experiencia:</Text>
                <Text fontSize='lg' fontWeight='bold'>Kahlo Agencia</Text>
                <Text fontWeight='semibold'>FullStack Developer</Text>
                <Text>12/2023 - 04/2024</Text>
                <Text>Mi desempeño en Kahlo está centrado en el desarrollo de Aplicaciones Web utilizando como tecnologias principales .NET, JavaScript y PHP</Text>
                
            </Stack>

            <Stack direction='column' mt={8} px={3} mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold'>Tecnologías:</Text>
                    <Stack direction='row'>
                        <List pr={6}>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                Javascript
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                ReactJS
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                SASS
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                GIT
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                Material UI
                            </ListItem>
                        </List >

                        <List>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                Java
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                SQL
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={SpinnerIcon} color='primary'/>
                                JBDC
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={SpinnerIcon} color='primary'/>
                                JPA
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={SpinnerIcon} color='primary'/>
                                .NET
                            </ListItem>
                        </List>
                    </Stack>
            </Stack>

            <Stack direction='column' px={3} rowGap='5' mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold' mb={8}>Proyectos:</Text>
                <CardProject 
                    title='Zona Gym'
                    description='Zona Gym es una SPA donde el usuario puede buscar los mejores
                    gimnasios por la zona seleccionada.'
                    img='/zonagym.png'
                    technologies='ReactJS + SASS + Firebase'
                    github='https://github.com/nicolasrios6/zona-gym'
                    web='https://zonagym.netlify.app/'
                />
                <CardProject
                    title='Ecommerce'
                    description='Ecommerce de mates, donde el usuario puede navegar y elegir diferentes productos con el stock correspondiente de cada uno
                    de manera sencilla, es una web muy intuitiva.'
                    img='/buonmate.png'
                    technologies='ReactJS + SASS + Material UI + Firebase'
                    github='https://github.com/nicolasrios6/ecommerce-buonmate'
                    web='https://ecommerce-buonmate.netlify.app/'
                />
                <CardProject
                    title='Primer Portfolio'
                    description='Portfolio personal con diferentes secciones, realizado con las tecnologías básicas.'
                    img='/primerportfolio.png'
                    technologies='HTML + CSS + Javascript'
                    github='https://github.com/nicolasrios6/Portfolio'
                    web='https://nicolasrios6.github.io/Portfolio/'
                />
                <CardProject
                    title='Landing Page'
                    description='Landing page sobre turismo en Mendoza'
                    img='/saudademendoza.png'
                    technologies='WordPress & Elementor'
                    web='https://saudademendoza.com/'
                />
            </Stack>

            <Footer />
        </>
    );
}

export default Home;
