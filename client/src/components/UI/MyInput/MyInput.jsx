import classes from './MyInput.module.css'
const MyInput = (props) => {
    
    return (
        <div className={classes.MyInputContainer}>
            <div className={classes.MyInputCaption}>{props.required ? props.caption + '*' : props.caption}</div> 
            <input type={props.type} required={props.required}  className={classes.MyInput}/>
        </div>
     );
}
 
export default MyInput;