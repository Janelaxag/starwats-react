import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { widthErrorApi } from "@hoc-helpers/widthErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { getApiResourse, changeHTTP } from "@utils/network";
import { getPeopleId, getPeopleImage, getPeoplePageId } from "@services/getPeopleData";
import { API_PEOPLE } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from './PeoplePage.module.css'


const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = useState(null);

    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page')

    const getResourse = async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img,
                }
            })

            setPeople(peopleList)

            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));

            setCounterPage(getPeoplePageId(url))

            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResourse(API_PEOPLE+queryPage)
    }, [])

    return (
       <>
           <PeopleNavigation
               getResourse={getResourse}
               prevPage={prevPage}
               nextPage={nextPage}
               counterPage={counterPage}
           />
           { people &&  <PeopleList people={people}/> }
       </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default widthErrorApi(PeoplePage);