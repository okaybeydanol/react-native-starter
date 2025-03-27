// React & React Native
import React from 'react';
import {SafeAreaView} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Internal Imports (Absolute)
import GlobalHeader from '@components/ui/GlobalHeader';
import type {ButtonConfig} from '@components/ui/types';
import LanguageContent from '@features/settings/components/language/content/LanguageContent';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type {LanguageScreenProps} from './types';

const LanguageScreen = ({navigation, route}: LanguageScreenProps) => {
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
    <SafeAreaView style={styles.container}>
      <GlobalHeader
        showLeftButton={false}
        showRightButton={true}
        rightButtonConfig={defaultRightConfig}
        title={t('choseLanguage')}
      />
      <LanguageContent navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default LanguageScreen;
