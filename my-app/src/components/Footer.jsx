import { Box, Button, Container, Flex, Heading, Stack } from "@chakra-ui/react"
import { HashLink as Link } from "react-router-hash-link";
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return <Box width="100%" py="150px" bg="#4db5ff ">
        <Container>
            <Stack>
                <Heading>Manish Faujdar</Heading>
                <Flex direction={["column","row","row"]}  justify="space-evenly">
                    <Link smooth to="#top">Home</Link>
                    <Link smooth to="#about">About</Link>
                    <Link smooth to="#skills">Skills</Link>
                    <Link smooth to="#projects">Projects</Link>
                    <Link smooth to="#contacts">Contact</Link>

                </Flex>
                <Flex justifyContent='center' gap={6}>
                    <a href="https://www.linkedin.com/in/manish-faujdar-b485b2172/"><Button >
                        <BsLinkedin color="black" />
                    </Button></a>
                   <a href="https://github.com/moneyforey">
                   <Button >
                        <FaGithub color="black"/>
                    </Button>
                   </a>
                </Flex>
            </Stack>
        </Container>
    </Box>

}

export default Footer;