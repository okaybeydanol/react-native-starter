import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Types
import {AppTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/typography';

interface HomeHeaderProps {
  title: string;
  showCartButton?: boolean;
}

const HomeHeader = ({title, showCartButton = true}: HomeHeaderProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.leftPlaceholder} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        {showCartButton && (
          <TouchableOpacity style={styles.cartButton} onPress={() => {}}>
            <View style={styles.cartButtonInner} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray[50],
    },
    leftPlaceholder: {
      width: 40,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightContainer: {
      width: 40,
      alignItems: 'flex-end',
    },
    title: {
      fontSize: 18,
      fontFamily: fontFamily.semiBold,
      color: colors.gray[900],
    },
    cartButton: {
      width: 32,
      height: 32,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.gray[200],
    },
    cartButtonInner: {
      width: 16,
      height: 16,
      borderRadius: 8,
    },
  });

export default HomeHeader;
