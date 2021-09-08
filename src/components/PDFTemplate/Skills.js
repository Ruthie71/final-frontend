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
            {personalskills.map((personalskill) => (
                <Item>{personalskill.name}</Item>
            ))}
        </List>
    </View>
);

const Skills = ({ personalskills }) => (
    <View>
        {personalskills.length > 0 ? (
            <>
                <Title>Personal Skills</Title>
                <SkillEntry personalskills={personalskills} />
            </>
        ) : (
            <Title>Add some personal skills</Title>
        )}
    </View>
);

export default Skills;
