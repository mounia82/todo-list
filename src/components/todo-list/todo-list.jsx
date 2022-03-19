import style from "./todo-list.module.css";
import TodoListItem from "./todo-list-item";
import PropTypes from "prop-types";

const TodoList = (props)=> {


    const tasksJSX = props.datas.map(
        // Utilisation du composant "item" précédement créé.
        task => <TodoListItem {...task} key={task.id}
        onDelete={props.onDeleteTask}
        onFinish={props.onFinishTask} />
            
    );

    
    return (
        <div className={style.listApp}>
            <h2>La liste des taches</h2>
            <div className={style.listContent}>
                {tasksJSX}
            </div>
        </div>
    );
}


    TodoList.defaultProps ={
    datas: [],
    onDeleteTask: () => {},
    onFinishTask: () => {}
    };

    TodoList.propTypes = {
        datas:PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired
            //permet de définir que l'array doit contenir au minimuum l'id
        })),
        
        onDeleteTask: PropTypes.func,
        onFinishTask: PropTypes.func 
    

};

export default TodoList;

