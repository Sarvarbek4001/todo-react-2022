import React,{useState} from 'react'
import Card from '../UI/Card';
import styles from "./CreateUser.module.css";
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
function CreateUser(props) {

    const [inputName,setInputName] = useState('');
    const [inputAge,setInputAge] = useState('');
    const [error,setError] = useState();

    const createUserHandler = (evt) => {
         evt.preventDefault();
         if(inputName.trim().length === 0 || inputAge.trim().length === 0){
             setError({
                 title:'Please fill out the questionnaire!!!',
                 message:'This is important for us and for you.'
             })
             return
         }
         if(+inputAge<1){
             setError({
                 title:'Please fill out the questionnaire correctly.',
                 message:'This is important for us and for you.'
             })
             return
         }
         props.onCreateUser(inputName,inputAge)
         setInputName('');
         setInputAge('');
    }
    const nameChangeHandler = (evt) =>{
        setInputName(evt.target.value)
    }

    const ageChangeHandler = (evt) =>{
        setInputAge(evt.target.value)
    }

    const errorHandler = ()=>{
        setError(false)
    }

  return (
      <div>
          {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/> }
          <Card className={styles.input}>
              <form onSubmit={createUserHandler}>
                  <label htmlFor='name'>Name</label>
                  <input id='name' type='text' onChange={nameChangeHandler} value={inputName}/>
                  <label htmlFor='age'>Age</label>
                  <input id='age' type='number' onChange={ageChangeHandler} value={inputAge}/>
                  <Button type='submit'>Add</Button>
              </form>
          </Card>
      </div>

  )
}

export default CreateUser