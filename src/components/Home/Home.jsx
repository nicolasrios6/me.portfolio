import { List, ListIcon, ListItem, Stack, Text} from '@chakra-ui/react';
import {CheckIcon, SpinnerIcon} from '@chakra-ui/icons'
import CardProject from '../Card/CardProject';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Stack direction='column' px={3} rowGap='2rem' mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold'>Hola!</Text>
                <Text fontSize='lg' >
                    Soy Nicolás Ríos, desarrollador frontend. Tengo 22 años y soy de Mendoza, Argentina.
                    Inicié en la programacion en diciembre de 2021 realizando cursos y actualmente 
                    sigo aprendiendo y practicando nuevas tecnologías.
                    Me gusta mucho desarrollar con ReactJS y aplicar estilos con SASS, 
                    ademas de utilizar librerás como Chakra o Material UI.
                </Text>
                <Text fontSize='lg'>
                    En la actualidad me encuentro aprendiendo nuevas tecnologías y realizando
                    proyectos personales que me ayuden a encontrar mi primer trabajo en IT.
                </Text>
            </Stack>

            <Stack direction='column' mt={8} px={3} mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold'>Tecnologías:</Text>
                    <Stack direction='row'>
                        <List pr={6}>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                HTML
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                CSS
                            </ListItem>
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
                        </List >

                        <List>
                            <ListItem fontSize='lg' padding={1}>
                            <ListIcon as={CheckIcon} color='primary'/>
                                Firebase
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                GIT
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                Material UI
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={CheckIcon} color='primary'/>
                                Chakra UI
                            </ListItem>
                            <ListItem fontSize='lg' padding={1}>
                                <ListIcon as={SpinnerIcon} color='primary'/>
                                NextJS
                            </ListItem>
                        </List>
                    </Stack>
            </Stack>

            <Stack direction='column' px={3} rowGap='5' mb='5rem'>
                <Text fontSize='xl' color='primary' fontWeight='semibold' mb={8}>Proyectos:</Text>
                <CardProject 
                    title='Zona Gym'
                    description='Zona Gym es una SPA donde el usuario puede buscar los mejores
                    gimnasios en la zona que prefiera.'
                    img='/zonagym.png'
                    technologies='ReactJS + SASS + Firebase'
                    github='https://github.com/nicolasrios6/zona-gym'
                    web='https://zonagym.netlify.app/'
                />
                <CardProject
                    title='Ecommerce'
                    description='Ecommerce de mates, donde el usuario puede navegar y elegir diferentes productos con el stock correspondiente de cada uno
                    de manera sencilla y sin problemas, es una web muy intuitiva.'
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
            </Stack>

            <Footer />
        </>
    );
}

export default Home;
