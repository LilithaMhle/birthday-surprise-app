import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AudioService } from '../../audio.service';

interface ConfettiPiece {
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  round: boolean;
}

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class FinalPage implements OnInit {

  confettiVisible = false;
  confettiPieces: ConfettiPiece[] = [];

  private colors = [
    'rgba(255, 100, 180, 0.88)',
    'rgba(180, 80, 255, 0.88)',
    'rgba(255, 200, 80, 0.88)',
    'rgba(255, 150, 200, 0.88)',
    'rgba(200, 140, 255, 0.88)',
    'rgba(255, 220, 120, 0.88)',
  ];

  constructor(
    private router: Router,
    private audio: AudioService
  ) {}

  ngOnInit() {
    this.launchConfetti();
  }

  launchConfetti() {
    this.confettiPieces = Array.from({ length: 48 }, () => ({
      left:     Math.random() * 100,
      color:    this.colors[Math.floor(Math.random() * this.colors.length)],
      delay:    Math.random() * 2.5,
      duration: Math.random() * 2.5 + 2.5,
      size:     Math.floor(Math.random() * 6) + 5,
      round:    Math.random() > 0.5,
    }));
    this.confettiVisible = true;

    // Remove confetti after animations complete
    setTimeout(() => { this.confettiVisible = false; }, 7000);
  }

  replay() {
    this.audio.restart();
    this.router.navigateByUrl('/opening');
  }
}
