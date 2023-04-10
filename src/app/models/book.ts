export class Book {
    constructor(public _id:number, public title:string,public author:string,
        public publisher:string, public noOfCopies:number, public available:Boolean, public category:string,
        public pages:number, public edition:string, public publishingDate:string,
        public noOfCurrentBorrowed:number,public noOfCurrentReading:number, public noBorrowed:number,
        public noReading:number, public createdAt:string, public updatedAt:string,public image:string){   
        }
}