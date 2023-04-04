import React from 'react'
import { Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons'
import Swal from 'sweetalert2';

export const ListTasks = ({ tasks, stateChanger }) => {

    const remove = (task) => {
        Swal.fire({
            title: 'Eliminar tarea',
            text: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Acción realizada!',
                    'Tarea eliminada.',
                    'success'
                );
                const filterTasks = tasks.filter((thisTask) => thisTask.id !== task.id);
                stateChanger(filterTasks);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    '¡Acción cancelada!',
                    'Has cancelado la acción.',
                    'error'
                );
                return false;
            }
        })
    }

    return (
        <ul>
            {tasks.length > 0 ? (
                tasks.map((task) => {

                    return (
                        <li key={task.id} className="list" >
                            <p>{task.name}</p>
                            <Button danger onClick={() => remove(task)} ><DeleteFilled /></Button>
                        </li>
                    )
                })
            ) : (
                <p>No hay tareas.</p>
            )}
        </ul>
    )
}
