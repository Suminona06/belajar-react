import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (

        <div className="flex justify-center  min-h-screen font-bold items-center flex-col">
            <h1 className="text-3xl font-bold">Oops Error 404!!</h1>
            <p className="my-5 text-xl">Maaf Error yang tidak di duga telah terjadi</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    );

}

export default ErrorPage;