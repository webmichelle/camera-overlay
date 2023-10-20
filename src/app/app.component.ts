import { Component } from '@angular/core';
import { WebcamInitError } from './modules/webcam/domain/webcam-init-error';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Camera Overlay';

    public handleInitError(error: WebcamInitError): void {
        if (
            error.mediaStreamError &&
            error.mediaStreamError.name === 'NotAllowedError'
        ) {
            console.warn('Camera access was not allowed by user!');
        }
    }
}
