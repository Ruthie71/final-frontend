import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";
import List, { Item } from "./List";

const styles = StyleSheet.create({
    title: {
        fontFamily: "Lato Bold",
        fontSize: 11,
        marginBottom: 10,
    },
    skills: {
        fontFamily: "Lato",
        fontSize: 10,
        marginBottom: 10,
    },
});

const SkillEntry = ({ personalskills }) => (
    <View>
        <Text style={styles.title}></Text>
        <List>
            {personalskills.map((personalskill, i) => (
                <Item key={i}>{personalskill}</Item>
            ))}
        </List>
    </View>
);

const Skills = () => (
    <View>
        <Title>Personal Skills</Title>
        <SkillEntry personalskills={[]} />
    </View>
);

export default Skills;
