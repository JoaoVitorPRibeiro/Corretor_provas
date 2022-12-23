import { Entity} from '../../core/domain/Enity'

type SubmissionProps = {
 challengeId: string; //Um ID de desafio especifico
 studentId: string; //Um ID do aluno que envio
 createdAt?: Date; //A data que enviou ('?' é para deixar ele opcional)
};

export class Submission extends Entity <SubmissionProps> {
    private constructor(props: SubmissionProps, id?: string) {
        super(props, id);
    }


    static create (props: SubmissionProps, id?: string) {
        const submission = new Submission({
            ...props,
            createdAt: props.createdAt ?? new Date(), // caso eu tenha o createdAT, eu uso ele, caso não, eu crio um
        }, id);

        return submission;
    }
}