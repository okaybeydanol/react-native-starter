// React & React Native
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { HomeUsersCardProps } from './types';

const HomeUsersCard = ({ user }: HomeUsersCardProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation('home');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://xsgames.co/randomusers/avatar.php?g=${user.gender}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {user.firstName} {user.lastName}
          </Text>
          <Text numberOfLines={1} style={styles.department}>
            {user.company.department}
          </Text>
        </View>
        <View style={styles.bottomViewContainer}>
          <Text style={styles.age}>
            {t('age')} {user.age}
          </Text>
          <TouchableOpacity style={styles.viewProfileButton} onPress={() => {}}>
            <Text style={styles.viewProfile}>{t('viewProfile')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(HomeUsersCard);
