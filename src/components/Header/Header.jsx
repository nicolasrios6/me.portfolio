import { Stack, Text, Button, useColorMode } from '@chakra-ui/react';
import { SunIcon,MoonIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Header = () => {

    const {colorMode, toggleColorMode} = useColorMode()
    const [icon, setIcon] = useState(false)

    const handleClick = () => {
        icon === false ? setIcon(<MoonIcon />) : setIcon(<SunIcon />)
    }

    return (
        <Stack direction='row' align='center' justify='space-between' px='3' pt='5' mb='8rem'>
            <Text fontSize='2xl' fontWeight='medium'>Nicolás Ríos</Text>

            <Button onClick={toggleColorMode} >
                
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Stack>
    );
}

export default Header;
