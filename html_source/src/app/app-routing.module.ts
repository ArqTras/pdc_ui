import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [RouterModule.forRoot([], { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
