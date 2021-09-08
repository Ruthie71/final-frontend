import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";
import List, { Item } from "./List";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "hotpink",
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        "@media max-width: 400": {
            paddingTop: 10,
            paddingLeft: 0,
        },
    },
    entryContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 11,
        fontFamily: "Lato Italic",
    },
    detailContainer: {
        flexDirection: "row",
    },
    detailLeftColumn: {
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
    },
    detailRightColumn: {
        flexDirection: "column",
        flexGrow: 9,
    },
    bulletPoint: {
        fontSize: 10,
    },
    details: {
        fontSize: 10,
        fontFamily: "Lato",
    },
    headerContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: "column",
        flexGrow: 9,
    },
    rightColumn: {
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "flex-end",
        justifySelf: "flex-end",
    },
    title: {
        fontSize: 11,
        textDecoration: "none",
        fontFamily: "Lato Bold",
    },
});

const EducationEntry = ({
    coursename,
    startdate,
    finishdate,
    location,
    academicinstitute,
    coursecontent,
}) => {
    const title = `${coursename} | ${location}`;
    return (
        <View style={styles.entryContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.leftColumn}>{academicinstitute}</Text>
                    <View style={styles.rightColumn}>
                        <Text style={styles.date}>
                            {startdate}
                            {finishdate}
                        </Text>
                    </View>
                </View>
                <List>
                    <Item style={styles.detailContainer}>{coursecontent}</Item>
                </List>
            </View>
        </View>
    );
};

const Education = ({ education }) => (
    <View style={styles.container}>
        <Title>Education</Title>
        {education.map(
            ({
                coursename,
                startdate,
                finishdate,
                location,
                academicinstitute,
                coursecontent,
            }) => (
                <EducationEntry
                    coursename={coursename}
                    startdate={startdate}
                    finishdate={finishdate}
                    location={location}
                    academicinstitute={academicinstitute}
                    coursecontent={coursecontent}
                />
            )
        )}
    </View>
);

export default Education;
