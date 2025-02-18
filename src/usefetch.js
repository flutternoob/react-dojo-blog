import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        //console.log("use effect run");
       // console.log(name);
       fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw Error("could not fetch the error for that resource");
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch((err) => {
            setIsPending(false);
            setError(err);
        });
    }, [url]);

    return {
        data, isPending, error
    };
};

export default useFetch;