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

const LanguageEntry = ({ languages }) => (
  <View>
    <Text style={styles.title}></Text>
    <List>
      {languages.map((language, i) => (
        <Item key={i}>{language.name}</Item>
      ))}
    </List>
  </View>
);

const Languages = ({ languages }) => (
  <View style={styles.container}>
    {languages.length > 0 ? (
      <>
        <Title>Languages</Title>
        <LanguageEntry languages={languages} />
      </>
    ) : (
      <Title>Add your language skills</Title>
    )}
  </View>
);

export default Languages;
