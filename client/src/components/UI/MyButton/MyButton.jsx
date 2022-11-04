import classes from './MyButton.module.css'

const MyButton = (props) => {
    
    return ( 
        <button
            className={`${classes.MyButton} ${props.className}`}
            type={props.type}>
                {props.children}
        </button>
     );
}
 
export default MyButton;