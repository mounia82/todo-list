import { nanoid } from "nanoid";
import { useState } from "react";
import ToDoForm from "../../components/todo-form/todo-form";
import ToDoList from "../../components/todo-list/todo-list";

const TodoApp = () =>{

    // Définition d'un state pour contenir la liste des taches
  const [tasks, setTasks] = useState([]);

    const  handleNewTask =(data) => {
       const newTask= {
           ...data,
           id:nanoid(),
           isFinish: false
       };

       setTasks(taskElements =>[newTask,...taskElements]);
    };

    const handleDeleteTask = (id) => {
        // Mise à jours de la liste des taches
        // -> Via le filter, on obtient la copie de la liste sans l'element ciblé
        setTasks(taskElements => taskElements.filter(t => t.id !== id));

        // ↓ Ecriture de la meme ligne, sans les fonctions lamdba « A l'ancienne ;) »
        // setTasks(function (taskElements) { return taskElements.filter(function (t) { return t.id !== id; }); });  
    };

    const handleFinishTask = (id) => {
        // Mise à jours de la liste des taches
        // -> Via le map, on transforme les données pour valider de "isFinish" de l'element ciblé
        setTasks(taskElements => taskElements.map(task => (task.id !== id) ? task : {...task, isFinish: true}));
        //  Dans le map : L'operateur ternaire permet de définir si on est sur l'element recherche
        //   - si l'id ne correspond pas, on ne modifie l'objet de la collection
        //   - si l'id correspond, on utilise la décomposition pour mettre à jours les données de la cible.
         

        // ↓ Ecriture alternative (Sans utiliser le map)
        /*
        setTasks(taskElements => {
            const result = [];
            for(const task of taskElements) {
                if(task.id !== id) {
                    result.push(task);
                }
                else {
                    const taskUpdate = {... task, isFinish: true};
                    result.push(taskUpdate);
                }
            }
            return result;
        });
        */
    }

       
        
    

    return(
        <main>
            <ToDoForm onNewTask={handleNewTask}/>
            <ToDoList datas={tasks}
            onDeleteTask={handleDeleteTask}
            onFinishTask={handleFinishTask} />
        </main>
    );
};

export default TodoApp;