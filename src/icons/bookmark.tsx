import {SvgProps, Svg, Path} from 'react-native-svg';

export const BookmarkIcon = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.25 9.04999C11.03 9.69999 12.97 9.69999 14.75 9.04999"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
        stroke={props.stroke || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
