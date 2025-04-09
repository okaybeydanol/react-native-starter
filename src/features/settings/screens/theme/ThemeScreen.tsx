// React & React Native
import React from 'react';
import {View} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Internal Imports (Absolute)
import GlobalHeader from '@components/ui/GlobalHeader';
import type {ButtonConfig} from '@components/ui/types';
import ThemeContent from '@features/settings/components/theme/content/ThemeContent';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type {ThemeScreenProps} from './types';

const ThemeScreen = ({navigation, route}: ThemeScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t} = useTranslation('home');

  const defaultRightConfig: ButtonConfig = {
    icon: 'close',
    iconProps: {
      stroke: colors.gray[500],
      strokeWidth: 1.5,
      width: 18,
      height: 18,
    },
    onPress: () => navigation.goBack(),
  };

  return (
    <View style={styles.container}>
      <GlobalHeader
        showLeftButton={false}
        showRightButton={true}
        rightButtonConfig={defaultRightConfig}
        title={t('choseTheme')}
      />
      <ThemeContent navigation={navigation} route={route} />
    </View>
  );
};

export default ThemeScreen;
