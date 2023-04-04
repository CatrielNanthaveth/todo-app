import React, { useState } from 'react'
import { Button, Input } from 'antd';
import Swal from 'sweetalert2';

export const CreateTask = ({ tasks, stateChanger }) => {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        if(name){
            Swal.fire(
                '¡Acción realizada!',
                'Has creado una tarea.',
                'success'
            );
            stateChanger([...tasks, {name: name, id: tasks.length}]);
            setName("");
            
        } else {
            Swal.fire(
                '¡Acción cancelada!',
                'Ha habido un error. Por favor verifica que sea una tarea válida.',
                'error'
            );
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Ingrese una nueva tarea'
                className='input'
            />
            <Button type='primary' htmlType='submit'>Crear</Button>
        </form>

    )
}
