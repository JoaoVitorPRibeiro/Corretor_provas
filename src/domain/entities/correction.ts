import { Entity} from '../../core/domain/Enity'

type CorrectionProps = {
    grade: number;  //Uma nota de 0 a 10
    submissionId: string; // Para pegar o dados da submissao, que ja vai ter os dados do aluno
    createdAt: Date; // Para informar quando aconteceu
};

export class Correction extends Entity <CorrectionProps> {
    private constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }


    static create (props: CorrectionProps, id?: string) {
        if (props.grade < 0 || props.grade >10) { //Criando um erro que, se a nota for menor que 0 ou maior que 10, é invalido
            throw new Error ('Nota invalida')
        }

        const correction = new Correction(props, id);

        return correction;
    }
}