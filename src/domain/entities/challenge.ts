import { Entity} from '../../core/domain/Enity'

type ChallengeProps = {
    title: string; //Titulo do desafio
    instructionsUrl: string; //Uma URL com as instruções do desafio
};

export class Challenge extends Entity <ChallengeProps> {
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }


    static create (props: ChallengeProps, id?: string) {
        const challenge = new Challenge(props, id);

        return challenge;
    }
}