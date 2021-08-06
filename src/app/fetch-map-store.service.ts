import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { FetchMapService } from './fetch-map.service';

@Injectable({
  providedIn: 'root',
})
export class FetchMapStoreService {
  constructor(private mapService: FetchMapService) {
    // this.getData()
  }

  async fetchAll() {
    // this.todos = await this.FetchMapService.getData().toPromise();
  }
}
