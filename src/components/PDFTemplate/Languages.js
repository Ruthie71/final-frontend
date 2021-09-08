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

const LanguageEntry = ({ languages }) => (
    <View>
        <Text style={styles.title}></Text>
        <List>
            {languages.map((language, i) => (
                <Item key={i}>{language}</Item>
            ))}
        </List>
    </View>
);

const Languages = () => (
    <View>
        <Title>Languages</Title>
        <LanguageEntry languages={[]} />
    </View>
);

export default Languages;
