import classes from './MyButton.module.css'

const MyButton = (props) => {
    
    return ( 
        <button
            className={`${classes.MyButton} ${props.className}`}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}>
                {props.children}
        </button>
     );
}
 
export default MyButton;