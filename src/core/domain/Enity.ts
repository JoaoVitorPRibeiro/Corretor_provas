import crypto from 'crypto';

export abstract class Entity <T>{
    protected _id:string; //protected pq o id só vai ser acessivel nessa classe e suas extensoes
    public props: T; //public para acesso geral
    
get id() { 
    return this._id; 
}

    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? crypto.randomUUID();  // Caso eu receba um ID, eu busco no banco, caso não, eu crio um
    }
}
// Essa classe vai implementar comportamentos padrões entre todas as entidades