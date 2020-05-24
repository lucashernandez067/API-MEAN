import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'year'
})
export class YearPipe implements PipeTransform{

    transform(value: any){
        var value_split = value.split('\-');
        var year = null;

        year = value_split[0];
        return year;
    }
}