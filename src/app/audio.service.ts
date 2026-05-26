import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private sound: Howl | null = null;
  private muted = false;

  /** Start playing birthday voice audio with gentle fade-in */
  play() {
    if (this.sound) {
      this.sound.play();
      return;
    }

    this.sound = new Howl({
      src: ['assets/audio/birthday-voice.mp3'],
      loop: true,
      volume: 0,         // start silent, fade in
      autoplay: false,
    });

    this.sound.play();

    // Fade in over 2.5 seconds to volume 0.3
    this.sound.fade(0, 0.3, 2500);
  }

  /** Mute or unmute */
  toggleMute(): boolean {
    if (!this.sound) return this.muted;
    this.muted = !this.muted;
    this.sound.mute(this.muted);
    return this.muted;
  }

  get isMuted(): boolean {
    return this.muted;
  }

  /** Stop and restart from beginning (for replay) */
  restart() {
    if (this.sound) {
      this.sound.stop();
      this.sound = null;
    }
    // Small delay so navigation completes first
    setTimeout(() => this.play(), 300);
  }

  /** Pause (e.g. app goes to background) */
  pause() {
    this.sound?.pause();
  }

  /** Resume (e.g. app comes back to foreground) */
  resume() {
    if (this.sound && !this.sound.playing()) {
      this.sound.play();
    }
  }
}
