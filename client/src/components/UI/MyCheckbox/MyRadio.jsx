import classes from "./MyRadio.module.css"

const MyRadio = ({name, id, label, checked, onChange, value, about}) => {
    return (
        <div className={classes.MyRadio}>
            <input
                about={about} 
                checked={checked} 
                name={name} 
                id={id} 
                type={"radio"} 
                className={classes.MyRadio}
                onChange={onChange}
                value={value}/>
            <label about={about} htmlFor={id}>{label}</label>
        </div> 
     );
}
 
export default MyRadio;