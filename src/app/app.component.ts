import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //membuat variabel
  title: string = 'app pertama abdul';
  books: string[] = ['java', 'MySql'];

  book: Book = new Book();

  kirimData(data){
    console.log(data);
  }
  
}
export class Book{
  public nama: string;
}