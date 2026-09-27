import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { svgIcons } from '../../../../assets/pdc-icons';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'pdc-page-material-icons',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './page-material-icons.component.html',
    styleUrls: ['./page-material-icons.component.scss'],
})
export class PageMaterialIconsComponent {
    materialPdcIcons = svgIcons;
}
