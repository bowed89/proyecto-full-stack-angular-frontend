import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        // AdminGuard protege a que tenga accesso solo el ROLE_ADMIN
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar/:id', component: EditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}