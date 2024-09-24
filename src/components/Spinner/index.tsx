import { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { SpinnerProps } from '@/@types';

function Spinner(props: SpinnerProps) {
  const { color = 'secondary', size = 'large' } = props;

  const theme = useTheme();

  return <ActivityIndicator size={size} color={theme.colors[color]} />;
}

export default memo(Spinner);
