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

const LanguageEntry = ({ languages }) => (
  <View>
    <Text style={styles.title}></Text>
    <List>
      {languages.map(language => (
        <Item>{language.name}</Item>
      ))}
    </List>
  </View>
);

const Languages = ({ languages }) => (
  <View>
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
