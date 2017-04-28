import { Component } from '@angular/core';
import {GigService} from './gig.service';
import {Gig} from './gig.value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GigService]
})
export class AppComponent {
  title = 'Mayflower Speaker - Konferenzen, UserGroups, Meetups';
  valueToAdd: Gig;

  constructor (private gigService: GigService) {
    this.revertGigValue();
  }

  get list (): Gig[] {
    return this.gigService.getGigs();
  }

  addGigValue() {
    this.gigService.addGig(this.valueToAdd);
    this.revertGigValue();
  }

  revertGigValue () {
    this.valueToAdd = {talk: '', event: '', speaker: '', date: ''};
  }

  onGigChange (gig: Gig) {
    this.gigService.saveGig(gig);
  }
}
