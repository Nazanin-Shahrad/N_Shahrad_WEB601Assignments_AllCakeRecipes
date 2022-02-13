import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterItem',
})
export class FilterItemPipe implements PipeTransform {
  transform(contentItemsArray: Content[], type?: string): Content[] {
    return contentItemsArray.filter((item) => item.type == type);
  }
}
