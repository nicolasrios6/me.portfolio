import { ArrowUpIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem, Stack, Text, Link, Flex, Button } from '@chakra-ui/react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import Icon from '../../Icon'

const Footer = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior:'smooth'})
    }, []);

  return (
    <Stack direction="column" px={3}>
      <Text fontSize='xl' color='primary' fontWeight='semibold'>Contacto</Text>
      <Text fontSize='lg' fontWeight='medium'>Enviame un email: <Text color='primary' fontWeight='medium'>riosnicolas618@gmail.com</Text></Text>

      <List display="flex" flexDir="row" paddingBottom='4rem'>
        <ListItem fontSize='3xl'>
          <Link
            href="https://www.linkedin.com/in/nicolasrios6/"
            target="_blank"
          >
            <ListIcon>
              <Icon icon={faLinkedin} />
            </ListIcon>
          </Link>
        </ListItem>
        <ListItem fontSize='3xl'>
          <Link
            href="https://github.com/nicolasrios6?tab=repositories"
            target="_blank"
          >
            <ListIcon>
              <Icon icon={faGithub} />
            </ListIcon>
          </Link>
        </ListItem>
        <ListItem fontSize='3xl'>
          <Link href="https://twitter.com/NicoRios027" target="_blank">
            <ListIcon>
              <Icon icon={faTwitter} />
            </ListIcon>
          </Link>
        </ListItem>
      </List>

      <Flex justifyContent='space-between' alignItems='center' paddingBottom='1rem'>
        <Text fontSize='lg' fontWeight='medium'>&copy;2022 - Nicolás Ríos</Text>
        <Button variant='ghost' onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }}>
            <ArrowUpIcon />
        </Button>
      </Flex>
    </Stack>
  );
};

export default Footer;
