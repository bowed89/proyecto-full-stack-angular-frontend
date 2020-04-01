import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routings, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar Nuevos Módulos
import { ModuloemailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    KeepersComponent,
    ContactComponent,
    HomeComponent,
    AnimalsComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routings,
    EditorModule,
    ModuloemailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
