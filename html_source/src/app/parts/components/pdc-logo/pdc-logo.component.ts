import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { VariablesService } from '@parts/services/variables.service';

@Component({
    selector: 'pdc-logo',
    standalone: true,
    imports: [CommonModule, FlexModule],
    templateUrl: './pdc-logo.component.html',
    styleUrls: ['./pdc-logo.component.scss'],
})
export class PdcLogoComponent {
    constructor(public variablesService: VariablesService) {}
}
