import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
    leftIcon,
    className,
    disabled,
    children,
    onClick,
    ...passProps }) {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        leftIcon,
        className,
        disabled,
        rounded
    });

    if (disabled) {
        delete props.onClick
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;