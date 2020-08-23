import {Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'dataType'
})

export class dataPipe implements PipeTransform{
    transform(value:string){
        if(parseInt(value)<1){
           return value + " MB"
        }
        else{
            return value + " GB"
        }
    }
}