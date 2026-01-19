import { Component } from '@angular/core';
import { SerifFont } from '../../../../directives/serif-font';
import { StyledButton } from "../../../../directives/styled-button";

@Component({
  selector: 'app-intro',
  imports: [SerifFont, StyledButton],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {

}
