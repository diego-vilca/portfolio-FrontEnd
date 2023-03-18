import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.css']
})
export class EditSocialComponent {
  @Input() idEditar ?: number;
}
