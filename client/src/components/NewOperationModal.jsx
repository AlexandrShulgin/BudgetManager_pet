import classes from './NewOperationModal.module.css'
import MyInput from './UI/MyInput';

const NewOperationModal = () => {
    return (
        <div className={classes.NewOperationModal}>
            <div className={classes.Header}>Добавить операцию</div>
            <MyInput caption={"Название"}/>
            <MyInput caption={"Описание"}/>
            <MyInput caption={"Категория"}/>
        </div>
     );
}
 
export default NewOperationModal;