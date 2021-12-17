import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import Input from '../../Input/Input';

function List() {
    return (
        <>
            <div className="card">
                <Input />
                <div className="list-group">
                    <NavLink to="home" className="list-group-item list-group-item-action">Дом</NavLink>
                    <NavLink to="work" className="list-group-item list-group-item-action">Работа</NavLink>
                    <NavLink to="need" className="list-group-item list-group-item-action">То что надо</NavLink>
                    <div>
                        <input type="text" />
                        <Button children='Сохранить' />
                        <Button children='Отмена' />
                    </div>
                </div>
                <Button children='Новый список' />
            </div>

        </>
    )
}

export default List;