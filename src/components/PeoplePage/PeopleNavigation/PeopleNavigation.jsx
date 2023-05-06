import { Link } from "react-router-dom";
import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {

    const handleChangeNext = () => getResourse(nextPage);
    const handleChangePrev = () => getResourse(prevPage);



    return (
        <div>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
                <button
                    className={styles.btns}
                    disabled={!prevPage}
                    onClick={handleChangePrev}
                >Previous
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.link}>
                <button
                    className={styles.btns}
                    disabled={!nextPage}
                    onClick={handleChangeNext}
                >Next
                </button>
            </Link>
        </div>
    );
};

export default PeopleNavigation;