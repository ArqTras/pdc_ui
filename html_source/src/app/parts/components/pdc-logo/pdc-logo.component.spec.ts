import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcLogoComponent } from './pdc-logo.component';
import { DEFAULT_COMPONENT_TEST_PROVIDERS } from '../../../testing/default-component-test-providers';

describe('PdcLogoComponent', () => {
    let component: PdcLogoComponent;
    let fixture: ComponentFixture<PdcLogoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PdcLogoComponent],
            providers: DEFAULT_COMPONENT_TEST_PROVIDERS,
        }).compileComponents();

        fixture = TestBed.createComponent(PdcLogoComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
