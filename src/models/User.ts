import { Schema, model, Model, connection } from 'mongoose';

type UserType = {
   email: string,
   age: number,
   interests: [string],
   name: {
      firstName: string,
      lastName: string
   }
}

// criando o schema 
const schema = new Schema<UserType>({
   email: { type: String, required: true },// campo obrigatorio 
   age: { type: Number, required: true },
   interests: [String],
   name: {
      firstName: { type: String, required: true },
      lastName: String
   }
});


//criando o model com seu nome
const modelName: string = 'User';


// vai verificar se tem um model dentro da conquexão com o nome de modelName, se não tiver cria um
const userModel = (connection && connection.models[modelName])
   ? (connection.models[modelName] as Model<UserType>)
   : model<UserType>(modelName, schema);//cria o model se não tiver

//exportando o model caso ele exista e caso não exista cria ele
export default userModel;