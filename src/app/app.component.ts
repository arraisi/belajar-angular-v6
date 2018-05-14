import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //membuat variabel
  title: string = 'app pertama abdul';
  books: Book[] = [
    new Book('Java', 2019),
    new Book('PHP',2017),
    new Book('MySql',2018),
    new Book('Python',2138)
  ];



  //membuat variabel baru isinya dan tipedatanya dari class Book dibawah
  book: Book = new Book();

  //membuat method kirimdata, console.log sama dengan sout java
  kirimData(data){
    console.log(this.book);
    if(this.book.nama && this.book.tahunTerbit){
      this.books.push(this.book);
    }
    this.book = new Book();
  }
  
}

export class Book{
  constructor(public nama?: string, public tahunTerbit?: number){}
  
}