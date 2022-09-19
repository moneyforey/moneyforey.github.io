import { Box, Flex, Grid, Text} from '@chakra-ui/react';
import React from 'react';

import { RiHtml5Line } from 'react-icons/ri'
import { SiCss3, SiRedux, SiChakraui, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaGit } from 'react-icons/fa';
import styles from "./skills.module.css"


const Skills = () => {
  return (
    <Box my='100px' id='skills'>
     
      <h2 className={styles.name}>Skills</h2>
      <Flex direction={["column","row","row"]} gap={10} >
        <Box className={styles.box2}>
          <h3 className={styles.icon}>Front-end Development</h3>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Flex className={styles.skillflex} >
              <RiHtml5Line className={styles.icon} />
              <Text>HTML</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiCss3 className={styles.icon} />
              <Text>CSS</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <TbBrandJavascript className={styles.icon}/>
              <Text>JavaScript</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <FaReact className={styles.icon}/>
              <Text>React</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiRedux className={styles.icon}/>
              <Text>Redux</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiChakraui className={styles.icon}/>
              <Text>Chakra UI</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiBootstrap className={styles.icon}/>
              <Text>Bootstrap</Text>
            </Flex>
          </Grid>
        </Box>
        <Box className={styles.box2}>
          <h3 className={styles.icon}>Back-end Development</h3>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Flex className={styles.skillflex}>
              <SiNodedotjs className={styles.icon}/>
              <Text>Node JS</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiExpress className={styles.icon}/>
              <Text>Express JS</Text>
            </Flex>
            <Flex  className={styles.skillflex}>
              <SiMongodb className={styles.icon}/>
              <Text>MongoDB</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiPostman className={styles.icon}/>
              <Text>Postman</Text>
            </Flex>

            <Flex className={styles.skillflex}>
              <FaGit className={styles.icon}/>
              <Text>Git/GitHub</Text>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </Box>
  )
}

export default Skills;