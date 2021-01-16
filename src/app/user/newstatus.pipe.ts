import { Pipe, PipeTransform } from '@angular/core';
import { SignatureHelpItems } from 'typescript';

@Pipe({
  name: 'newstatus'
})
export class NewstatusPipe implements PipeTransform {
  
  transform(items: Array<any>, status :any) : Array<any> {
    return items.filter(item => item.status === status);
    // console.log("pipe list: ", items),
    // console.log("pipe arg", status );
}


}
