import { useRouteError } from "react-router-dom";
const Error = ()=>{
        const err = useRouteError();
        console.log(err)
    return(
        <div>
            <h1>Opps!!!</h1>
            <h2>Some thing wents wrong here!!</h2>
        </div>
    )
}
export default Error;