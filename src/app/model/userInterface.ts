export interface userInterface {
  id: number;
  name: string;
  username:string
  email:string
  address: address
  phone:string
  website:string
  company:company
}

interface address {
    street:string
    suite:string
    city:string
    zipcode:string
  };

  interface company  {
    name:string
    catchPhrase:string
    designation:string
    bs:string
  };