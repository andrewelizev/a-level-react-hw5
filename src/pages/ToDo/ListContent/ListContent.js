import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
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