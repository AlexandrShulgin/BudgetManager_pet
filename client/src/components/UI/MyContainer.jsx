import classes from './MyContainer.module.css'

const MyContainer = (props) => {
    return ( 
        <div className={`${classes.MyContainer} ${props.className}`}>
            
            {props.children}
            
        </div>
     );
}
 
export default MyContainer;