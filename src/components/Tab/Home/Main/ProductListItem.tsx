import {useTheme} from '@react-navigation/native';
import React, {memo, useMemo} from 'react';
import {View, Text} from 'react-native';

// Types
import {Product} from '@store/api/types';

// Styles
import getStyles from './styles';

const ProductListItem = ({item}: {item: Product}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={styles.productContainer}>
      <Text numberOfLines={1} style={styles.text}>
        {item.title} ({item.meta.barcode})
      </Text>
    </View>
  );
};

export default memo(ProductListItem);
