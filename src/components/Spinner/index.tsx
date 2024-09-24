import { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { SpinnerProps } from '@/@types';

function Spinner(props: SpinnerProps) {
  const { color = 'secondary' } = props;

  const theme = useTheme();

  return <ActivityIndicator size='small' color={theme.colors[color]} />;
}

export default memo(Spinner);
