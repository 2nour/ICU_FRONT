import { Copy } from './Copy';
import { Media } from './Media';
import { Criterias } from './Criterias';
export class Project {

    public constructor(public title:string, public description:string, public finished:number, public copy:Copy, public media:Media, public criteria:Criterias) {
    }

}
