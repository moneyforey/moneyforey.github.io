import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import ME from "../Images/mypro.png";
import styles from "./About.module.css";
import { NavHashLink as Link } from 'react-router-hash-link';


const About = () => {
    return <Box backgroundColor="#4db5ff" p="100px" my="100px" id="about">
        <Text>Get to know</Text>
        <Heading className={styles.name}>About me</Heading>
        <Flex direction={["column", "column", "row"]} align="center">

            <Image className={styles.boxpro} borderRadius="50%" width="200px" height='200px' src={ME} alt="me"/>
            <Stack width="100%"  align='center' m="20px">
                <Text textAlign="left" className={styles.desc} >
                    An Enthusiastic, Self-Motivated, and Aspiring Full stack Web Developer with a specialization in MERN stack. Well-versed in technology and writing code to create applications that are reliable and user-friendly. Looking for an opportunity where I can apply my knowledge and skills in programming within an organization that will utilize and enhance my talents to the fullest.
                </Text>

                <Link smooth to="#contacts">
                    <Button variant="outline" className={styles.btn} >
                        Let's Talk
                    </Button>
                </Link>

            </Stack>
        </Flex>
    </Box>
}

export default About;