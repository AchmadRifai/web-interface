import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsConsumerComponent } from './ws-consumer.component';

describe('WsConsumerComponent', () => {
  let component: WsConsumerComponent;
  let fixture: ComponentFixture<WsConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
