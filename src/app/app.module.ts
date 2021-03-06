import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardComponent } from './card.component';
import { ValidateDateComponent } from './validate-date/validate-date.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip.component';
import { IpService } from './ip.service';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';
import { RegisterComponent } from './register/register.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    ValidateDateComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
    RegisterComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
