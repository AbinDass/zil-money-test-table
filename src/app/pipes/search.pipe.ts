import { Pipe, PipeTransform } from '@angular/core';
import { userInterface } from '../model/userInterface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(datas: userInterface[], query:string, property:string): userInterface[] {
    if(query === '') return datas
    if(datas.length){
      const regx = new RegExp(query,'i')
      return datas.filter(data =>{
        if(property === 'name') return regx.test(data.name) || regx.test(data.email)
        if(property === 'company') return regx.test(data.company.name)
        if(property === 'designation') return regx.test(data.company.designation)
        return true
      })
    }
    return [];
  }

}
