import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvideoplayerComponent } from './myvideoplayer.component';

describe('MyvideoplayerComponent', () => {
  let component: MyvideoplayerComponent;
  let fixture: ComponentFixture<MyvideoplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyvideoplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvideoplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
