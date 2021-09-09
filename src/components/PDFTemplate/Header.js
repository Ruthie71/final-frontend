import { Link, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const Header = ({ firstname, lastname, contact, details, address, theme, photo }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 30,
      backgroundColor: theme.backgroundColor,
      color: theme.color,
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
    imageContainer: {
      height: '100px'
    },
    image: {
      objectFit: 'cover',
      marginBottom: 10,
      marginRight: '20px',
      borderRadius: '50%',
      borderStyle: 'solid',
      borderColor: theme.color,
      borderWidth: '5px'
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
      color: theme.color,
      textDecoration: 'none',
      alignSelf: 'flex-end',
      justifySelf: 'flex-end'
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image src={`https://cors-anywhere.herokuapp.com/${photo}`} style={styles.image} />
      </View>
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
};

export default Header