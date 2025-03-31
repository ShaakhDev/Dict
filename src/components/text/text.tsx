import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {colors, typography} from '@/theme';

type Sizes = keyof typeof $sizeStyles;
type Weights = keyof typeof typography.fonts.inter;
type Presets = keyof typeof $presets;

export interface TextProps extends RNTextProps {
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Text weight modifier.
   */
  weight?: Weights;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 */
export function Text(props: TextProps): JSX.Element {
  const {weight, size, children, text, style: $styleOverride, ...rest} = props;

  const content = text ?? children;
  const preset: Presets = props.preset ?? 'default';
  const $styles: StyleProp<TextStyle> = [
    $presets[preset],
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  xxl: {fontSize: 36, lineHeight: 44} satisfies TextStyle,
  xl: {fontSize: 24, lineHeight: 34} satisfies TextStyle,
  lg: {fontSize: 20, lineHeight: 32} satisfies TextStyle,
  md: {fontSize: 18, lineHeight: 26} satisfies TextStyle,
  sm: {fontSize: 16, lineHeight: 24} satisfies TextStyle,
  xs: {fontSize: 13, lineHeight: 21} satisfies TextStyle,
  xxs: {fontSize: 11, lineHeight: 18} satisfies TextStyle,
};

const $fontWeightStyles = Object.entries(typography.fonts.inter).reduce(
  (acc, [weight, fontFamily]) => {
    return {...acc, [weight]: {fontFamily}};
  },
  {},
) as Record<Weights, TextStyle>;

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  {color: colors.text},
];

const $presets = {
  default: $baseStyle,
  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,
  bebasFont: [
    $sizeStyles.sm,
    {fontFamily: typography.fonts.bebas.normal, color: colors.text},
  ] as StyleProp<TextStyle>,
  secondary: [$baseStyle, {color: colors.placeholder}] as StyleProp<TextStyle>,
  errorText: [
    $baseStyle,
    {color: colors.heart},
    $sizeStyles['xxs'],
  ] as StyleProp<TextStyle>,
};
