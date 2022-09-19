import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCard.module.css"


const ProjectCard = ({ id, src, desc, title, tech, live, git }) => {
    return (
        <Stack className={styles.box2} id={id}>
            <Image className={styles.poster} src={src} alt={title} />
            <Text className={styles.icon}>{title}</Text>
            <Text className={styles.desc}>{desc}</Text>
            <Flex gap={2}>
                {tech.map((t) =>
                    <Text  className={styles.desc}>{` ${t} |`}</Text>)}
            </Flex>
            <Flex justify="space-around">
                <Button
                    className={styles.icon} variant="outline">
                    <a href={git}>
                        < FaGithub />
                    </a></Button>
                <Button className={styles.icon}>
                    <a href={live}>
                        <FaExternalLinkAlt />
                    </a>
                </Button>
            </Flex>
        </Stack>
    )
}

export default ProjectCard