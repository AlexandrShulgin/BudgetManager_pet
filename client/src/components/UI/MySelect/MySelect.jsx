import classes from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange, ...props}) => {
    return (
        <div className={classes.MySelect}> 
            <div className={classes.MySelectCaption}>{props.caption}</div> 
            <select id={props.id}
                    value={value}
                    onChange={onChange}>
                <option disabled value=''>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>)}
            </select>
        </div>
     );
}
 
export default MySelect
