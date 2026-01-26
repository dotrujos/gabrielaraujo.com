import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPopup } from './contact-popup';

describe('ContactPopup', () => {
  let component: ContactPopup;
  let fixture: ComponentFixture<ContactPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
