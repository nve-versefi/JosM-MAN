import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-bio',
  templateUrl: './popup-bio.component.html',
  styleUrls: ['./popup-bio.component.scss']
})
export class PopupBioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
