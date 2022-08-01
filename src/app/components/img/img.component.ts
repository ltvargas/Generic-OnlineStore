import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  //selector is the name with which the component is called
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img =newImg;
    console.log('change just img',this.img);
  }
  //@Input() img: string= '';
  @Input() alt: string= '';
  @Output() loaded=new EventEmitter<string>();
  imgDefault: string= './assets/image/photo-default.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //run once time, No async
    console.log('constructor','imgValue =>', this.img);
   }

  ngOnChanges(changes: SimpleChanges){
    //before and during render, changes inputs n times
    //simplechanges know what changes
    console.log('ngOnChanges','imgValue =>', this.img);
    console.log('changes',changes);

  }
  ngOnInit(): void {
    //before render, async (fetch,promise)..., run once time
    console.log('ngOnInit','imgValue =>', this.img);
    // this.counterFn = window.setInterval(()=>{
    //   this.counter +=1;
    //   console.log('runing counter');
    // },1000);
  }

  ngAfterViewInit() {
    //after render, handler children
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    console.log('OnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
