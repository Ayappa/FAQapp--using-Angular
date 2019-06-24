import { Component, OnInit,Input } from '@angular/core';
import { Questions } from '../../model/Questions';
import{DataService} from '../../service/data.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
@Input('question') question:Questions;
  constructor(public dataservice:DataService) { }

  ngOnInit() {
  }
  removeQuestion(question:Questions){
      this.dataservice.removeQuestion(question);
  }
}
