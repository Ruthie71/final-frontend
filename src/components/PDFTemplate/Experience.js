import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0
    }
  },
  content: {
    fontSize: 11
  },
  entryContainer: {
    marginBottom: 10
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic'
  },
  detailContainer: {
    flexDirection: 'row'
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9
  },
  bulletPoint: {
    fontSize: 10
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato'
  },
  headerContainer: {
    flexDirection: 'column',
    marginBottom: 10
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9
  },
  rightColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifySelf: 'flex-end'
  },
  title: {
    fontSize: 11,
    textDecoration: 'none',
    fontFamily: 'Lato Bold'
  }
});

const ExperienceEntry = ({ jobtitle, startdate, finishdate, companyname, location, keyachievements }) => {
  const title = `${companyname} | ${location}`;
  return (
    <>
      <View style={styles.entryContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>{title} dd</Text>
          </View>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>{jobtitle}</Text>
            <View style={styles.leftColumn}>
              <Text style={styles.date}>
                {startdate} / {finishdate}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.content}>{keyachievements}</Text>
      </View>
    </>
  );
};

const WorkExperience = ({ work }) => (
  <View style={styles.container}>
    <Title>Work Experience</Title>
    {work.map(({ jobtitle, startdate, finishdate, companyname, location, keyachievements }, i) => (
      <ExperienceEntry
        key={i}
        jobtitle={jobtitle}
        startdate={startdate}
        finishdate={finishdate}
        location={location}
        companyname={companyname}
        keyachievements={keyachievements}
      />
    ))}
  </View>
);

export default WorkExperience;
