import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'product', loadChildren: './product/product.module#ProductModule' }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }