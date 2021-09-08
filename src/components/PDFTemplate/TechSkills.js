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

const TechSkillsEntry = ({ techskills }) => (
    <View>
        <Text style={styles.title}> </Text>
        <List>
            {techskills.map((techskill, i) => (
                <Item key={i}>{techskill}</Item>
            ))}
        </List>
    </View>
);

const TechSkills = () => (
    <View>
        <Title>Tech Skills</Title>
        <TechSkillsEntry techskills={[]} />
    </View>
);

export default TechSkills;
