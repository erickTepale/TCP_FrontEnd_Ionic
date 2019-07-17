import { TestBed } from '@angular/core/testing';

import { ChannelMessageService } from './channel-message.service';

describe('ChannelMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelMessageService = TestBed.get(ChannelMessageService);
    expect(service).toBeTruthy();
  });
});
