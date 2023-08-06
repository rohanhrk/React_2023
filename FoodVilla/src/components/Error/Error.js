import { useRouteError } from "react-router-dom";
import { error_img_url } from "../../utils/constant/Constant";

const Error = () => {
    const errorResponse = useRouteError();
    return (
        <div className="error-container">
            <img height={150} width={150} src={error_img_url} />
            <h1>Oops, something went wrong!!</h1>
            <h2>{errorResponse.status} : Page {errorResponse.statusText}</h2>
        </div>
    )
}

export default Error;