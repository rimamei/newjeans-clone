import { SVGProps } from 'react';

interface ArrowRight2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const ArrowRight2 = ({
  color = '#000',
  size = 32,
  strokeWidth = 3,
  ...rest
}: ArrowRight2Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
      ></path>
    </svg>
  );
};

export default ArrowRight2;
