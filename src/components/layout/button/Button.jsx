import React from 'react'
import Styles from './button.module.css'

const Button = (props) => {
    const {variant, func} = props
    const [btnStyles, setBtnStyles] = React.useState(Styles.outlined);

    React.useEffect(() => {
        if(variant === "outlined"){
            setBtnStyles(Styles.outlined);
        }else if(variant ==="contained"){
            setBtnStyles(Styles.contained);
        }
    },[variant, btnStyles])

    return (
        <button onClick={func} className={btnStyles}>{props.children}</button>
    )
}

export default Button