import { memo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import { AddButtonProps, AddButtonVariant } from '@/@types';

import Icon from '../Icon';
import { Button, ButtonWrapper } from './styled';

function AddButton(props: AddButtonProps) {
  const { variant = 'add-address', onPress } = props;

  const theme = useTheme();

  const positionXAnimation = useSharedValue<number>(0);
  const positionYAnimation = useSharedValue<number>(0);
  const previousPositionXAnimation = useSharedValue<number>(0);
  const previousPositionYAnimation = useSharedValue<number>(0);

  const buttonAnimated = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionXAnimation.value },
      { translateY: positionYAnimation.value },
    ],
  }));

  const commonSpringProps = {
    damping: 12,
    stiffness: 96,
    restSpeedThreshold: 0.01,
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      previousPositionXAnimation.value = positionXAnimation.value;
      previousPositionYAnimation.value = positionYAnimation.value;
    })
    .onChange(event => {
      positionXAnimation.value =
        event.translationX + previousPositionXAnimation.value;
      positionYAnimation.value =
        event.translationY + previousPositionYAnimation.value;
    })
    .onEnd(() => {
      positionXAnimation.value = withSpring(0, commonSpringProps);
      positionYAnimation.value = withSpring(0, commonSpringProps);
    });

  const icons: Record<AddButtonVariant, React.JSX.Element> = {
    'add-address': <Icon variant='map-pin-plus' size='large' />,
    'add-gas': <Icon variant='plus-circle' size='large' />,
  };

  return (
    <GestureDetector gesture={panGesture}>
      <ButtonWrapper style={[buttonAnimated, theme.boxShadow]}>
        <Button activeOpacity={0.7} onPress={onPress}>
          {icons[variant]}
        </Button>
      </ButtonWrapper>
    </GestureDetector>
  );
}

export default memo(AddButton);
