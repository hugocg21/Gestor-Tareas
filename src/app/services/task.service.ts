import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Configurar entorno de desarrollo', description: 'Instalar Node.js, Angular CLI y configurar VS Code.', dueDate: new Date(), completed: false },
    { id: 2, title: 'Crear estructura del proyecto', description: 'Generar la estructura básica del proyecto con Angular CLI.', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), completed: false },
    { id: 3, title: 'Diseñar base de datos', description: 'Crear el esquema de la base de datos para el proyecto.', dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), completed: false },
    { id: 4, title: 'Implementar autenticación', description: 'Añadir sistema de login y registro con JWT.', dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), completed: false },
    { id: 5, title: 'Crear componentes iniciales', description: 'Generar componentes para el header, footer y sidebar.', dueDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), completed: false },
    { id: 6, title: 'Estilizar con Tailwind CSS', description: 'Integrar Tailwind CSS y aplicar estilos básicos.', dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), completed: false },
    { id: 7, title: 'Configurar routing', description: 'Configurar las rutas iniciales para la navegación.', dueDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), completed: false },
    { id: 8, title: 'Desarrollar página de inicio', description: 'Crear y estilizar la página de inicio.', dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), completed: false },
    { id: 9, title: 'Implementar CRUD de usuarios', description: 'Desarrollar las funcionalidades de creación, lectura, actualización y eliminación de usuarios.', dueDate: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000), completed: false },
    { id: 10, title: 'Integrar API de terceros', description: 'Añadir integración con una API externa para obtener datos.', dueDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000), completed: false },
    { id: 11, title: 'Implementar tests unitarios', description: 'Escribir tests unitarios para los componentes y servicios.', dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), completed: false },
    { id: 12, title: 'Optimizar rendimiento', description: 'Mejorar el rendimiento de la aplicación utilizando técnicas de lazy loading y optimización.', dueDate: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000), completed: false },
    { id: 13, title: 'Añadir internacionalización', description: 'Implementar i18n para soportar múltiples idiomas.', dueDate: new Date(Date.now() + 24 * 24 * 60 * 60 * 1000), completed: false },
    { id: 14, title: 'Crear documentación', description: 'Escribir documentación para el código y la API.', dueDate: new Date(Date.now() + 26 * 24 * 60 * 60 * 1000), completed: false },
    { id: 15, title: 'Configurar CI/CD', description: 'Configurar pipelines de integración y despliegue continuo.', dueDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000), completed: false },
    { id: 16, title: 'Desplegar en entorno de pruebas', description: 'Desplegar la aplicación en un entorno de pruebas para recibir feedback.', dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), completed: false },
    { id: 17, title: 'Recoger feedback de usuarios', description: 'Obtener y analizar el feedback de los usuarios sobre la aplicación.', dueDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000), completed: false },
    { id: 18, title: 'Implementar mejoras', description: 'Implementar mejoras y correcciones basadas en el feedback recibido.', dueDate: new Date(Date.now() + 34 * 24 * 60 * 60 * 1000), completed: false },
    { id: 19, title: 'Preparar para lanzamiento', description: 'Realizar las configuraciones finales para el lanzamiento.', dueDate: new Date(Date.now() + 36 * 24 * 60 * 60 * 1000), completed: false },
    { id: 20, title: 'Lanzamiento oficial', description: 'Realizar el lanzamiento oficial de la aplicación.', dueDate: new Date(Date.now() + 38 * 24 * 60 * 60 * 1000), completed: false }
  ];
  private idCounter: number = 21;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, description: string, dueDate: Date): void {
    this.tasks.push({
      id: this.idCounter++,
      title,
      description,
      dueDate,
      completed: false
    });
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
