import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
  
export class VideoService {

  constructor(private storage: AngularFireStorage) { }

  
  uploadVideo(file: File) {
    
    const filepath = `video/${file.name}`;
    const storageRef = this.storage.ref(filepath);
    const uploadTask = storageRef.put(file);

    return uploadTask.snapshotChanges();
  }
}
