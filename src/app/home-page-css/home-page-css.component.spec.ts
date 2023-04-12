import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCssComponent } from './home-page-css.component';

describe('HomePageCssComponent', () => {
  let component: HomePageCssComponent;
  let fixture: ComponentFixture<HomePageCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
