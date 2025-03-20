import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Components
import RadioButton from '@components/ui/RadioButton';

// Constants
import {fontFamily} from '@constants/typography';

// Types
import type {SingleSelectionProps} from './types';
import type {AppTheme} from '@theme/types';

const SingleSelection = ({onPress, title, isActive}: SingleSelectionProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <RadioButton onPress={onPress} isActive={isActive} />
      <TouchableOpacity style={styles.settingItem} onPress={onPress}>
        <Text style={styles.settingText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleSelection;

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray[100],
    },
    settingItem: {
      marginLeft: 16,
      paddingVertical: 15,
      width: '100%',
    },
    settingText: {
      fontSize: 16,
      color: colors.gray[900],
      fontFamily: fontFamily.regular,
    },
  });
