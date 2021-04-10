import { ChannelValue } from '../models';
import { RenderingControlServiceBase } from './rendering-control.service';

export class RenderingControlService extends RenderingControlServiceBase {
  protected ResolveEventPropertyValue(name: string, originalValue: unknown, type: string): any {
    if (name === 'Mute') {
      const output = {} as ChannelValue<boolean>;
      (originalValue as Array<any>).forEach((v) => {
        output[v.channel] = v.val === '1';
      });
      return output;
    }

    if (name === 'Volume') {
      const output = {} as ChannelValue<number>;
      (originalValue as Array<any>).forEach((v) => {
        output[v.channel] = parseInt(v.val, 10);
      });
      return output;
    }
    return super.ResolveEventPropertyValue(name, originalValue, type);
  }
}
