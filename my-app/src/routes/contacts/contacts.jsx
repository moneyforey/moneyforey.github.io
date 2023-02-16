import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsPerson } from 'react-icons/bs';
  import { useRef } from 'react';

  const initData ={
    user_name:'',
    user_email:'',
    message:''
  };

  const Contact=()=> {
    const [data,setData] = useState(initData);
    const form = useRef();
    const {user_name,user_email,message} = data;
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({
          ...data,
          [name]:value
        })
    }

    const handleClick=(e)=>{
      e.preventDefault();
      console.log(data);
      console.log(data.user_name,form.current.user_email,form.current.message);
      emailjs.sendForm('service_wrq0sct', 'template_j9l426f',form.current, 'ek9hGeo_2J_fK8_Sy')
      .then((result) => {
        console.log('messaeg send')
          console.log(result.text);
          alert('Thankyou! I will reachout to you soon');
      }, (error) => {
        console.log('message not sent')
          console.log(error.text);
      });
    }

    return (
      <Container  maxW="full" mt={0} id="contacts" centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-8094906950
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          moneyforey786@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Bharatpur, Rajasthan
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">      
                      <VStack  spacing={5} >
                        <form ref={form} action="">
                        {/* <FormControl  id="name"> */}
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" name="user_name" value={user_name} onChange={handleChange} size="md" />
                          </InputGroup>
                        {/* </FormControl> */}
                        {/* <FormControl id="name"> */}
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="email" name="user_email" value={user_email} onChange={handleChange}  size="md" />
                          </InputGroup>
                        {/* </FormControl> */}
                        {/* <FormControl  id="name"> */}
                          <FormLabel>Message</FormLabel>
                          <Textarea
                          onChange={handleChange}
                           name="message"
                           value={message}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        {/* </FormControl> */}
                        <FormControl  id="name" float="right">
                          <Button
                          type='submit'
                          onClick={handleClick}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }

  export default Contact;