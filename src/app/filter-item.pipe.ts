import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterItem',
})
export class FilterItemPipe implements PipeTransform {
  transform(allItemsArray: Content[], type?: string): Content[] {
    return allItemsArray.filter((item) => item.type == type);
  }
}
