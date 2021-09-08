import { Text, Font, Page, View, Image, StyleSheet } from "@react-pdf/renderer";

import Header from "./Header";
import Skills from "./Skills";
import TechSkills from "./TechSkills";

// import TechSkills from "./TechSkills";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";
import PersonalProfile from "./PersonalProfile";

Font.register({
    family: "Open Sans",
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
    family: "Lato",
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
    family: "Lato Italic",
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
    family: "Lato Bold",
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = ({
    firstname,
    lastname,
    contact,
    photo,
    education,
    work,
    personalskills,
    languages,
    techskills,
    personalstatement,
    theme,
    ...props
}) => {
    const styles = StyleSheet.create({
        page: {
            padding: 30,
        },
        container: {
            backgroundColor: "pink",
            color: theme,
            flex: 1,
            flexDirection: "row",
            "@media max-width: 400": {
                flexDirection: "column",
            },
        },
        image: {
            height: "100px",
            width: "100px",
            backgroundColor: "green",
            marginBottom: 10,
            marginLeft: "10px",
        },
        leftColumn: {
            flexDirection: "column",
            width: 360,
            paddingTop: 30,
            paddingRight: 15,
            "@media max-width: 400": {
                width: "100%",
                paddingRight: 0,
            },
            "@media orientation: landscape": {
                width: 200,
            },
        },
        rightColumn: {
            flexDirection: "column",
            "@media max-width: 400": {
                width: "100%",
                paddingRight: 0,
            },
            "@media orientation: landscape": {
                width: 10,
            },
        },
        footer: {
            fontSize: 12,
            fontFamily: "Lato Bold",
            textAlign: "center",
            marginTop: 15,
            paddingTop: 5,
            borderWidth: 3,
            borderColor: "gray",
            borderStyle: "dashed",
            "@media orientation: landscape": {
                marginTop: 10,
            },
        },
    });
    return (
        <Page {...props} style={styles.page}>
            <Header firstname={firstname} lastname={lastname} />

            <View style={styles.container}>
                {/* Left column */}
                <View style={styles.leftColumn}>
                    <Image
                        src={`https://cors-anywhere.herokuapp.com/${photo}`}
                        style={styles.image}
                    />
                    <PersonalProfile />

                    <Experience work={work} />

                    <Education education={education} />
                </View>
                {/* Right column */}
                <View style={styles.rightColumn}>
                    <Skills personalskills={personalskills} />

                    <TechSkills techskills={techskills} />

                    <Languages languages={languages} />
                </View>
            </View>
        </Page>
    );
};

export default Resume;
