export interface IProduct{
    code :string;
    name :string;
    date:Date;
    price:number;
    quantity:number;
}
export interface IRequest{
   products:IProduct[]
}

