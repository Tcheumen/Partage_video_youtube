import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LikeService } from '../../services/like.service'; 

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss'
})
  
export class VideoDetailsComponent {

  videoId: string | null = null;
  userId: string = 'user123'; 
  newComment: string = ''; 
  comments: any[] = [];


  constructor(private route: ActivatedRoute, private likeService: LikeService) { }
  

  ngOnInit() {
    // Récupérer l'identifiant de la vidéo à afficher depuis les paramètres de l'URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.videoId = id;
        // Récupérer les commentaires associés à cette vidéo
        this.likeService.getComments(this.videoId).subscribe(comments => {
          this.comments = comments;
        });
      }
    });
  }


  likeVideo() {
    if (this.videoId !== null) {
      this.likeService.addLike(this.videoId, this.userId);
    }
  }


  addComment() {
    if (this.videoId !== null && this.newComment.trim() !== '') {
      this.likeService.addComment(this.videoId, this.userId, this.newComment);
      // Réinitialiser le champ de saisie du commentaire après l'ajout du commentaire
      this.newComment = '';
    }
  }
}
