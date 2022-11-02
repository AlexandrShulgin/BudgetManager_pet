
import classes from './MyContainer.module.css'

const MyContainer = (props) => {
    return ( 
        <div onClick={props.clickHandler} className={`${classes.MyContainer} ${props.className}`}>
            
            {props.children}
            
        </div>
     );
}
 
export default MyContainer;