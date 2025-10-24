import './Button.css';

const Button = ({
    variant = 'primary',
    children,
    icon,
    iconPosition = 'left',
    onClick,
    className = '',
    ...props
}) => {
    return (
        <button className={`btn btn-${variant} ${className}`.trim()} onClick={onClick} {...props}>
            {icon && iconPosition === 'left' && (
                <span className="btn-icon btn-icon-left">{icon}</span>
            )}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && (
                <span className="btn-icon btn-icon-right">{icon}</span>
            )}
        </button>
    );
};

export default Button;

// Usage Examples:
//               <Button variant="primary">Login</Button>

// <Button variant="secondary" icon={<Phone size={18} />}>
//   Schedule a Call
// </Button>

// <Button variant="tertiary" icon={<ArrowRight size={16} />} iconPosition="right">
//   30+ yrs of expertise, behind every decision
// </Button>

//              <Button variant="filled-dark">Start your Journey</Button>
//              <Button variant="outlined">Schedule a Call</Button>
