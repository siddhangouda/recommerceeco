import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StatusPipe'
})
export class StatusPipe implements PipeTransform {

  transform(items: Array<any>, category: string): Array<any> {
    return items.filter(item => item.status === category);
}

}
