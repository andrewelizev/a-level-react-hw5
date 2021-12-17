import React, { useState, useEffect } from 'react';
// import Button from '../Button/Button'

const Films = () => {
    const [films, setFilms] = useState([]);
    const [foundFilms, setFoundFilms] = useState([]);
    const [searchString, setSearch] = useState('');

    useEffect(() => {
        async function fetchFilms() {
            const response = await fetch('http://api.tvmaze.com/shows')
            const json = await response.json()
            const films = json.slice(0, 20)
            setFilms(films)
        }
        fetchFilms()
    }, [])

    function onChange(e) {
        let searchString = e.target.value
        setSearch(searchString)
    }

    function onClick() {
        let filmFound = films.filter(film => (film.name).includes(searchString))
        setFoundFilms(filmFound)
    }

    function resetTable() {
        console.log('>>> before', foundFilms);
        setFoundFilms([]);
        console.log('>>> after', foundFilms);
    }

    function sortFilms(event) {
        event.preventDefault()
        let field = event.target.name;

        let resultSort = films.sort((a, b) => {

            let average;

            if (field === 'rating') {
                average = 'average';
            }

            else if ((a[field][average] || a[field]) < (b[field][average] || b[field])) {
                return -1;
            }

            else if ((a[field][average] || a[field]) > (b[field][average] || b[field])) {
                return 1;
            }
            return 0;
        })
        console.log('>>> sort - field: ', field, resultSort)
        return setFoundFilms(resultSort)
    }
    // console.log('foundFilms', foundFilms)

    return (
        <div>
            <div className="input-group">
                <input type="text" className="form-control" onChange={onChange} />
                <button className="btn btn-outline-secondary" type="button" onClick={onClick}>Search</button>
                <button className="btn btn-outline-secondary" type="reset" onClick={resetTable}>Reset</button>
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Год выпуска</th>
                        <th>Рейтинг</th>
                    </tr>
                    <tr>
                        <td><button className='btn btn-outline-secondary' type="submit" name="name" onClick={sortFilms}>Sort</button></td>
                        <td><button className='btn btn-outline-secondary' type="submit" name="premiered" onClick={sortFilms}>Sort</button></td>
                        <td><button className='btn btn-outline-secondary' type="submit" name="rating" onClick={sortFilms}>Sort</button></td>
                    </tr>
                </thead>
                <tbody>
                    {((+foundFilms.length === 0) ? films : foundFilms).map((film, index) => {
                        return (
                            <tr key={index}>
                                <td>{film.name}</td>
                                <td>{new Date(Date.parse(film.premiered)).getFullYear()}</td>
                                <td>{film.rating.average}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Films;