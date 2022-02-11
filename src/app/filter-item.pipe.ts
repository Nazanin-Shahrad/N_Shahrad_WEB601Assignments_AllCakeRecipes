import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  transform(value: Content[],type?:string): Content[] {
    return  value.filter(item=>item.type==type);
  }

}
