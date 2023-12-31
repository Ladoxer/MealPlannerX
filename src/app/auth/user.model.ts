export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    // console.log(new Date());
    // console.log(this._tokenExpirationDate);
    
    
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      // console.log("nulled");
      
      return null;
    }
    return this._token;
  }
}
