import React, {useCallback} from 'react';
import {useTheme} from '@react-navigation/native';
import {FlatList, View} from 'react-native';

// Queries
import {useUsers} from '@query/queries/useUsers';

// Components
import GenericView from '@components/ui/GenericView';
import LoadingIndicator from '@components/ui/LoadingIndicator';
import HomeUsersCard from './users-card/HomeUsersCard';

// Types
import type {HomeContentProps} from './types';
import type {User} from '@query/api/types';

// Styles
import createStyles from './styles';

const HomeContent = ({}: HomeContentProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {isLoading, isError, isFetching, data} = useUsers();

  const renderItem = useCallback(
    ({item}: {item: User}) => <HomeUsersCard user={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: User, index: number) => `${item.id}-${item.firstName}-${index}`,
    [],
  );

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
