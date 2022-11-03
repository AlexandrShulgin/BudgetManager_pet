import classes from './MyButton.module.css'

const MyButton = (props) => {
    return ( 
        <button
            style={{width: props.width, height: props.height, backgroundColor: props.backgroundColor}} 
            className={classes.MyButton}>
                {props.children}
        </button>
     );
}
 
export default MyButton;