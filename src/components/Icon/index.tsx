import {
  ArrowsCounterClockwise,
  BatteryVerticalEmpty,
  BatteryVerticalFull,
  BatteryVerticalHigh,
  BatteryVerticalLow,
  BatteryVerticalMedium,
  BatteryWarningVertical,
  CaretLeft,
  CaretRight,
  CheckCircle,
  CopySimple,
  Eye,
  EyeSlash,
  IconProps as PhosphorIconProps,
  MapPinPlus,
  MapTrifold,
  Money,
  Oven,
  PixLogo,
  PlusCircle,
  Trash,
  X,
} from 'phosphor-react-native';
import { memo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { IconProps, IconSize, IconVariant } from '@/@types';

function Icon(props: IconProps) {
  const { variant, color = 'secondary', size = 'default' } = props;

  const theme = useTheme();

  const iconSizes: Record<IconSize, number> = {
    small: RFValue(16),
    default: RFValue(24),
    large: RFValue(32),
    'x-large': RFValue(48),
    giant: RFValue(64),
  };

  const commonIconProps: PhosphorIconProps = {
    color: theme.colors[color],
    size: iconSizes[size],
  };

  const icons: Record<IconVariant, React.JSX.Element> = {
    'arrows-counter-clockwise': <ArrowsCounterClockwise {...commonIconProps} />,
    'eye-slash': <EyeSlash {...commonIconProps} />,
    'battery-vertical-empty': <BatteryVerticalEmpty {...commonIconProps} />,
    'battery-vertical-full': <BatteryVerticalFull {...commonIconProps} />,
    'battery-vertical-high': <BatteryVerticalHigh {...commonIconProps} />,
    'battery-vertical-low': <BatteryVerticalLow {...commonIconProps} />,
    'battery-vertical-medium': <BatteryVerticalMedium {...commonIconProps} />,
    'battery-warning-vertical': <BatteryWarningVertical {...commonIconProps} />,
    'caret-left': <CaretLeft {...commonIconProps} />,
    'caret-right': <CaretRight {...commonIconProps} />,
    'check-circle': <CheckCircle {...commonIconProps} />,
    'copy-simple': <CopySimple {...commonIconProps} />,
    'map-pin-plus': <MapPinPlus {...commonIconProps} />,
    'map-trifold': <MapTrifold {...commonIconProps} />,
    'pix-logo': <PixLogo {...commonIconProps} />,
    'plus-circle': <PlusCircle {...commonIconProps} />,
    eye: <Eye {...commonIconProps} />,
    trash: <Trash {...commonIconProps} />,
    money: <Money {...commonIconProps} />,
    oven: <Oven {...commonIconProps} />,
    x: <X {...commonIconProps} />,
  };

  return icons[variant];
}

export default memo(Icon);
