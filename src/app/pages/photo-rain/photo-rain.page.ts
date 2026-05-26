import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Bubble {
  src: string;
  size: number;
  left: number;
  duration: number;
  delay: number;
  rotateStart: number;
  rotateEnd: number;
  opacity: number;
}

@Component({
  selector: 'app-photo-rain',
  templateUrl: './photo-rain.page.html',
  styleUrls: ['./photo-rain.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class PhotoRainPage implements OnInit {

  bubbles: Bubble[] = [];

  /**
   * ─── ADD YOUR BABY PHOTOS HERE ───────────────────────────────────────────
   * Place baby photos in:  src/assets/photos/
   * Then list the filenames below. Add as many as you like.
   * The app will cycle through them across the 22 falling bubbles.
   */
  private photoFiles: string[] = [
    'baby1.jpg',
    'baby2.jpg',
    'baby3.jpg',
    'baby4.jpg',
    'baby5.jpg',
    'baby6.jpg',
  ];

  ngOnInit() {
    this.buildBubbles();
  }

  private buildBubbles() {
    const count = 22;
    for (let i = 0; i < count; i++) {
      const filename = this.photoFiles[i % this.photoFiles.length];
      const size = this.rand(52, 98);
      this.bubbles.push({
        src: `assets/photos/${filename}`,
        size,
        left: this.rand(2, 87),
        duration: this.rand(14, 24),
        delay: -(Math.random() * 20),   // negative delay so bubbles appear immediately
        rotateStart: this.rand(-15, 15),
        rotateEnd:   this.rand(-15, 15) + this.rand(-30, 30),
        opacity: this.rand(65, 95) / 100,
      });
    }
  }

  /** Called when an image fails to load — swaps in a canvas-drawn placeholder */
  onImgError(event: Event, index: number) {
    const img = event.target as HTMLImageElement;
    const size = this.bubbles[index].size;
    const canvas = document.createElement('canvas');
    canvas.width  = size * 2;
    canvas.height = size * 2;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(2, 2);
    this.drawPlaceholderBaby(ctx, size, index);
    img.src = canvas.toDataURL('image/png');
  }

  /** Draws a warm illustrated baby face as a circle placeholder */
  private drawPlaceholderBaby(ctx: CanvasRenderingContext2D, s: number, idx: number) {
    const palettes = [
      ['#f9d29d','#f4b98a','#e8956b'],
      ['#fce4d6','#f9c5a8','#f0a882'],
      ['#ffe4cc','#ffd0aa','#f5b888'],
      ['#fdebd8','#f8d5b8','#f0bc94'],
      ['#e8d5c0','#d9c2a8','#c9ae90'],
      ['#fde8ca','#f4c898','#e8a870'],
    ];
    const pal = palettes[idx % palettes.length];

    // Background gradient
    const grad = ctx.createRadialGradient(s*0.4, s*0.35, s*0.05, s/2, s/2, s*0.5);
    grad.addColorStop(0, pal[0]);
    grad.addColorStop(0.6, pal[1]);
    grad.addColorStop(1, pal[2]);

    ctx.save();
    ctx.beginPath();
    ctx.arc(s/2, s/2, s*0.5, 0, Math.PI*2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.clip();

    // Face
    ctx.fillStyle = pal[0];
    ctx.beginPath(); ctx.arc(s/2, s*0.43, s*0.22, 0, Math.PI*2); ctx.fill();

    // Body
    ctx.fillStyle = pal[1];
    ctx.fillRect(s*0.28, s*0.6, s*0.44, s*0.3);

    // Eyes
    ctx.fillStyle = 'rgba(40,15,5,0.32)';
    ctx.beginPath(); ctx.arc(s*0.41, s*0.41, s*0.028, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(s*0.59, s*0.41, s*0.028, 0, Math.PI*2); ctx.fill();

    // Smile
    ctx.strokeStyle = 'rgba(160,80,40,0.4)';
    ctx.lineWidth = s * 0.024;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(s/2, s*0.48, s*0.065, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Hair
    ctx.fillStyle = pal[2];
    ctx.beginPath();
    ctx.arc(s/2, s*0.25, s*0.13, Math.PI, 0);
    ctx.fill();

    ctx.restore();
  }

  private rand(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
