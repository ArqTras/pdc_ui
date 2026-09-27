import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageMaterialIconsComponent } from '@parts/pages/page-material-icons/page-material-icons.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                // Dev routes for looking at registered icons
                {
                    path: 'material-pdc-icon',
                    component: PageMaterialIconsComponent,
                },
            ],
            {
                useHash: true,
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
