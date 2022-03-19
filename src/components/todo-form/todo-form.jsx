import style from'./todo-form.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import PropTypes from 'prop-types';


// const priorityEnum={
//     Normal:'normal',
//     Urgent:'urgent',
//     low:'basse'
// }

const ToDoForm =(props)=>{


    const [name, setName]=useState('');
    const [desc, setDesc]=useState('');
    const[priority, setPriority]=useState('Normal');



    const handleSubmit = (e) => {
        e.preventDefault();

        const data ={
            name,
            desc,
            priority:priority
          
        };
       

        // ↓ On envoie à l'app les données
        props.onNewTask(data);
        setName('');
        setDesc('');
        setPriority('normal');
        // handleResetForm();
    }
    
   

    

    return(<>
        <h1>Nouvelle tache</h1>
            <form className ={style.formTask}onSubmit={handleSubmit}>
                <div className={classNames(style.inputUser, style.inputName)}>

                <label htmlFor='name'>Nom</label>
                    <input type='text' id='name' required value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className={classNames(style.inputUser, style.inputDesc)}>

                <label htmlFor='desc'>Description</label>
                    <input type='text' id='desc' required value={desc} onChange={(e)=>setDesc(e.target.value)} />
                </div>
                <div className={classNames(style.inputUser, style.inputprio)}>

                <label htmlFor='priority'>select Priorité</label>
                <select name='' id='priority' required value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value='Normal'>Normal</option>
                    <option value='Urgent'>Urgent</option>
                    <option value='low'>Basse</option>
                </select>
                </div>
                <div className={style.actionSubmit}>
                    <button type="submit">Ajouter </button>
                </div>

                


        </form>
    </>);

}

ToDoForm.defaultProps ={

    onNewTask: ()=> { },//noop => no operation
};

ToDoForm.propTypes= {
    onNewTask: PropTypes.func //la props event est une type fonction 
}


export default ToDoForm;