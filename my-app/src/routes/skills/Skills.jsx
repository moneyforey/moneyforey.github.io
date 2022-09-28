import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';

import { RiHtml5Line, RiNodeTree } from 'react-icons/ri'
import { SiCss3, SiRedux, SiTypescript, SiChakraui, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaGit } from 'react-icons/fa';
import { VscSymbolArray } from "react-icons/vsc";
import { ImStack } from "react-icons/im";
import { MdOutlineQueue, MdGroups } from "react-icons/md";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { GiRecycle, GiSwapBag, GiTeamIdea, GiTeamDowngrade } from "react-icons/gi";
import styles from "./skills.module.css"


const Skills = () => {
  return (
    <Box my='100px' id='skills'>

      <h2 className={styles.name}>Skills</h2>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={10} >
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
              <TbBrandJavascript className={styles.icon} />
              <Text>JavaScript</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <FaReact className={styles.icon} />
              <Text>React</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiRedux className={styles.icon} />
              <Text>Redux</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiTypescript className={styles.icon} />
              <Text>TypeScript</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiChakraui className={styles.icon} />
              <Text>Chakra UI</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiBootstrap className={styles.icon} />
              <Text>Bootstrap</Text>
            </Flex>
          </Grid>
        </Box>
        <Box className={styles.box2}>
          <h3 className={styles.icon}>Back-end Development</h3>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Flex className={styles.skillflex}>
              <SiNodedotjs className={styles.icon} />
              <Text>Node JS</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiExpress className={styles.icon} />
              <Text>Express JS</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiMongodb className={styles.icon} />
              <Text>MongoDB</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <SiPostman className={styles.icon} />
              <Text>Postman</Text>
            </Flex>

            <Flex className={styles.skillflex}>
              <FaGit className={styles.icon} />
              <Text>Git/GitHub</Text>
            </Flex>
          </Grid>
        </Box>



        <Box className={styles.box2}>
          <h3 className={styles.icon}>Data Structure {"&"} Algorithm</h3>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Flex className={styles.skillflex} >
              <VscSymbolArray className={styles.icon} />
              <Text>Array</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <ImStack className={styles.icon} />
              <Text>Stack</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <MdOutlineQueue className={styles.icon} />
              <Text>Queue</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <AiOutlineNodeIndex className={styles.icon} />
              <Text>Linked List</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <RiNodeTree className={styles.icon} />
              <Text>Tree</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <GiRecycle className={styles.icon} />
              <Text>Recursion</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <GiSwapBag className={styles.icon} />
              <Text>Greedy</Text>
            </Flex>

          </Grid>
        </Box>




        <Box className={styles.box2}>
          <h3 className={styles.icon}>Soft Skills</h3>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Flex className={styles.skillflex} >
              <MdGroups className={styles.icon} />
              <Text>Leadership</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              <GiTeamDowngrade className={styles.icon} />
              <Text>Teamwork</Text>
            </Flex>
            <Flex className={styles.skillflex}>
              < GiTeamIdea className={styles.icon} />
              <Text>Problem-Solving</Text>
            </Flex>
          </Grid>
        </Box>






      </Grid>
     
    </Box>
  )
}

export default Skills;