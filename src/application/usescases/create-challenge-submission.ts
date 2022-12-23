import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/ChallengeRepository";
import { StudentsRepository } from "../repositories/StudentRepository";

type CreateChallengeSubmissionRequest = { //Regras para criar uma submissao de desafio
    studentId: string;
    challengeId: string;

}

export class CreateChallengeSubmission {
    constructor(
        private studentsRepository: StudentsRepository,
        private challengeRepository: ChallengesRepository
    ) {}

   async execute({ studentId, challengeId}: CreateChallengeSubmissionRequest ) {
    const student = await this.studentsRepository.findById(studentId) //Aqui eu to buscando no repositorio o estudante, pelo ID dele

    if(!student) {
        throw new Error('Estudante não existe') //Caso o estudante não exista, ai aparece esse erro
    }

    const challenge = await this.challengeRepository.findById(challengeId) //Aqui eu to buscando no repositorio o desafio, pelo ID dele

    if(!challenge) {
        throw new Error('Desafio não existe') //Caso o desafio não exista, ai aparece esse erro
    }

        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission
    }
}