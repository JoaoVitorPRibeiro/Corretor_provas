import { ChallengesRepository } from "../../src/application/repositories/ChallengeRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
    public items: Challenge[] = []; //TO CRIANDO UM ARRAY VAZIO DE ESTUDANTE
    
   async findById(id: string): Promise<Challenge | null> { //PROCURA O ESTUDANTE PELO ID NO 'BANCO DE DADOS' NA MEMÓRIA
        const challenge = this.items.find(challenge => challenge.id === id)

        if(!challenge){
            return null; //SE NÃO ENCONTRAR, RETORNA UM DADO NULL
        }

        return challenge // SE ENCONTRAR, RETORNA O ESTUDANTE MESMO
    }
}

//AQUI EU TO SIMULANDO UM BANCO DE DADOS EM MEMÓRIA, PARA ESTUDANTES