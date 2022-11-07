import { Box,Heading, Img, Stack, Text } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import styles from "./statistics.module.css"



const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();

        return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
        );
    });
};

const Statistics = () => {

    return (
        <Box p="100px" backgroundColor="#4db5ff" width="100%">
            <Heading className={styles.name}>Statistics</Heading>
            <Text>My contributions</Text>
            <Stack justify="space-around" alignItems='center'>
               
                <GitHubCalendar
                    username="moneyforey"
                    transformData={selectLastHalfYear}
                    hideColorLegend />
                 <Box>
                <Img src='https://github-readme-stats.vercel.app/api?username=moneyforey' alt='moneyforey'/>
               </Box>
               <Box>
               <Img align="left" src="https://github-readme-stats.vercel.app/api/top-langs/?username=moneyforey&layout=compact" alt="moneyforey" />
               </Box>
               <Box>
                <Img src='https://streak-stats.demolab.com/?user=moneyforey' alt='moneyforey'/>
               </Box>
            </Stack>
           
        </Box>
    )
}

export default Statistics;