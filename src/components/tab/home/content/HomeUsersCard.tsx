import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Types
import {User} from '@store/api/types';
import {AppTheme} from '@theme/types';

// Constants
import {windowWidth} from '@constants/dimensions';
import {fontFamily} from '@constants/typography';

interface HomeUsersCardProps {
  user: User;
}

const HomeUsersCard = ({user}: HomeUsersCardProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{width: windowWidth - 140}}>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {user.firstName} {user.lastName}
          </Text>
          <Text numberOfLines={1} style={styles.department}>
            {user.company.department}
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.age}>Age {user.age}</Text>
          <TouchableOpacity style={styles.viewProfileButton} onPress={() => {}}>
            <Text style={styles.viewProfile}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
      paddingHorizontal: 16,
      borderBottomColor: colors.gray[50],
      borderBottomWidth: 1,
      paddingVertical: 4,
    },
    imageContainer: {
      width: 85,
      height: 85,
      borderRadius: 4,
      overflow: 'hidden',
      marginRight: 24,
      backgroundColor: colors.gray[50],
    },
    image: {
      width: '100%',
      height: '100%',
    },
    textContainer: {
      justifyContent: 'center',
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    name: {
      fontFamily: fontFamily.medium,
      fontSize: 15,
      color: colors.gray[800],
      marginBottom: 4,
    },
    department: {
      fontFamily: fontFamily.regular,
      fontSize: 17,
      color: colors.gray[900],
      marginBottom: 8,
    },
    age: {
      fontFamily: fontFamily.semiBold,
      fontSize: 15,
      color: colors.gray[900],
    },
    viewProfileButton: {
      alignSelf: 'flex-end',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      backgroundColor: colors.background,
    },
    viewProfile: {
      color: colors.splashBackground,
      fontFamily: fontFamily.medium,
      fontSize: 16,
    },
  });

export default HomeUsersCard;
