import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CardsComponent } from './cards/cards.component';

const appRoutes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'freeContent', component: ContentComponent},
    {path: 'users', component: CardsComponent},
    {path: '**', component: PageNotFoundComponent}

  ];
  
  @NgModule({
    imports: [

      RouterModule.forRoot(appRoutes)

    ],

    exports: [

        RouterModule

    ],

  })

  export class AppRoutingModule { }
  export const routingComponents = [ContentComponent,
                                    PageNotFoundComponent,
                                    HomeComponent,
                                    CardsComponent];