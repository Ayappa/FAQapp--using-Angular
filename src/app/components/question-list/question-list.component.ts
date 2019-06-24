 import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { Questions } from 'src/app/model/Questions';
import{DataService} from '../../service/data.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {
 questions:Questions[];
  constructor(public dataservice:DataService) {
  }

  ngOnInit() {
    this.questions=this.dataservice.getData();
  }
  addQuestion(question:Questions){
  this.dataservice.addQuestion(question);
}
}
