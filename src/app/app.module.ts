import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { SortPipe } from './pipes/pipe.sort';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    ProductComponent,
    MemberComponent,
    FormComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'pipes',
        component: PipesComponent
      }
    ])
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
