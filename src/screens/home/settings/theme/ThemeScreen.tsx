import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

// Components
import ThemeContent from '@components/home/settings/theme/content/ThemeContent';
import GlobalHeader from '@components/ui/GlobalHeader';

// Types
import type {ThemeScreenProps} from './types';
import type {ButtonConfig} from '@components/ui/types';

// Styles
import createStyles from './styles';

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
