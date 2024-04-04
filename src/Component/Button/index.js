import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({ to,
    href,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
    disabled,
    children,
    onclick,
    ...passProps }) {

    let Comp = 'button';

    const props = {
        onclick,
        ...passProps
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    });

    if (disabled) {
        delete props.onclick
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
            <span>{children}</span>
        </Comp>
    );
}

export default Button;