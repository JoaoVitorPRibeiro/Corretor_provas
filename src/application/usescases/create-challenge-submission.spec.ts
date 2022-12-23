import { InMemoryChallengesRepository } from "../../../test/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../test/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengeRepository = new InMemoryChallengesRepository

        const student = Student.create({ //To criando um estudante para testar
            name: 'Joao',
            email: 'jvribeiro@teste.com'
        })

        const challenge = Challenge.create({ //To criando um desafio para testar

            title:'Desafio 01',
            instructionsUrl: 'http://testes.com'
        })

        studentsRepository.items.push(student); //To jogando o estudante que eu criei no array vazio
        challengeRepository.items.push(challenge); //To jogando o desafio que eu criei no array vazio

        const sut = new CreateChallengeSubmission( //sut = system under test
            studentsRepository,
            challengeRepository,
        ); 

       const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
        })

        expect(response).toBeTruthy()
    });
});