import style from './todo-list-item.module.css';
import PropTypes from"prop-types";
import classNames from "classnames";


const TodoListItem =(props) =>{
    const {id, name, desc,priority, isFinish} = props;


    const {onFinish, onDelete}=props;

    const styleTask =classNames({
        [style.task]:true,
        [style.isDone]:isFinish
    })
    

    return (
        <div className={styleTask}>
            <div className={style.taskInfo}>
                <h3>{name} {(priority === 'high') && <span className={style.urgent}>(Urgent)</span>}</h3>
                {(desc.trim() !== '') ? (
                    <p>{desc}</p>
                ): (
                    <p>Aucune description...</p>
                )}
            </div>
            <div className={style.taskAction}>
                <button onClick={() => onFinish(id)} disabled={isFinish}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </div>
    )
}


TodoListItem.defaultProps = {
    onFinish: () => {},
    onDelete: () => {}
}

TodoListItem.prototypes = {
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    priority:PropTypes.string.isRequired,
    isFinish:PropTypes.bool.isRequired,
    onFinish:PropTypes.func,
    onDelete:PropTypes.func
}

export default TodoListItem;