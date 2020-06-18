import clsx from 'clsx';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children, className }: Props) => (
  <div className={clsx(className, 'px-16 mx-auto max-w-7xl sm:px-32')}>
    {children}
  </div>
);
