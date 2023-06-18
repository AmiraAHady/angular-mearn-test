import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getsimple value should return String should be created', () => {
    expect(service.getSimpleValue()).toBe('Simple Value');
    expect(typeof service.getSimpleValue()).toEqual('string')
  });
});
