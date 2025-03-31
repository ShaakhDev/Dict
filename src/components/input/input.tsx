import {
  ComponentType,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors, sizing, typography} from '@/theme';
import {Text, TextProps} from '@/components';
//   import {EyeIcon, EyeOffIcon} from '@/icons';

export interface InputAccessoryProps {
  style: StyleProp<any>;
  status: InputProps['status'];
  multiline: boolean;
  editable: boolean;
}

export interface InputProps extends Omit<TextInputProps, 'ref'> {
  /**
   * A style modifier for different input states.
   */
  status?: 'error' | 'disabled';
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps['text'];

  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps;
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: TextProps['text'];

  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: TextProps;
  /**
   * The placeholder text to display if not using `placeholderTx`.
   */
  placeholder?: TextProps['text'];

  /**
   * Optional input style override.
   */
  style?: StyleProp<TextStyle>;
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * An optional component to render on the right side of the input.
   * Example: `RightAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  RightAccessory?: ComponentType<InputAccessoryProps>;
  /**
   * An optional component to render on the left side of the input.
   * Example: `LeftAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  LeftAccessory?: ComponentType<InputAccessoryProps>;
  isPassword?: boolean;
  // required?: boolean;
}

/**
 * A component that allows for the entering and editing of text.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/TextField/}
 * @param {InputProps} props - The props for the `TextField` component.
 * @returns {JSX.Element} The rendered `TextField` component.
 */
export const Input = forwardRef(function Input(
  props: InputProps,
  ref: Ref<TextInput>,
) {
  const {
    label,
    placeholder,
    helper,
    status,
    RightAccessory,
    LeftAccessory,
    HelperTextProps,
    LabelTextProps,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    isPassword,
    ...TextInputProps
  } = props;
  const input = useRef<TextInput>(null);
  //   const [isVisible, setIsVisible] = useState(false);
  const disabled = TextInputProps.editable === false || status === 'disabled';

  const placeholderContent = placeholder;

  const $containerStyles = [$containerStyleOverride];

  const $labelStyles = [$labelStyle, LabelTextProps?.style];

  const $inputWrapperStyles = [
    $inputWrapperStyle,
    status === 'error' && {borderColor: colors.heart},
    TextInputProps.multiline && {minHeight: 112},
    LeftAccessory && {paddingStart: 0},
    RightAccessory && {paddingEnd: 0},
    isPassword && {paddingEnd: 10, alignItems: 'center'},
    $inputWrapperStyleOverride,
  ];

  const $inputStyles: StyleProp<TextStyle> = [
    $inputStyle,
    disabled && {color: colors.placeholder},
    TextInputProps.multiline && {height: 'auto'},
    $inputStyleOverride,
  ];

  const $helperStyles = [
    $helperStyle,
    status === 'error' && {color: colors.heart},
    HelperTextProps?.style,
  ];

  /**
   *
   */
  function focusInput() {
    if (disabled) return;

    input.current?.focus();
  }

  useImperativeHandle(ref, () => input.current as TextInput);

  // const renderEye = () => {
  //   return (
  //     <Pressable onPress={() => setIsVisible(!isVisible)}>
  //       {isVisible ? <EyeIcon /> : <EyeOffIcon />}
  //     </Pressable>
  //   );
  // };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles}
      onPress={focusInput}
      accessibilityState={{disabled}}>
      {!!label && (
        <Text
          preset="secondary"
          text={label}
          {...LabelTextProps}
          style={$labelStyles}
        />
      )}

      <View style={$inputWrapperStyles as any}>
        {!!LeftAccessory && (
          <LeftAccessory
            style={$leftAccessoryStyle}
            status={status}
            editable={!disabled}
            multiline={TextInputProps.multiline ?? false}
          />
        )}

        <TextInput
          ref={input}
          underlineColorAndroid={'transparent'}
          textAlignVertical="top"
          placeholder={placeholderContent}
          //   secureTextEntry={isPassword && !isVisible}
          placeholderTextColor={colors.placeholder}
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles}
        />

        {!!RightAccessory && (
          <RightAccessory
            style={$rightAccessoryStyle}
            status={status}
            editable={!disabled}
            multiline={TextInputProps.multiline ?? false}
          />
        )}
        {/* {isPassword && renderEye()} */}
      </View>

      {!!helper && (
        <Text
          text={helper}
          size="xxs"
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </TouchableOpacity>
  );
});

const $labelStyle: TextStyle = {
  color: colors.placeholder,
  fontSize: 11,
  lineHeight: 14,
  textTransform: 'uppercase',
  paddingHorizontal: sizing.md,
  paddingTop: sizing.md,
};

const $inputWrapperStyle: ViewStyle = {
  flexDirection: 'row',
  minWidth: '100%',
  paddingLeft: sizing.xs,
  paddingRight: sizing.sm,
  alignItems: 'flex-start',
  borderRadius: sizing.sm - 2,
  overflow: 'hidden',
  backgroundColor: colors.white,
};

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: 'stretch',
  fontFamily: typography.fonts.inter.normal,
  color: colors.text,
  fontSize: 16,
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginVertical: sizing.xs,
  marginHorizontal: sizing.xs,
};

const $helperStyle: TextStyle = {
  marginTop: sizing.xs,
};

const $rightAccessoryStyle: ViewStyle = {
  marginEnd: sizing.xs,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
};
const $leftAccessoryStyle: ViewStyle = {
  marginStart: sizing.xs,
  height: 40,
  marginLeft: sizing.md,
  justifyContent: 'center',
  alignItems: 'center',
};
