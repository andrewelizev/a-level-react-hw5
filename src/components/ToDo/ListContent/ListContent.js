import React from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { Outlet } from "react-router-dom";

function ListContent() {
    return (
        <div className="card">
            <Input />
            <label>
                <input type='checkbox' />
                Показывать выполненные
            </label>
            <Outlet />
            <Button children='Добавить задачу' />
        </div>
    )
}

export default ListContent;