import { Link } from "react-router-dom";

import UiButton from "@UI/UiButton";

import styles from './PeopleNavigation.module.css'


const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {

    const handleChangeNext = () => getResourse(nextPage);
    const handleChangePrev = () => getResourse(prevPage);



    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
};

export default PeopleNavigation;