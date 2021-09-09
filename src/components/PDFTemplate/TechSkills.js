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

const TechSkillsEntry = ({ techskills }) => (
  <View>
    <Text style={styles.title}> </Text>
    <List>
      {techskills.map((techskill, i) => (
        <Item key={i}> {techskill.name}</Item>
      ))}
    </List>
  </View>
);

const TechSkills = ({ techskills }) => (
  <View style={styles.container}>
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
