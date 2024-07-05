import React from "react";
import { TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC <Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>todo
            <img
                style={{width: '60px', height: 'auto'}}
                src='https://i.postimg.cc/g0Tr5ktt/10b88c68-typescript-logo.png'/>
            </h1>    
            <CreateTodo saveTodo={onAddTodo} />    
        </header>  
    )
}
  
            