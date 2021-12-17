import React from 'react'
import List from './List/List'
import ListContent from './ListContent/ListContent'

function ToDo() {
    return (
        <div className="card-group">
            <List />
            <ListContent />
        </div>
    )
}

export default ToDo