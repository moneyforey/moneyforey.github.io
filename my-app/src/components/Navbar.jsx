import { Flex } from "@chakra-ui/react"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { NavHashLink as Link } from 'react-router-hash-link';
import styles from "./components.module.css"
import { useState } from "react";


const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#top');

    return <Flex className={styles.nav} gap={8}>

        <Link onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? styles.navactive : ''} smooth to="#top" ><AiOutlineHome /></Link>
        <Link onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? styles.navactive : ''} smooth to="#about"><AiOutlineUser /></Link>
        <Link onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? styles.navactive : ''} smooth to="#skills"><BiBook /></Link>
        <Link onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? styles.navactive : ''} smooth to="#projects"><RiServiceLine /></Link>
        <Link onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? styles.navactive : ''} smooth to="#contacts"><BiMessageSquareDetail /></Link>

    </Flex>
}

export default Navbar;