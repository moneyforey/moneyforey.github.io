import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import ME from "../Images/mypro.png";
import styles from "./About.module.css";
import { NavHashLink as Link } from 'react-router-hash-link';


const About = () => {
    return <Box backgroundColor="#4db5ff" p="100px" my="100px" id="about">
        <Text>Get to know</Text>
        <Heading className={styles.name}>About me</Heading>
        <Flex direction={["column", "column", "row"]} align="center">

            <Image className={styles.boxpro} borderRadius="50%" width="200px" src={ME} alt="me" />
            <Stack width="100%"  align='center' m="20px">
                <Text textAlign="left" className={styles.desc} >
                    An enthusiastic Web Developer with highly
                    motivated and leadership skills. Eager to
                    learn new technologies and methodologies.
                    Always willing to innovate new things which
                    can improve the existing technology.
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

export default About