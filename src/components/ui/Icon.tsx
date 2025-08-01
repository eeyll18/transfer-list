import React from 'react';

type IconName = 'arrow-up' | 'arrow-down' | 'double-arrow-up' | 'double-arrow-down';

const iconPaths: Record<IconName, React.ReactNode> = {
  'arrow-down': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />,
  'arrow-up': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />,
  'double-arrow-down': (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l7 7-7 7" />
    </>
  ),
  'double-arrow-up': (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 19l-7-7 7-7" />
    </>
  ),
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const rotationClass = name === 'double-arrow-down' || name === 'double-arrow-up' ? 'lg:rotate-0 rotate-90' : '';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ${rotationClass} ${className || ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
};