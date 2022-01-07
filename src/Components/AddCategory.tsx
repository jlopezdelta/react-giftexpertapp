import { useState } from "react";


export const AddCategory = (props: AddCategoriesProps) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            props.setCategories( categories => [inputValue,...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

interface AddCategoriesProps{
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}