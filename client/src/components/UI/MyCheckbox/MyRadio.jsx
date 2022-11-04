import classes from "./MyRadio.module.css"

const MyRadio = ({name, id, label, checked, onChange, value}) => {
    return (
        <div className={classes.MyRadio}>
            <input 
                checked={checked} 
                name={name} 
                id={id} 
                type={"radio"} 
                className={classes.MyRadio}
                onChange={onChange}
                value={value}/>
            <label htmlFor={id}>{label}</label>
        </div> 
     );
}
 
export default MyRadio;