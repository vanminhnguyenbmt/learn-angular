import { Component } from '@angular/core';
import { QuestionService } from './question/question.service';
import { QuestionBase } from './question/question-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})

export class AppComponent {
  questions: QuestionBase<any>[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
