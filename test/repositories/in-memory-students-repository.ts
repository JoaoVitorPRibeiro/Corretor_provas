import { StudentsRepository } from "../../src/application/repositories/StudentRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentsRepository {
    public items: Student[] = []; //TO CRIANDO UM ARRAY VAZIO DE ESTUDANTE
    
   async findById(id: string): Promise<Student | null> { //PROCURA O ESTUDANTE PELO ID NO 'BANCO DE DADOS' NA MEMÓRIA
        const student = this.items.find(student => student.id === id)

        if(!student){
            return null; //SE NÃO ENCONTRAR, RETORNA UM DADO NULL
        }

        return student // SE ENCONTRAR, RETORNA O ESTUDANTE MESMO
    }
}

//AQUI EU TO SIMULANDO UM BANCO DE DADOS EM MEMÓRIA, PARA ESTUDANTES