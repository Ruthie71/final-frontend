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
  }
});

const Profile = ({ personalstatement }) => (
  <View style={styles.container}>
    <Title>Personal profile</Title>
    <Text style={styles.content}>{personalstatement}</Text>
  </View>
);

export default Profile;
