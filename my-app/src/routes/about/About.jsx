import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import ME from "../Images/mypro.png";
import styles from "./About.module.css";
import { NavHashLink as Link } from 'react-router-hash-link';


const About = () => {
    return <Box p="100px"  className={styles.profile} my="100px" id="about">
        <Text>Get to know</Text>
        <Heading className={styles.name}>About me</Heading>
        <Flex direction={["column", "row", "row"]} align="center">
            <Box >
                <Image heigth="auto" width="200px" src={ME} alt="me" />

            </Box>
            <Stack align='center'  m="20px">
                <Text fontSize={["15px",'18px','23px']}  className={styles.deg} width="500px">An enthusiastic Web Developer with highly
                    motivated and leadership skills. Eager to
                    learn new technologies and methodologies.
                    Always willing to innovate new things which
                    can improve the existing technology.
                </Text>

                <Link smooth to="#contacts">
                    <Button className={styles.btn} >
                        Let's Talk
                    </Button>
                </Link>

            </Stack>
        </Flex>
    </Box>
}

export default About