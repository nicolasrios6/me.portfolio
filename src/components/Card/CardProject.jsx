import React from "react";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

const CardProject = ({title, description, technologies, github, web, img}) => {
  return (
    <Card
      direction={{ base: "column", md: "row", sm:'column' }}
      overflow="hidden"
      variant="outline"
      boxShadow='dark-lg'
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", md: "300px", sm:'100%' }}
        src={img}
        alt="project image"
      />

      <Stack>
        <CardBody>
          <Heading fontSize='xl' fontWeight='medium'>{title}</Heading>

          <Text py="2">
            {description}
          </Text>

          <Text fontWeight='medium'>{technologies}</Text>
        </CardBody>

        <CardFooter display='flex' justify='center'>
          <Button variant="solid" colorScheme="blue" mr={2}>
            <Link href={github} target='_blank'>
              Github
            </Link>
          </Button>
          <Button variant="solid" colorScheme="blue">
            <Link href={web} target='_blank'>
              Web
            </Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CardProject;
