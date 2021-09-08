import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch'
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase'
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end'
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold'
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato'
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end'
  }
});

export default ({ firstname, lastname, contact, details, address }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>
        {firstname} {lastname}
      </Text>
      <Text style={styles.subtitle}>{details.jobtitle}</Text>
      <Text
        style={styles.subtitle}
      >{`${address.street} ${address.housenr} |  ${address.zipcode} |  ${address.city} `}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href={`mailto:${contact.email}`} style={styles.link}>
        {contact.email}
      </Link>
      <Link href={contact.linkedin} style={styles.link}>
        LinkedIn
      </Link>
      <Link href={contact.git} style={styles.link}>
        Github
      </Link>
    </View>
  </View>
);
