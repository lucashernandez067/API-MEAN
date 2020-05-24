import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tiempovivido'
})
export class TiempoVivido implements PipeTransform{
    transform(value:any, value2:any) {
        
        var edad = null;        
        var value_split = value.split('\-');
        var value2_split = value2.split('\-');
        

        edad = value_split[0] - value2_split[0];

        if(value_split[1] < value2_split[1]){
            edad -= 1;
        }

        if((value_split[1] == value2_split[1]) && (value_split[2] < value2_split[2])){
            edad -= 1;
        }

        return edad;
    
    }
}