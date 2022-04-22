import { useParams  } from "react-router-dom"




export const Video = () =>{
    let {id} = useParams();
    console.log(id)
    return(
        <div style = {{marginTop:"15vh"}}>
            <h1>Video page:{id}</h1>
        </div>
    )
}