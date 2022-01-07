import { useState } from "react";
import { AddCategory } from './Components/AddCategory';
import { GifsGrid } from './Components/GifsGrid';

export const GiftExpertApp = ()=>{

    const [categories, setCategories] = useState(['Boku no hero']);

    return (
      <>
        <h2>Gift Expert App</h2>
        <hr />
        <AddCategory setCategories={setCategories}/>
        <ul>
            {
                categories.map((cat,index) => <GifsGrid key={index} categories={cat}/>)
            }
        </ul>
      </>
    )
  }