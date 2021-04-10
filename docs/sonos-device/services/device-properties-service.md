---
layout: default
title: DevicePropertiesService
parent: Services
grand_parent: Sonos device
---
# DevicePropertiesService
{: .no_toc }

Modify device properties, like led status and stereo pairs

The DevicePropertiesService is available on these models: `v1-S1` / `v1-S5` / `v1-S9`.

```js
const SonosDevice = require('@svrooij/sonos').SonosDevice
const sonos = new SonosDevice('192.168.x.x')
sonos.DevicePropertiesService.OneOfTheMethodsBelow({...})
```

All actions that require input expect an object with the specified parameters, even if it only requires one parameter.

1. TOC
{:toc}

---

### AddBondedZones

```js
const result = await sonos.DevicePropertiesService.AddBondedZones({ ChannelMapSet:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### AddHTSatellite

```js
const result = await sonos.DevicePropertiesService.AddHTSatellite({ HTSatChanMapSet:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **HTSatChanMapSet** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### CreateStereoPair

Create a stereo pair (left, right speakers), right one becomes hidden

```js
const result = await sonos.DevicePropertiesService.CreateStereoPair({ ChannelMapSet:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` | example: RINCON_B8E9375831C001400:LF,LF;RINCON_000E58FE3AEA01400:RF,RF |

This actions returns a boolean whether or not the requests succeeded.

**Remarks** No all speakers support StereoPairs

### EnterConfigMode

```js
const result = await sonos.DevicePropertiesService.EnterConfigMode({ Mode:..., Options:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Mode** | `string` |  |
| **Options** | `string` |  |

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **State** | `string` |  |

### ExitConfigMode

```js
const result = await sonos.DevicePropertiesService.ExitConfigMode({ Options:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Options** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### GetAutoplayLinkedZones

```js
const result = await sonos.DevicePropertiesService.GetAutoplayLinkedZones({ Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **IncludeLinkedZones** | `boolean` |  |

### GetAutoplayRoomUUID

```js
const result = await sonos.DevicePropertiesService.GetAutoplayRoomUUID({ Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **RoomUUID** | `string` |  |

### GetAutoplayVolume

```js
const result = await sonos.DevicePropertiesService.GetAutoplayVolume({ Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **CurrentVolume** | `number` |  |

### GetButtonLockState

```js
const result = await sonos.DevicePropertiesService.GetButtonLockState();
```

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **CurrentButtonLockState** | `string` |  Possible values: `On` / `Off` |

### GetButtonState

```js
const result = await sonos.DevicePropertiesService.GetButtonState();
```

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **State** | `string` |  |

### GetHouseholdID

```js
const result = await sonos.DevicePropertiesService.GetHouseholdID();
```

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **CurrentHouseholdID** | `string` |  |

### GetLEDState

```js
const result = await sonos.DevicePropertiesService.GetLEDState();
```

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **CurrentLEDState** | `string` |  Possible values: `On` / `Off` |

### GetUseAutoplayVolume

```js
const result = await sonos.DevicePropertiesService.GetUseAutoplayVolume({ Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Source** | `string` |  |

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **UseVolume** | `boolean` |  |

### GetZoneAttributes

```js
const result = await sonos.DevicePropertiesService.GetZoneAttributes();
```

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **CurrentZoneName** | `string` |  |
| **CurrentIcon** | `string` |  |
| **CurrentConfiguration** | `string` |  |

### GetZoneInfo

```js
const result = await sonos.DevicePropertiesService.GetZoneInfo();
```

Output object:

| property | type | description |
|:----------|:-----|:------------|
| **SerialNumber** | `string` |  |
| **SoftwareVersion** | `string` |  |
| **DisplaySoftwareVersion** | `string` |  |
| **HardwareVersion** | `string` |  |
| **IPAddress** | `string` |  |
| **MACAddress** | `string` |  |
| **CopyrightInfo** | `string` |  |
| **ExtraInfo** | `string` |  |
| **HTAudioIn** | `number` |  |
| **Flags** | `number` |  |

### RemoveBondedZones

```js
const result = await sonos.DevicePropertiesService.RemoveBondedZones({ ChannelMapSet:..., KeepGrouped:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` |  |
| **KeepGrouped** | `boolean` |  |

This actions returns a boolean whether or not the requests succeeded.

### RemoveHTSatellite

```js
const result = await sonos.DevicePropertiesService.RemoveHTSatellite({ SatRoomUUID:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **SatRoomUUID** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### SeparateStereoPair

Separate a stereo pair

```js
const result = await sonos.DevicePropertiesService.SeparateStereoPair({ ChannelMapSet:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **ChannelMapSet** | `string` | example: RINCON_B8E9375831C001400:LF,LF;RINCON_000E58FE3AEA01400:RF,RF |

This actions returns a boolean whether or not the requests succeeded.

**Remarks** No all speakers support StereoPairs

### SetAutoplayLinkedZones

```js
const result = await sonos.DevicePropertiesService.SetAutoplayLinkedZones({ IncludeLinkedZones:..., Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **IncludeLinkedZones** | `boolean` |  |
| **Source** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### SetAutoplayRoomUUID

```js
const result = await sonos.DevicePropertiesService.SetAutoplayRoomUUID({ RoomUUID:..., Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **RoomUUID** | `string` |  |
| **Source** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### SetAutoplayVolume

```js
const result = await sonos.DevicePropertiesService.SetAutoplayVolume({ Volume:..., Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **Volume** | `number` |  |
| **Source** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### SetButtonLockState

```js
const result = await sonos.DevicePropertiesService.SetButtonLockState({ DesiredButtonLockState:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **DesiredButtonLockState** | `string` |  Allowed values: `On` / `Off` |

This actions returns a boolean whether or not the requests succeeded.

### SetLEDState

```js
const result = await sonos.DevicePropertiesService.SetLEDState({ DesiredLEDState:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **DesiredLEDState** | `string` |  Allowed values: `On` / `Off` |

This actions returns a boolean whether or not the requests succeeded.

### SetUseAutoplayVolume

```js
const result = await sonos.DevicePropertiesService.SetUseAutoplayVolume({ UseVolume:..., Source:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **UseVolume** | `boolean` |  |
| **Source** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

### SetZoneAttributes

```js
const result = await sonos.DevicePropertiesService.SetZoneAttributes({ DesiredZoneName:..., DesiredIcon:..., DesiredConfiguration:... });
```

Input object:

| property | type | description |
|:----------|:-----|:------------|
| **DesiredZoneName** | `string` |  |
| **DesiredIcon** | `string` |  |
| **DesiredConfiguration** | `string` |  |

This actions returns a boolean whether or not the requests succeeded.

## DevicePropertiesService event

```js
const SonosDevice = require('@svrooij/sonos').SonosDevice
const sonos = new SonosDevice('192.168.x.x')
sonos.DevicePropertiesService.Events('serviceEvent', (data) => {
  console.log(data);
});
```

The **DevicePropertiesService** emits events with these properties. Not all properties are emitted every time.

| parameter | type | possible values |
|:----------|:-----|:----------------|
| **AirPlayEnabled** | `boolean` |  | 
| **AutoplayIncludeLinkedZones** | `boolean` |  | 
| **AutoplayRoomUUID** | `string` |  | 
| **AutoplaySource** | `string` |  | 
| **AutoplayUseVolume** | `boolean` |  | 
| **AutoplayVolume** | `number` |  | 
| **AvailableRoomCalibration** | `string` |  | 
| **BehindWifiExtender** | `number` |  | 
| **ButtonLockState** | `string` | `On` / `Off` | 
| **ChannelFreq** | `number` |  | 
| **ChannelMapSet** | `string` |  | 
| **ConfigMode** | `string` |  | 
| **Configuration** | `string` |  | 
| **CopyrightInfo** | `string` |  | 
| **DisplaySoftwareVersion** | `string` |  | 
| **ExtraInfo** | `string` |  | 
| **Flags** | `number` |  | 
| **HardwareVersion** | `string` |  | 
| **HasConfiguredSSID** | `boolean` |  | 
| **HdmiCecAvailable** | `boolean` |  | 
| **HouseholdID** | `string` |  | 
| **HTAudioIn** | `number` |  | 
| **HTBondedZoneCommitState** | `number` |  | 
| **HTFreq** | `number` |  | 
| **HTSatChanMapSet** | `string` |  | 
| **Icon** | `string` |  | 
| **Invisible** | `boolean` |  | 
| **IPAddress** | `string` |  | 
| **IsIdle** | `boolean` |  | 
| **IsZoneBridge** | `boolean` |  | 
| **KeepGrouped** | `boolean` |  | 
| **LastChangedPlayState** | `string` |  | 
| **LEDState** | `string` | `On` / `Off` | 
| **MACAddress** | `string` |  | 
| **MicEnabled** | `number` |  | 
| **MoreInfo** | `string` |  | 
| **Orientation** | `number` |  | 
| **RoomCalibrationState** | `number` |  | 
| **SatRoomUUID** | `string` |  | 
| **SecureRegState** | `number` |  | 
| **SerialNumber** | `string` |  | 
| **SettingsReplicationState** | `string` |  | 
| **SoftwareVersion** | `string` |  | 
| **SupportsAudioClip** | `boolean` |  | 
| **SupportsAudioIn** | `boolean` |  | 
| **TVConfigurationError** | `boolean` |  | 
| **VoiceConfigState** | `number` |  | 
| **WifiEnabled** | `boolean` |  | 
| **WirelessLeafOnly** | `boolean` |  | 
| **WirelessMode** | `number` |  | 
| **ZoneName** | `string` |  | 

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.
