import { Component } from '@angular/core';
import { Intro } from "./components/intro/intro";
import { Projects } from "./components/projects/projects";
import { Photos } from "./components/photos/photos";

@Component({
  selector: 'app-home',
  imports: [Intro, Projects, Photos],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
