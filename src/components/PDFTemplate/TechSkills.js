import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10
  }
});

const TechSkillsEntry = ({ techskills }) => (
  <View>
    <Text style={styles.title}> </Text>
    <List>
      {techskills.map(techskill => (
        <Item>{techskill.name}</Item>
      ))}
    </List>
  </View>
);

const TechSkills = ({ techskills }) => (
  <View>
    {techskills.length > 0 ? (
      <>
        <Title>Tech skills</Title>
        <TechSkillsEntry techskills={techskills} />
      </>
    ) : (
      <Title>Add some tech skills</Title>
    )}
  </View>
);

export default TechSkills;
