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
    'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium transition-all duration-100 translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] active:translate-y-[3px] active:translate-x-[3px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-linear-to-r bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] text-foreground dark:text-white [box-shadow:0px_0px_rgb(38_51_129)] hover:[box-shadow:5px_5px_rgb(38_51_129)] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)] focus-visible:outline-[#263381]',
    secondary:
      'bg-white dark:bg-[#070e41] border-2 border-[#263381] text-[#263381] dark:text-white [box-shadow:0px_0px_rgb(38_51_129)] hover:[box-shadow:5px_5px_rgb(38_51_129)] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)] focus-visible:outline-[#263381]',
    'secondary-dark':
      'bg-linear-to-r bg-gradient-to-r from-[#070e41] to-[#263381] border-2 border-[rgb(76_100_255)] text-white [box-shadow:0px_0px_rgb(76_100_255)] hover:[box-shadow:5px_5px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(76_100_255)] focus-visible:outline-white',
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
