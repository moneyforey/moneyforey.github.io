import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ImMail2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import styles from "./contact.module.css"

const Contact =()=>{
    return(
        <Box my='100px' id="contacts">
           <Text className={styles.name}>Contact me</Text>
           
                <Stack  className={styles.box2}>
                   <Stack  border="1px solid black"  p={5}>
                   <ImMail2/>
                    
                    <Text>moneyforey786@gmail.com</Text>
                    <Button variant="outline" >
                        <a href="mailto:moneyforey786@gmail.com">Send me a mail</a>
                        </Button>
                   </Stack>

                       <Flex align="center" gap={2} border="1px solid black" p={5}>
                       <IoCall />
                    <Text>+91 8094906950</Text>
                       </Flex>

                </Stack>
               

        </Box>
    )
}

export default Contact;