import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from './modules/webcam/webcam.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, WebcamModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
