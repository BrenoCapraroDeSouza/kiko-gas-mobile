import { memo, useMemo } from 'react';

import { Colors, CylinderCardProps } from '@/@types';

import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import {
  ActionButton,
  Container,
  Content,
  CylinderPresentation,
} from './styled';

function CylinderCard(props: CylinderCardProps) {
  const { name, description, tare, status } = props;

  function onDelete(): void {}

  function onReplenishment(): void {}

  const isReplenishment = status === 'replenishment';
  const disableColor: Colors = isReplenishment ? 'primary50' : 'primary';

  const renderCylinderIcon = useMemo(() => {
    if (tare > 75)
      return <Icon variant='battery-vertical-full' color={disableColor} />;
    else if (tare <= 75 && tare > 50)
      return <Icon variant='battery-vertical-high' color={disableColor} />;
    else if (tare <= 50 && tare > 25)
      return <Icon variant='battery-vertical-medium' color={disableColor} />;
    else if (tare <= 25 && tare > 5)
      return <Icon variant='battery-vertical-low' color={disableColor} />;
    else if (tare <= 5 && tare > 0)
      return <Icon variant='battery-warning-vertical' color={disableColor} />;
    else return <Icon variant='battery-vertical-empty' color={disableColor} />;
  }, [tare]);

  return (
    <Container isReplenishment={isReplenishment}>
      <CylinderPresentation>
        {renderCylinderIcon}

        <Text
          color={disableColor}
          fontFamily='semiBold'
          numberOfLines={1}
          ellipsizeMode='tail'
          isGrow
        >
          Gás {name} - {description}
        </Text>

        <ActionButton
          activeOpacity={0.7}
          enabled={!isReplenishment}
          onPress={onDelete}
        >
          <Icon
            variant={isReplenishment ? 'arrows-counter-clockwise' : 'trash'}
            color='primary'
          />
        </ActionButton>
      </CylinderPresentation>

      <Content>
        <Text color={isReplenishment ? 'secondary70' : 'secondary'}>
          Nível atual do Gás: {tare.toFixed(1)}%
        </Text>

        <Button
          title={isReplenishment ? 'Em andamento' : 'Reabastecer'}
          isDisabled={isReplenishment}
          icon='oven'
          onPress={onReplenishment}
        />
      </Content>
    </Container>
  );
}

export default memo(CylinderCard);
