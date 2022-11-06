import { Button,  Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import img from"../Images/programmer.png"
// import CV from'../Iamges/Manish_Faujdar_Resume.pdf';
import styles from "./Home.module.css";
import { NavHashLink as Link } from 'react-router-hash-link';

const HomePage = () => {
  return <Flex direction={['column','column','row']} my="100px" align="center" gap={10}>

    <Stack textAlign="center">


      <Flex  gap={5}>
        <Text  className={styles.deg}>Hello </Text>
        <MdWavingHand color="#ffe0bd"/>
        <Text  className={styles.deg}>I'm</Text>
        </Flex>
      <Heading className={styles.name}>Manish Faujdar</Heading>
      <Text className={styles.deg}>Full Stack Web Developer</Text>
      <Flex justify='space-around' gap={10}>

        <a href="https://www.linkedin.com/in/manish-faujdar-b485b2172/" target='blank'><BsLinkedin className={styles.icons} /></a>
        <a href="https://github.com/moneyforey">< FaGithub  className={styles.icons}/></a>


      </Flex>
      <Flex gap={10}>
        <Button className={styles.btn} variant="outline">
          <a href='https://drive.google.com/file/d/1nfkjAlzCYOGhl7pewaCPymuXSRZ9ylgr/view?usp=share_link'>
          Resume
          </a>
        </Button>
       
        <Link smooth to="#contacts">
        <Button className={styles.btn} bg="#4db5ff">
          Let's Talk
          </Button>
          </Link>
        
      </Flex>


      
       
      

    </Stack>
    <Image height="400px" src={img} alt="ani"/>

  </Flex>
}

export default HomePage;