import { Component , ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {

  errorMessage: string[] = [];

  validateString() {
    const titleInput =  this.book.title;
    const authorInput =  this.book.author;
    const publisherInput = this.book.publisher
    const categoryInput =  this.book.category;
    const editionInput =  this.book.edition;

    const stringRegex = /^[a-zA-Z ]+$/;

    const isValidTitle = stringRegex.test(titleInput);
    const isAuthorValid = stringRegex.test(authorInput);
    const ispublisherValid = stringRegex.test(publisherInput);
    const iscategoryValid = stringRegex.test(categoryInput);
    const iseditionValid = stringRegex.test(editionInput);

    const isValidNum = this.validateNum();


  this.errorMessage = [];

    if (!isValidTitle) {
     const titleField = document.getElementsByName('title')[0] ;

     titleField.classList.remove('is-valid');
     titleField.classList.add('is-invalid');

      this.errorMessage.push('Enter a valid title');
    }else{
      const titleField = document.querySelector('input[name="title"]') ;
      if (titleField) {
        titleField.classList.remove('is-invalid');
        titleField.classList.add('is-valid');
      }
    }
    if (!isAuthorValid) {
      this.errorMessage.push('Enter a valid author name');
    }
    if(!ispublisherValid){
      this.errorMessage.push('Enter a valid name publisher that contains only letters');
    }
    if(!isValidNum){
      this.errorMessage.push('Enter a valid copiesNum-pagesNum that contains only numbers');
    }
    if(!iscategoryValid){
      this.errorMessage.push('Enter a valid category that contains only letters');
    }
    if(!iseditionValid){
      this.errorMessage.push('Enter a valid edition that contains only letters');
    }
    if(this.book.publishingDate == ""){
      this.errorMessage.push('Enter a valid birthdate ');

    }
    this.errorMessage.join(' ');

}
@ViewChild('title', { static: true }) titleInput!: ElementRef;

validateNum() {
      
  const CopyInput = this.book.noOfCopies.toString();
  const PagesInput = this.book.pages.toString();

  const numRegex =/^[1-9][0-9]*$/;
  const isValidcopiesNum = numRegex.test(CopyInput);
  const isValidPagesNum = numRegex.test(PagesInput);

  const copiesNumField = document.getElementsByName('copiesNum')[0] ;
  const pagesNumField = document.getElementsByName('pagesNum')[0] ;

if(isValidcopiesNum == true ){   
  copiesNumField.classList.add('is-valid');
  copiesNumField.classList.remove('is-invalid');
}else{
  copiesNumField.classList.remove('is-valid');
  copiesNumField.classList.add('is-invalid');
}
if(isValidPagesNum == true ){   
  pagesNumField.classList.add('is-valid');
  pagesNumField.classList.remove('is-invalid');
}else{
  pagesNumField.classList.remove('is-valid');
  pagesNumField.classList.add('is-invalid');
}
if(isValidcopiesNum == true && isValidPagesNum == true){
return true;
}
  return false;
}
  @ViewChild('CopyInput', { static: true }) CopyInput!: ElementRef;
  @ViewChild('PagesInput', { static: true }) PagesInput!: ElementRef;

  date=Date.now();
  date2=this.date.toString();
  book:Book=new Book(0,"","","",0,true,"",0,"","",0,0,0,0,this.date2,this.date2,"");
  constructor (public bookService:BookService, public router:Router) {
  }
  
  save(){
    console.log("before");
    this.bookService.addBook(this.book).subscribe(data => {
      console.log("after",data);
      this.router.navigateByUrl('/allbook');
    })
  }
  onSubmit() {
 
    if(this.errorMessage.length === 0){
      this.save();
       }
    }
}
