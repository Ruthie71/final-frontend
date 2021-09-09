import { Font, Page, View, StyleSheet } from '@react-pdf/renderer';

import Header from './Header';
import Skills from './Skills';
import TechSkills from './TechSkills';

// import TechSkills from "./TechSkills";
import Education from './Education';
import Experience from './Experience';
import Languages from './Languages';
import Profile from './Profile';

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`
});

const Resume = ({
  firstname,
  lastname,
  contact,
  photo,
  address,
  education,
  details,
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
      paddingLeft: 30,
      paddingRight: 30
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      '@media max-width: 400': {
        flexDirection: 'column'
      }
    },
    leftColumn: {
      flexDirection: 'column',
      justifyContent: 'space-round',
      width: 360,
      paddingTop: 30,
      paddingRight: 15,
      '@media max-width: 400': {
        width: '100%',
        paddingRight: 0
      },
      '@media orientation: landscape': {
        width: 200
      }
    },
    rightColumn: {
      flexDirection: 'column',
      paddingLeft: 20,
      marginTop: 60,
      '@media max-width: 400': {
        width: '100%',
        paddingRight: 0
      },
      '@media orientation: landscape': {
        width: 10
      }
    },
    footer: {
      fontSize: 12,
      fontFamily: 'Lato Bold',
      textAlign: 'center',
      marginTop: 15,
      paddingTop: 5,
      borderWidth: 3,
      borderColor: 'gray',
      borderStyle: 'dashed',
      '@media orientation: landscape': {
        marginTop: 10
      }
    }
  });
  return (
    <Page {...props}>
      <Header
        photo={photo}
        firstname={firstname}
        lastname={lastname}
        contact={contact}
        details={details}
        address={address}
        theme={theme}
      />
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Profile personalstatement={personalstatement} />
            <Experience work={work} />
            <Education education={education} />
          </View>
          <View style={styles.rightColumn}>
            <Skills personalskills={personalskills} />
            <TechSkills techskills={techskills} />
            <Languages languages={languages} />
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Resume;
