import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

 @Input() textButton: string | undefined;
 @Input() size: string = 'auto';
}
