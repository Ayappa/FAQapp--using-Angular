import { Injectable } from '@angular/core';
import{Questions} from '../model/Questions'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  question:Questions[];

  constructor() {
   
   
   }

   getData(){
     if(localStorage.getItem('question')==null){
       this.question=[];
     }
     else{
       this.question=JSON.parse(localStorage.getItem('question'));
     }


     return this.question;
   }

   addQuestion(question:Questions){
    if(localStorage.getItem('question')==null){
      localStorage.setItem('question',JSON.stringify(question));
    }
    else{
      this.question==JSON.parse(localStorage.getItem('question'));
      this.question.unshift(question);
      localStorage.setItem('question',JSON.stringify(this.question));

    }
   }
   removeQuestion(questions:Questions){
     for(let i=0;i<this.question.length;i++){
         if(questions==this.question[i]){
           this.question.splice(i,1);
           localStorage.setItem('question',JSON.stringify(this.question));

         }
     }
   }
}
