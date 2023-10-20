/**
 * Forked from
 * https://github.com/basst314/ngx-webcam
 * @Author basst314
 **/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from './webcam/webcam.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WebcamComponent],
    exports: [WebcamComponent],
})
export class WebcamModule {}
