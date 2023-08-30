import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FuncionarioService } from './funcionario/funcionario.service';
import { DepartamentoService } from './departamento/departamento.service';

@NgModule({
  declarations: [	
    AppComponent,
    FuncionarioComponent,
    DepartamentoComponent,
    FooterComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: DepartamentoComponent, pathMatch: 'full' },
      { path: "funcionarios", component: FuncionarioComponent }

    ])
  ],
  providers: [FuncionarioService, DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
