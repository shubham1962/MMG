import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeProvideComponent } from './we-provide.component';

describe('WeProvideComponent', () => {
  let component: WeProvideComponent;
  let fixture: ComponentFixture<WeProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeProvideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
