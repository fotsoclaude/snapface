import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {
    
  }

  ngOnInit(): void {

  }

  onToggleSnap() {
    if(!this.faceSnap.userSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.faceSnap.btnContent = "Oops, un Snap!";
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.faceSnap.btnContent = "Oh Snaps !";
    }
    this.faceSnap.userSnapped = !this.faceSnap.userSnapped;
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
