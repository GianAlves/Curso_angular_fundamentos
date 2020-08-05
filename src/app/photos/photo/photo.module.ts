import { NgModule } from '@angular/core';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule ({
    declarations: [
        PhotoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ PhotoComponent ]
})

export class PhotoModule {}