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
    'inline-flex items-center justify-center min-h-[48px] px-6 text-sm font-semibold rounded-[2px] transition-[color,background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(23,37,29,0.12)] active:translate-y-0 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-white hover:bg-[#C84825] active:bg-[#AE3C20]',
    secondary:
      'border border-ink text-ink bg-transparent hover:bg-ink/5 active:bg-ink/10',
    'secondary-dark':
      'border border-white/70 text-white bg-transparent hover:bg-white/10 active:bg-white/15 focus-visible:outline-white',
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
