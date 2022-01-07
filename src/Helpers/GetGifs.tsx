import axios, { AxiosResponse } from "axios";
import {RESTCountriesResponse, Image} from '../Interface/Gifs';

export const GetGifs = async (categories: string) =>{

    let data: RESTCountriesResponse[] = [];
    const apiKey = 'U29nwOji90eVK8D4LXdHl96ZrdP9pNyc'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=${apiKey}`;

   await axios.get(url)
    .then((response: AxiosResponse) => {
        data = response.data.data;
    });

    const dataOnly: Image[] = data.map( information => {
        return {
            id: information.id,
            title: information.title,
            url: information.images.downsized.url
        }
    })

    return dataOnly;
}