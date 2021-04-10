const SonosDevice = require('../lib/').SonosDevice
const ServiceEvents = require('../lib/models/service-event').ServiceEvents;
const SonosEvents = require('../lib/index').SonosEvents;

const kantoor = new SonosDevice(process.env.SONOS_HOST || '192.168.96.56', 1400, 'RINCON_000Esecret1400')

kantoor.Events.on(SonosEvents.Error, (err) => {
  console.error('Subscribe error', err);
});

kantoor.Events.on(SonosEvents.CurrentTransportStateSimple, (state) => {
  console.log('New State %s', state.toString());
})

kantoor.AlarmClockService.Events.on(ServiceEvents.ServiceEvent, data => {
  console.log('AlarmClock data %s', JSON.stringify(data))
})

kantoor.ZoneGroupTopologyService.Events.on(ServiceEvents.Error, (err) => {
  console.error('Subscribe error for ZoneGroupTopologyService', err);
})

kantoor.ZoneGroupTopologyService.Events.on(ServiceEvents.ServiceEvent, data => {
  console.log('ZoneGroupTopology data %s', JSON.stringify(data))
})

kantoor.AVTransportService.Events.on(ServiceEvents.ServiceEvent, data => {
  console.log('AVTransport lastchange %s', JSON.stringify(data, null, 2))
})

kantoor.RenderingControlService.Events.on(ServiceEvents.ServiceEvent, data => {
  console.log('RenderingControl lastchange %s', JSON.stringify(data, null, 2))
})

setInterval(async () => {
  const result = await kantoor.RefreshEventSubscriptions();
  console.log('Succesfully refreshed the events %s', result)
}, 300 * 1000)

process.on('SIGINT', () => {
  console.log('Hold-on cancelling all subscriptions')
  kantoor.CancelEvents();
  kantoor.AlarmClockService.Events.removeAllListeners(ServiceEvents.ServiceEvent)
  kantoor.AVTransportService.Events.removeAllListeners(ServiceEvents.ServiceEvent)
  kantoor.RenderingControlService.Events.removeAllListeners(ServiceEvents.ServiceEvent)
  kantoor.ZoneGroupTopologyService.Events.removeAllListeners(ServiceEvents.ServiceEvent)
  setTimeout(() => {
    process.exit(0)
  }, 3000)
})
