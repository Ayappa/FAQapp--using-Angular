import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { Questions } from '../../model/Questions';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})

export class AddQuestionsComponent implements OnInit {
  @Output() questionAdded=new EventEmitter<Questions>();
 text:string;
 answer:string;
 hide:boolean;
 textV:boolean;
 answerV:boolean;

  constructor() { }

  ngOnInit() {
  }
  addQuestion(){
    if(this.text.length==0 ){
             this.textV=true;
    }else
    if(this.answer.length==0 ){
      this.answerV=true;
}
this.questionAdded.emit({text:this.text,answer:this.answer,hide:true})
}
}
