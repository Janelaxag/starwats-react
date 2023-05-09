import { useParams } from "react-router";
import { useEffect } from "react";
import { getApiResourse } from "@utils/network";

import styles from './PersonPage.module.css'

const PersonPage = () => {

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        (async () => {

        })()
    }, [])

    return (
        <h1>
            {id}
        </h1>
    );
};

export default PersonPage;