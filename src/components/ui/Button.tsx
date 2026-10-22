import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'secondary-dark';

interface CommonButtonProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ActionButtonProps = CommonButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: undefined;
  };

type LinkButtonProps = CommonButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    href: string;
  };

export type ButtonProps = ActionButtonProps | LinkButtonProps;

export function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 translate-x-[2px] hover:translate-x-[0px] translate-y-[2px] hover:translate-y-[0px] active:translate-y-[2px] active:translate-x-[2px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-[#1E4BD9] to-[#285BFF] hover:from-[#1A42C5] hover:to-[#2250EA] border-2 border-[#1E4BD9] dark:border-[#3E74FF] text-white [box-shadow:2px_2px_rgb(21_59_184)] hover:[box-shadow:4px_4px_rgb(21_59_184)] active:[box-shadow:1px_1px_rgb(21_59_184)] dark:[box-shadow:2px_2px_rgb(25_60_184)] dark:hover:[box-shadow:4px_4px_rgb(62_116_255)] dark:active:[box-shadow:1px_1px_rgb(25_60_184)] focus-visible:outline-accent',
    secondary:
      'bg-card border-2 border-border hover:border-accent/80 text-ink dark:text-white [box-shadow:2px_2px_rgba(16,26,53,0.08)] hover:[box-shadow:4px_4px_rgba(40,91,255,0.2)] active:[box-shadow:1px_1px_rgba(16,26,53,0.08)] dark:bg-card/90 dark:border-border dark:hover:border-accent dark:[box-shadow:2px_2px_rgba(0,0,0,0.5)] dark:hover:[box-shadow:4px_4px_rgba(62,116,255,0.35)] dark:active:[box-shadow:1px_1px_rgba(0,0,0,0.5)] focus-visible:outline-accent',
    'secondary-dark':
      'bg-gradient-to-r from-[#0E1B3E] to-[#142656] border-2 border-[rgb(76_100_255)] text-white [box-shadow:2px_2px_rgb(76_100_255)] hover:[box-shadow:4px_4px_rgb(76_100_255)] active:[box-shadow:1px_1px_rgb(76_100_255)] focus-visible:outline-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as LinkButtonProps;
    return (
      <a href={href} className={combinedStyles} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ActionButtonProps;
  return (
    <button type="button" className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
