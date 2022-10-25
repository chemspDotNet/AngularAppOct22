import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations:[],
    imports:[
         MatSliderModule,
         MatTooltipModule
    ],
    exports:[ 
        MatSliderModule,
        MatTooltipModule
    ]
})
export class MyMaterialModule {

}