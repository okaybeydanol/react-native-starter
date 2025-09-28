// React & React Native
import React from 'react';
import { FlatList, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';

// Internal Imports (Absolute)
import GenericView from '@components/ui/GenericView';
import LoadingIndicator from '@components/ui/LoadingIndicator';
import useHomeUsers from '@features/home/hooks/useHomeUsers';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { HomeContentProps } from './types';

const HomeContent = ({}: HomeContentProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { isLoading, isError, isFetching, data, renderItem, keyExtractor } =
    useHomeUsers();

  const renderContent = () => {
    if (isLoading || isFetching) {
      return <LoadingIndicator color={'tertiary.light'} />;
    }
    if (isError) {
      return <GenericView ns="data" tKey="error" />;
    }
    if (!data?.users?.length) {
      return <GenericView ns="data" tKey="noData" />;
    }

    return (
      <FlatList
        data={data.users}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default HomeContent;
