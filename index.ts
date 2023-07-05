/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/TypeScriptDataObjectTemplate.ts to edit this template
 */

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean;
 }

axios.get(url).then(response =>{
    console.log(response.data);
    
    const todo = response.data as Todo;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
    
    logTodo(id, title, completed);
    }
);

const logTodo =(id: number, title: string, completed: boolean) =>{
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
}