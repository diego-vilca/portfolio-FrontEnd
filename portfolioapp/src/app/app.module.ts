import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { EditNombreComponent } from './modals/persona/edit-nombre/edit-nombre.component';
import { EditPerfilComponent } from './modals/persona/edit-perfil/edit-perfil.component';
import { EditBannerComponent } from './modals/persona/edit-banner/edit-banner.component';
import { EditAboutComponent } from './modals/persona/edit-about/edit-about.component';
import { CreateEducationComponent } from './modals/educacion/create-education/create-education.component';
import { EditEducationComponent } from './modals/educacion/edit-education/edit-education.component';
import { DeleteEducationComponent } from './modals/educacion/delete-education/delete-education.component';
import { CreateJobComponent } from './modals/experiencia/create-job/create-job.component';
import { EditJobComponent } from './modals/experiencia/edit-job/edit-job.component';
import { DeleteJobComponent } from './modals/experiencia/delete-job/delete-job.component';
import { CreateSkillComponent } from './modals/habilidad/create-skill/create-skill.component';
import { EditSkillComponent } from './modals/habilidad/edit-skill/edit-skill.component';
import { DeleteSkillComponent } from './modals/habilidad/delete-skill/delete-skill.component';
import { CreateProjectComponent } from './modals/proyecto/create-project/create-project.component';
import { EditProjectComponent } from './modals/proyecto/edit-project/edit-project.component';
import { DeleteProjectComponent } from './modals/proyecto/delete-project/delete-project.component';
import { CreateSocialComponent } from './modals/social/create-social/create-social.component';
import { EditSocialComponent } from './modals/social/edit-social/edit-social.component';
import { DeleteSocialComponent } from './modals/social/delete-social/delete-social.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    WorkHistoryComponent,
    EducationComponent,
    FooterComponent,
    SkillComponent,
    ProjectComponent,
    IndexComponent,
    LoginComponent,
    EditNombreComponent,
    EditPerfilComponent,
    EditBannerComponent,
    EditAboutComponent,
    CreateEducationComponent,
    EditEducationComponent,
    DeleteEducationComponent,
    CreateJobComponent,
    EditJobComponent,
    DeleteJobComponent,
    CreateSkillComponent,
    EditSkillComponent,
    DeleteSkillComponent,
    CreateProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    CreateSocialComponent,
    EditSocialComponent,
    DeleteSocialComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
