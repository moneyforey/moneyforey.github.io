import {  Box, Grid,Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import GDG from"../Images/gdg.png";
import btx24 from"../Images/btx24.png";
import Pharma from"../Images/pharmeasy.png";
import SBC from"../Images/shopbop.png";
import LYST from"../Images/LYST.png";
import BBR from"../Images/bbbrown.png";
import APNA from"../Images/apnatv.png";
import styles from"./ProjectCard.module.css";


const ProjectData = [
    {
        id:0,
        title: "Apna Tv",
        src: APNA,
        desc: "Apna Tv is an OTT Platform having movies and web series of different languages",
        tech: ["React","Redux", "Express", "MongoDB"],
        git:'https://github.com/moneyforey/Apna-TV',
        live:'https://apnatv.vercel.app/'
    },
    {
        id:1,
        title: "Bitrix24 Clone",
        src: btx24,
        desc: "Bitrix24 is a website used for task & project management",
        tech: ["React","Redux", "Express", "MongoDB"],
        git:'https://github.com/Hashal890/Betrix24-Clone',
        live:'https://betrix24-clone.vercel.app/'
    },
    {
        id:2,
        title: "Google Digital Garage Clone",
        src: GDG,
        desc: "Google Digital Garage is an e-learning website which provides skill-basedlearning",
        tech: ["React JS", "Chakra UI"],
        git:'https://github.com/moneyforey/sweet-sea-507/tree/main/google-digitalgarage',
        live:'https://google-digitalgarage-moneyforey.vercel.app/'
    },
    {
        id:3,
        title: "PharmEasy Clone",
        src: Pharma,
        desc: "PharmEasy is an e-Commerce website for medicines and provides pathology services",
        tech: ["React JS", "Chakra UI"],
        git:'https://github.com/moneyforey/annoying-twist-7187',
        live:'https://pharmeasyclone-chi.vercel.app/'
    },
    {
        id:4,
        title: "Shopbop Clone",
        src: SBC,
        desc: "Shop bop is an e-Commerce website for fashion-related products",
        tech: ["HTML","CSS", "JavaScript", "Bootstrap"],
        git:'https://github.com/moneyforey/shopbop-clone-Individual-project/tree/main/Shopbop%20Clone',
        live:'https://cool-jalebi-15c080.netlify.app/',
    },
    {
        id:5,
        title: "LYST Clone",
        src: LYST,
        desc: "LYST is an e-Commerce website forfashion-related products.",
        tech: ["HTML","CSS", "JavaScript", "Bootstrap"],
        git:'https://github.com/ShubhamRandive1/Clone-Lyst.com-Website',
        live:'https://astonishing-naiad-bfc963.netlify.app/'
    },
    {
        id:6,
        title: "BOBBI BROWN Clone",
        src: BBR ,
        desc: "BOBBI BROWN Clone is an e-Commerce website forfashion-related products.",
        tech: ["HTML","CSS", "JavaScript"],
        git:'https://github.com/devendnpm/bobbi_brown_clone',
        live:'https://wondrous-souffle-24e26c.netlify.app/index.html',
    }
]
const Projects = () => {

    return (
       <Box my='100px' id="projects">
        <Text className={styles.name}>Projects</Text>
         <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} gap={6}>
            {
                ProjectData.map((p)=>
                <ProjectCard key={p.id} id={p.id} git={p.git} live={p.live} tech={p.tech} src={p.src} title={p.title} desc={p.desc} />
                
                )
            }
        </Grid>
       </Box>
    )
}

export default Projects;