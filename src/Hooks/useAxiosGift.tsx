import { useEffect, useState } from "react"
import { GetGifs } from "../Helpers/GetGifs"
import {useAxiosResponse} from '../Interface/Gifs'

export const useAxiosGift = (category: string) => {

    const [state, setstate] = useState<useAxiosResponse>({
        data: [],
        loading: true
    })

    useEffect(() => {
       GetGifs(category).then( response => {
          return setstate({
              data: response,
              loading: false
          })
       });
    }, [category])

    return state;
}
