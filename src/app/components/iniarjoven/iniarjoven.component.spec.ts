import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniarjovenComponent } from './iniarjoven.component';

describe('IniarjovenComponent', () => {
  let component: IniarjovenComponent;
  let fixture: ComponentFixture<IniarjovenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniarjovenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniarjovenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
