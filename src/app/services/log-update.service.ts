import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class LogUpdateService {
  constructor(private swUpdate: SwUpdate) {}

  init() {
    console.log(111);
    this.swUpdate.versionUpdates.subscribe((event) => {
      console.log(event.type);
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${event.currentVersion.hash}`);
          console.log(
            `New app version ready for use: ${event.latestVersion.hash}`
          );
          break;
      }
    });
  }
}
