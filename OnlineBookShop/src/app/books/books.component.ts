import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
books=[
{name:'Java Programming'},
{ name:'C Programming'},
{ name:'C++ Programming'}
];

add(x:any){
  let c=0;
 for(var i=0;i<this.books.length;i++){
   console.log(this.books[i])
   if(this.books[i].name.toLowerCase()==x.name.toLowerCase()){
   alert("Duplicate Book !");
   c=1; 
   }   else if(x.name=='') {
     c=1;
     console.log("Empty String....")
   }

 }
    if(c==0){
    this.books.push(x);   
    }
  
}

remove(){
  this.books.pop();
}
}
