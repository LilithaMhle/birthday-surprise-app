import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AudioService } from '../../audio.service';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.page.html',
  styleUrls: ['./opening.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class OpeningPage {

  constructor(
    private router: Router,
    private audio: AudioService
  ) {}

  onStart() {
    // Start background voice audio with fade-in
    this.audio.play();

    // Short delay for animation feel, then navigate
    setTimeout(() => {
      this.router.navigateByUrl('/greeting');
    }, 600);
  }
}
