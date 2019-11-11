import { Copy } from './Copy';
import { Media } from './Media';
import { ContributionsCriterias } from './ContributionsCriterias';
import { TargetedCriterias } from './TargetedCriterias';
export class Project {

    public constructor(public title:string, public description:string, public finished:number, public copy:Copy, public media:Media, public contributionsCriterias:ContributionsCriterias, public targetedCriterias:TargetedCriterias, public userId:number) {
    }

}
