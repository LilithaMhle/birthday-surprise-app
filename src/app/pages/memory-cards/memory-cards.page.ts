import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MemoryCard {
  icon: string;
  title: string;
  text: string;
  revealed: boolean;
  placeholder?: boolean;
}

@Component({
  selector: 'app-memory-cards',
  templateUrl: './memory-cards.page.html',
  styleUrls: ['./memory-cards.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class MemoryCardsPage {

  cards: MemoryCard[] = [
    {
      icon: '💌',
      title: 'A Message For You 💌',
      revealed: false,
      text: `I hope you become everything you have ever wanted for yourself. I hope life meets you gently and rewards all the effort you put into becoming better every day. I see how hard you work, how much pressure you carry, and how much you sacrifice for your future. That is why I will always support your decisions, even when it means less time together.

I never want to become a distraction to the life you are trying to build for yourself. I trust your judgment because I know your intentions are always bigger than the present moment. I know you are trying to create something meaningful for your future and I admire that so much about you.

I am rooting for your growth, your peace, your emotional stability, your happiness, and every version of success waiting for you. Even on difficult days, I hope you never forget how capable you are.

And no matter how busy life gets, I hope you always remember that there is someone out there who believes in you deeply.`
    },
    {
      icon: '🎁',
      title: 'A Surprise Message 🎁',
      revealed: false,
      text: `If I could give you one thing in this life, it would be the ability to see yourself the way I see you.

You are so much softer than you think you are. So much more important than you realize. Your presence changes rooms, changes moods, changes people. You have this quiet way of making people feel safe around you and I do not even think you notice it.

I know life has not always allowed you to slow down and fully see how loved you are, but I hope one day you do.

And when that day comes, I hope you remember that someone once sat down and created all of this just to remind you how special your existence is.`
    },
    {
      icon: '✨',
      title: 'My Favorite Memory',
      revealed: false,
      text: `One of my favorite memories with you will always be that night during first year when we walked to the Student Centre together. Everything about that night felt magical to me. The silence, the way we talked, the videos we took, the feeling of just being beside you.

I still remember that moment when we were kissing and the electricity suddenly came back exactly at that time. We both started giggling because it felt so unreal and perfectly timed. It was such a small moment, but somehow it became one of the most sentimental memories for me. That little laugh we shared in that moment is something I still think about.

That night felt warm, soft, and special in a way I cannot fully explain. Some memories do not need pictures to survive because the feeling never really leaves you. I still carry that night in my heart exactly the way it felt.`
    },
    {
      icon: '❤️',
      title: 'What I Love About You',
      revealed: false,
      text: `One of the things I love about you is your resilience. No matter how many times life tries to defeat you, you never stay down forever. You always find a way to rise again, and you do it with so much strength and determination.

You are one of the most goal oriented people I know. You know what you want for yourself, and even when things become difficult, you continue pushing towards it. You are disciplined, focused, and hardworking in a way that inspires the people around you.

Who am I to be unfocused when I have someone like you in my life?  Usisbonelo Sam.`
    }
  ];

  revealCard(index: number) {
    this.cards[index].revealed = !this.cards[index].revealed;
  }
}
