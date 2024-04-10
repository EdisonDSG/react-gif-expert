import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);

  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1){
      alert("Debe ingresar más de un caracter");
    } 
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
    
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }> {/*El primer event es un argumento que se lo paso a la fc*/ }
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue} 
            onChange={onInputChange}
        />
    </form>

  )
}

