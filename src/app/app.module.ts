import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
// import { JoueurComponent } from './joueur/joueur.component';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { MembersComponent } from './members/members.component';
import { JeuxComponent } from './jeux/jeux.component';
import { VideoService } from './expression/video.service';
import { TableComponent } from './table/table.component';
import { ExpressionComponent } from './expression/expression.component';
// import { JeuxComponent } from './jeux/jeux.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent,
    JeuxComponent,
    TableComponent,
    ExpressionComponent
  //  JoueurComponent,
  //  JeuxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
     MatCheckboxModule, MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase, 'IA'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  exports: [ MatCheckboxModule],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
