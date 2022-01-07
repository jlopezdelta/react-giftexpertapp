import { useAxiosGift } from "../Hooks/useAxiosGift";
import { GifGridItem } from "./GifGridItem";

export const GifsGrid = (props: GifsGridProps) => {

  const {data:images,loading} = useAxiosGift(props.categories);

    return (
    <>
        <h3 className="animate__animated  animate__fadeIn">{props.categories}</h3>
            {loading && <p  className="animate__animated  animate__flash">Loading...</p>}
            <div className="card-grid ">
                    {
                        images.map( image => <GifGridItem 
                                        key={image.id}
                                        imagen={image}/>
                        )
                    }
            </div>
    </>
    )
}

interface GifsGridProps{
    categories: string
}
