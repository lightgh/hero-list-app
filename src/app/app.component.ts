import { Component} from '@angular/core';

// import { Component, OnInit } from '@angular/core';
// import {observable, Observable, of, pipe} from 'rxjs';
// import {map, filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit{

export class AppComponent{

  title = 'Tour of Heroes';

  // data = [];
  // obs1 = new Observable( (observer) => {
  //   observer.next(56)
  //   observer.next(57)
  //   observer.next(58)
  //   observer.next(59)
  //   observer.next(60)
  //   observer.complete()
  // }).pipe(
  //   tap(data => console.log('==>>tap ' + data )),
  //   map(data => (parseInt(data) * 23) + 34)
  // );

  // obs = new Observable((observer) => {
  //     observer.next(1)
  //     observer.next(2)
  //     observer.next(3)
  //     observer.next(4)
  //     observer.next(5)
  //     observer.complete()
  // }).pipe(
  //   tap(data => console.log( 'tap ' + data )),  //tap
  //   filter(data => data > 2),   // filter operator
  //   tap( data => console.log('filter ' + data )),
  //   map((val) => {return val as number * 2}), // map operator
  //   tap(data => console.log('final ' + data)  )
  // );

  

  // ngOnInit(){
  //     this.obs.subscribe(
  //       val => {
  //         this.data.push(val);
  //           console.log(this.data);
          
  //       }
  //     );

  //     this.obs1.subscribe(
  //       val2 => {
  //         console.log(val2);
          
  //       }
  //     );
  // }

}
