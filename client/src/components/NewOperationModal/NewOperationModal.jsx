import classes from './NewOperationModal.module.css'
import MyInput from '../UI/MyInput/MyInput'
import MyRadio from '../UI/MyCheckbox/MyRadio';
/*Заменить Категорию из инпута в дропдаун*/

const NewOperationModal = () => {
    return (
        <div className={classes.NewOperationModal}>
            <div className={classes.Header}>Добавить операцию</div>
            <form>
                <MyInput required={"required"} caption={"Название"}/>
                <MyInput caption={"Описание"}/>
                <MyInput caption={"Категория"}/>
                Тип операции*
                <div className={classes.RadioArea}>
                    <MyRadio checked={"checked"} name={"type"} id={"income"} label={"Доход"}/>
                    <MyRadio name={"type"} id={"expense"} label={"Расход"}/>
                </div>
                <MyInput type={"date"} caption={"Дата"}/>
            </form>
        </div>
     );
}
 
export default NewOperationModal;