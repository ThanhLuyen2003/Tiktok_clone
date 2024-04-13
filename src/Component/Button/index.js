import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";
import PropType from 'prop-types'
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
        disabled,
        rounded,
        className,
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

Button.proTypes = {
    to: PropType.string,
    href: PropType.string,
    primary: PropType.bool,
    outline: PropType.bool,
    small: PropType.bool,
    large: PropType.bool,
    text: PropType.bool,
    rounded: PropType.bool,
    leftIcon: PropType.bool,
    className: PropType.node,
    disabled: PropType.bool,
    children: PropType.node.isRequired,
    onClick: PropType.func,
}

export default Button;