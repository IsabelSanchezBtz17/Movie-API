import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input ()  homepage: string= '';
  @Input () overview: string= '';
  @Input ()  original_language: string= '';
  @Input () release_date: string= '';


  @Output() mensajeEmitter: EventEmitter<boolean> = new EventEmitter <boolean>();
  constructor() { }

  ngOnInit(): void {
  }
 
  closeInfo(): void{
    this.mensajeEmitter.emit(false);
  }
}
