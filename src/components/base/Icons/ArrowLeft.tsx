import { SVGProps } from 'react';

interface ArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

const ArrowLeft = ({
  color = '#ffffff',
  size = 32,
  ...rest
}: ArrowLeftProps) => {
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
        strokeWidth="1.5"
        d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      ></path>
    </svg>
  );
};

export default ArrowLeft;
