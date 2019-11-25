import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CountdownModule } from 'ngx-countdown';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuataikhoanComponent } from './suataikhoan/suataikhoan.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { ThiComponent } from './thi/thi.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    DangnhapComponent,
    DangkyComponent,
    DoimatkhauComponent,
    SuataikhoanComponent,
    MonhocComponent,
    ThiComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    CountdownModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    NgxPaginationModule,
    RouterModule.forRoot([ 
      // { path: '', 	component: AppComponent }, 
      { path: 'trangchu', component:TrangchuComponent},
      { path: 'gioithieu', component:GioithieuComponent},
      { path: 'dangky', component:DangkyComponent},
      { path: 'dangnhap', component:DangnhapComponent},
      { path: 'doimatkhau', component:DoimatkhauComponent},
      { path: 'suataikhoan', component:SuataikhoanComponent},
      { path: 'hoidap', component:HoidapComponent},
      { path: 'monhoc', component:MonhocComponent},
      { path: 'thi/:Id', component:ThiComponent},
      { path: 'gopy', component:GopyComponent},
      { path: 'lienhe', component:LienheComponent},
      { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
