import classes from "./MyRadio.module.css"

const MyRadio = ({name, id, label, checked}) => {
    return (
        <div className={classes.MyRadio}>
            <input checked={checked} name={name} id={id} type={"radio"} className={classes.MyRadio}/>
            <label for={id}>{label}</label>
        </div> 
     );
}
 
export default MyRadio;