import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: "", component: LayoutComponent },
  { path: "home", component: LayoutComponent, loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule) },
  { path: "register", component: LayoutComponent, loadChildren: () => import("./components/register/register.module").then(m => m.RegisterModule) },
  { path: "lists", component: LayoutComponent, loadChildren: () => import("./components/lists/lists.module").then(m => m.ListsModule), canActivate: [AuthGuard]  },
  { path: "user-list", component: LayoutComponent, loadChildren: () => import("./components/users/user-list/user-list.module").then(m => m.UserListModule), canActivate: [AuthGuard]  },
  { path: "user-detail/:id", component: LayoutComponent, loadChildren: () => import("./components/users/user-detail/user-detail.module").then(m => m.UserDetailModule), canActivate: [AuthGuard]  },
  { path: "messages", component: LayoutComponent, loadChildren: () => import("./components/messages/messages.module").then(m => m.MessagesModule), canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
