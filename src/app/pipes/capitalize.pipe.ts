import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any):string {
    if(value){
      if(value.indexOf(" ")!=-1){
        let spliter=value.split(' ');
        let splitarr=[];
        for(let each of spliter){
          splitarr.push(this.capitalizer(each));
        }
        return splitarr.join(' ');
      }else{
        return this.capitalizer(value);
      }
    }
  }
  capitalizer(value:string):any{
    var x=value.charAt(0);
        x=x.toUpperCase()
        let spvalue =value.split('');
        spvalue.splice(0,1,x);
        value=spvalue.join('');
        return value;
  }

}
