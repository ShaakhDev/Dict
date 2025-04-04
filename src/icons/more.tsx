import {SvgProps, Svg, Path} from 'react-native-svg';

export const MoreIcon = (props: SvgProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M5.01562 10H7.01562C9.01562 10 10.0156 9 10.0156 7V5C10.0156 3 9.01562 2 7.01562 2H5.01562C3.01562 2 2.01562 3 2.01562 5V7C2.01562 9 3.01562 10 5.01562 10Z"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0156 10H19.0156C21.0156 10 22.0156 9 22.0156 7V5C22.0156 3 21.0156 2 19.0156 2H17.0156C15.0156 2 14.0156 3 14.0156 5V7C14.0156 9 15.0156 10 17.0156 10Z"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0156 22H19.0156C21.0156 22 22.0156 21 22.0156 19V17C22.0156 15 21.0156 14 19.0156 14H17.0156C15.0156 14 14.0156 15 14.0156 17V19C14.0156 21 15.0156 22 17.0156 22Z"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.01562 22H7.01562C9.01562 22 10.0156 21 10.0156 19V17C10.0156 15 9.01562 14 7.01562 14H5.01562C3.01562 14 2.01562 15 2.01562 17V19C2.01562 21 3.01562 22 5.01562 22Z"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
