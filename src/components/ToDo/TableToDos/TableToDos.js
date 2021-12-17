import React from "react";

function TableToDos(props) {
    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th><i className="bi bi-caret-down-fill"></i>Что надо сделать</th>
                        <th><i className="bi bi-caret-down-fill"></i>Когда</th>
                        <th><i className="bi bi-caret-down-fill"></i>Сделано</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.task}</td>
                        <td>{props.time}</td>
                        <td><input type='checkbox' /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableToDos