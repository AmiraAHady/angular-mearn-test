import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de:DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    de=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    //tst that component is not null
    expect(component).toBeTruthy();
  });
  it("test if click on btnAddClick ,counter should increse",()=>{
    let btn=de.query(By.css("#btnAddClick"))
    btn.triggerEventHandler("click")
    expect(component.counter).toBe(1)
  })
  it("test if click on btnRemoveClick ,counter should decrese",()=>{
    let btn=de.query(By.css("#btnRemoveClick"))
    btn.triggerEventHandler("click")
    expect(component.counter).toBe(-1)
  })
  it("test that h1 render value of counter",()=>{
    let header1=de.query(By.css('h1'))
    let btn=de.query(By.css("#btnAddClick"))
    btn.triggerEventHandler("click")
    fixture.detectChanges();
    expect(header1.nativeElement.textContent).toEqual('1')
  })

});
