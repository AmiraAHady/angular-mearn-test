import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleService } from '../simple.service';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let simpleServ:SimpleService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    simpleServ=TestBed.inject(SimpleService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test demo title', () => {
    expect(component.title).toBe('demo');
  });
  it('test that getSimpleValue called', () => {
    //object,function
    spyOn(simpleServ,"getSimpleValue")
    component.ngOnInit()
    expect(simpleServ.getSimpleValue).toHaveBeenCalled()
    expect(simpleServ.getSimpleValue).toHaveBeenCalledTimes(1)
  });
});
