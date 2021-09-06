import { Text, Font, Page, View, Image, StyleSheet } from "@react-pdf/renderer";

import Header from "./Header";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

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

const Resume = ({ firstname, lastname, contact, photo, theme, ...props }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 30,
        },
        container: {
            color: theme,
            flex: 1,
            flexDirection: "row",
            "@media max-width: 400": {
                flexDirection: "column",
            },
        },
        image: {
            marginBottom: 10,
        },
        leftColumn: {
            flexDirection: "column",
            width: 170,
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
                <View style={styles.leftColumn}>
                    <Image
                        src={`https://cors-anywhere.herokuapp.com/${photo}`}
                        style={styles.image}
                    />
                    <Education />
                    <Skills />
                </View>
                <Experience />
            </View>
            <Text style={styles.footer}>
                This IS the candidate you are looking for
            </Text>
        </Page>
    );
};

export default Resume;
