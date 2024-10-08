interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
};

const Button = ({children, color, onClick} : Props) => {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>{children}</div>
  )
}

export default Button