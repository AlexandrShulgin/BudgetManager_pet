import classes from './MyInput.module.css'
const MyInput = (props) => {
    
    return (
        <div className={classes.MyInputContainer}>
            <div className={classes.MyInputCaption}>{props.required ? props.caption + '*' : props.caption}</div> 
            <input 
                id={props.id} 
                type={props.type} 
                required={props.required} 
                className={classes.MyInput}
                onChange={props.onChange}
                value={props.value}
                min={props.min}
                max={props.max}/>
        </div>
     );
}
 
export default MyInput;