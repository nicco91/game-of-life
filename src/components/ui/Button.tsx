import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary';
  className?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
  className,
  variant,
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {startIcon && <span className="icon icon--start">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="icon icon--end">{endIcon}</span>}
    </button>
  );
};

export default styled(Button)`
  border: none;
  background: ${(props) => props.theme.palette[props.variant].main};
  color: ${(props) => props.theme.palette[props.variant].contrastText};
  cursor: pointer;
  font-size: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  outline: none;
  transition: background 0.2s ease-out;
  display: flex;
  align-items: center;
  line-height: 24px;

  &:hover {
    background: ${(props) => props.theme.palette[props.variant].dark};
  }

  .icon {
    font-size: 24px;
    height: 24px;
    width: 24px;

    &--start {
      margin-right: 0.75rem;
    }

    &--end {
      margin-left: 0.75rem;
    }
  }
`;
