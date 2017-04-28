import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Gig} from './gig.value';

@Component({
    selector: 'gig',
    templateUrl: './gig.component.html'
})
export class GigComponent {
    @Input() gig: Gig;
    editMode: boolean;

    @Output() gigChanged: EventEmitter<Gig> = new EventEmitter<Gig>();

    constructor () {
        this.editMode = false;
    }

    intoEditMode() {
        this.editMode = true;
    }

    editGig () {
        this.gigChanged.emit(this.gig);
        this.editMode = false;
    }

    revertEditMode () {
        this.editMode = false;
    }
}
