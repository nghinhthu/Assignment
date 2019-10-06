import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NgxPaginationModule} from 'ngx-pagination';

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
    // NgModule,
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
      { path: 'thi', component:ThiComponent},
      { path: 'gopy', component:GopyComponent},
      { path: 'lienhe', component:LienheComponent},
      { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
