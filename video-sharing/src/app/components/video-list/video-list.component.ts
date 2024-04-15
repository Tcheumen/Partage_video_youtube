import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {

  videos: { embedUrl: SafeResourceUrl, likes: number, comments: string[] }[];
  
  newComment: string = '';

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/pmo9r8Y63O8?si=2MwrO8Z7XomviYsj"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qLCtgqBjTHE?si=ozJRIwEKi-rKdmdt"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/SBQ0_nwoDtY?si=N-SpKqGdorzj9IX6"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/uXgF8SqBerk?si=uClVspseCdSluNdK"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/NkGZkkJtbiw?si=8ixX-ZZqpqq8Xw3V"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/RgbzUDz8lA0?si=FWueZAF9SMnY9Nks"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/2ckIh5UIejA?si=K9yhtRfmpHW7oGC_"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/_V4r9JacfD8?si=GanYZZKS7G14qI2p"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/jYvqMJfVacE?si=-C6jiF-W_1I_Fz9w"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/QVqjuAWKyLA?si=vFIUpAze6fsBUf8p"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/z9eGKZ4lU4c?si=D6h3LwW-FdkeQ7hh"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/BvY0oIaLWD8?si=6yz8DqNFJn0vauFE"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/tC7xQsRKvCY?si=O6C9cDQv2uESDw0d"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/flwC_k1zHkw?si=T1jWL1g0bgAPyQYn"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3zB8CVZadHE?si=7F7lUvSsABAZwlif"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/euVg7zTKXvQ?si=cdDf9fyEF6KGi6_G"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3br1nhIVuSM?si=CJiokEPud_Ibg5oC"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/jVsG8Ame6_s?si=ZXG2JdGBNl35w6Rc"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Y9-Tzdz2nC0?si=1i19DVSgaF61rnAe"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/O1v_CTcEkHg?si=XINyNQzNRWGTb4Wz"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3ZS-GCI9tek?si=f2b5TfO1XNdawusk"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/NujwaeUjgoo?si=dvgvThA5EBwsiS0f"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Z_PW2kN-CjA?si=VzXcqNY9soBWlfgL"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/rSOINg1FeY0?si=UHmGTmNf5YIbTpEh"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/V-CE-pWmU1I?si=FBEG806nve2CyjId"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/pwoMobQqYeg?si=dBWZHFc38YmV3fl_"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/A8ZU_bB-IZk?si=bTuZYmzgpe40Rw36"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/1U4q54svQwA?si=0vPdPjjQp8HnKBjP"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lf9KUnAhcJA?si=zKM003HMH_-0D8KF"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/vsrZeGKHuVA?si=s-w_FqM80WhKiFR6"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Y9-Tzdz2nC0?si=VDGM2ZZM0FGAjrBh"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/flwC_k1zHkw?si=i3LlY7MeHEL9NZw4"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/O1v_CTcEkHg?si=hICDGUga3ImhXtvU"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/HYEWhKeSQ2E?si=0GerNhQr-vuCaIax"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EFhrAhekWSk?si=FvEI9CUXd8Qw6FVK"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/cMbybVD2zIk?si=gRSZc7g63U60qxrG"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/z_mbxBSMFqc?si=MQja1LIP7TwWWVI7"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5502QZpf3l4?si=CTzOezJhiDkv2J3d"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/AhaoB_F38rQ?si=U562WSt4Ghl_tYDQ"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/euVg7zTKXvQ?si=nPkbMR1ondLgN_p0"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3zB8CVZadHE?si=1X0eVQ_7cAkVMhTe"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/SBQ0_nwoDtY?si=T4yJCAbRwJy593AC"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/cWnJpN3v-oY?si=mZMlx0nlhS8BsGqW"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ce4rF6v29Go?si=1YM-bIU5Wy3YYppB"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/V-CE-pWmU1I?si=UBsAZZdhvoARROYg"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/S5fmoaTS61U?si=fGrQtjXj_4OzkxX9"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/1U4q54svQwA?si=XKPkPQkVLsHV7Bn-"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/pwoMobQqYeg?si=xJqh-26q5J6-mnCf"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ce4rF6v29Go?si=kMF8JCIbj5Ilqsrt"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/HYEWhKeSQ2E?si=nurCAg2smR55stRZ"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EFhrAhekWSk?si=QAvXUlXxpKNeZbh8"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/AhaoB_F38rQ?si=nOxELYfVSOb9N1ey"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gHeHhJBR6e8?si=aHgWbjquh2Fwjacd"), likes: 0, comments: [] },
      { embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/e-7yuuDF1DQ?si=vdZhrZiuj8zYyjKu"), likes: 0, comments: [] },

    ];
    
  }

  likeVideo(video: { embedUrl: SafeResourceUrl, likes: number }): void {
    video.likes++;
  }

  addComment(video: { embedUrl: SafeResourceUrl, likes: number, comments: string[] }, comment: string): void {
    video.comments.push(comment);
    this.newComment = ''; // Clear input after adding comment
  }
}
