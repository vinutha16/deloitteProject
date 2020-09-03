import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filteritem',
    pure: false
})
export class FilteritemPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {return null; }
    if (!args) {return value; }

    args = args.toLowerCase();

    return value.filter(function(item) {
        return JSON.stringify(item.filterType).toLowerCase().includes(args);
    });
}
}
