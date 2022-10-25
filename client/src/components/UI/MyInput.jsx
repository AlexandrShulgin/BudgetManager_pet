import classes from './MyInput.module.css'
const MyInput = (props) => {
    
    return (
        <div className={classes.MyInputContainer}>
            <div className={classes.MyInputCaption}>{props.caption}</div> 
            <input type={props.type} className={classes.MyInput}/>
        </div>
     );
}
 
export default MyInput;