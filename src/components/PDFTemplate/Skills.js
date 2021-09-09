import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11
  }
});

const SkillEntry = ({ personalskills }) => (
  <View>
    <Text style={styles.title}></Text>
    <List>
      {personalskills.map((personalskill, i) => (
        <Item key={i}>{personalskill.name}</Item>
      ))}
    </List>
  </View>
);

const Skills = ({ personalskills }) => (
  <View style={styles.container}>
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
