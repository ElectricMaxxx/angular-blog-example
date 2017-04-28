import {Gig} from './gig.value';
import {Injectable} from '@angular/core';

@Injectable()
export class GigService {
    private gigs: Gig[];

    constructor() {
        this.gigs = [];
        this.gigs.push({
            talk: 'Der Content-Manager mag den Baum',
            event: 'IPC Spring',
            date: '30.05.2017',
            speaker: 'Maximilian Berghoff'
        });
    }

    getGigs(): Gig[] {
        return this.gigs;
    }

    addGig(gig: Gig): void {
        this.gigs.push(gig);
    }

    saveGig (gig: Gig) {
        // todo Change or save.
    }
}
