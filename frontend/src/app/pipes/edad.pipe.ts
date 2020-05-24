import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'edad'
})
export class EdadPipe implements PipeTransform{
        
    transform(value: any){   
        var edad = null;        
        var f = new Date();
        var value_split = value.split('\-');

        edad = f.getFullYear() - value_split[0];

        if(value_split[1] > (f.getMonth()+1)){
            edad -= 1;
        }

        if((value_split[1] == (f.getMonth()+1)) && (value_split[2] > f.getDate())){
            edad -= 1;
        }
        

        return edad;
    }

}