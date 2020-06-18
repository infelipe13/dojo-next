import { useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Div100Vh = ({ children, className = '' }: Props) => {
  const [minHeight, setMinHeight] = useState('');
  const style = { minHeight };

  const handleResize = () => {
    setMinHeight(`${window.innerHeight}px`);
  };

  useEffect(() => {
    setMinHeight(`${window.innerHeight}px`);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
