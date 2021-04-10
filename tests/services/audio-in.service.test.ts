import { expect } from 'chai';
import { TestHelpers } from '../test-helpers';
import { AudioInService } from '../../src/services/audio-in.service';

describe('AudioInService', () => {
    describe('Event parsing', () => {
    it('works', (done) => {
      process.env.SONOS_DISABLE_EVENTS = 'true'
      const service = new AudioInService(TestHelpers.testHost, 1400);
      service.Events.once('serviceEvent', (data) => {
        expect(data.AudioInputName).to.be.equal('Audio Component');
        expect(data.Icon).to.be.equal('AudioComponent');
        expect(data.LeftLineInLevel).to.be.equal(1);
        expect(data.LineInConnected).to.be.true;
        expect(data.RightLineInLevel).to.be.equal(1);
        done()
      })
      service.ParseEvent('<e:propertyset xmlns:e="urn:schemas-upnp-org:event-1-0"><e:property><AudioInputName>Audio Component</AudioInputName></e:property><e:property><Icon>AudioComponent</Icon></e:property><e:property><LineInConnected>1</LineInConnected></e:property><e:property><LeftLineInLevel>1</LeftLineInLevel></e:property><e:property><RightLineInLevel>1</RightLineInLevel></e:property></e:propertyset>');
      delete process.env.SONOS_DISABLE_EVENTS
    }, 1)
  })
});
