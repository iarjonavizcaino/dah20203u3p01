import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles = [];

  constructor() {

    this.profiles.push(
      {
        photo: 'https://sites.google.com/site/aplicacionesempresarialestec/_/rsrc/1472870214559/IsraelArjona.png?height=200&width=175',
        name: 'Israel Arjona Vizcaíno',
        place: 'Santa María del Oro',
        loveCount: 0,
        likeCount: 0,
        interest: [{description: 'Música', color: '#010101'}, {description: 'Deportes', color: '#A1A1A1'}]
      }
    );

    this.profiles.push({
      photo: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/105041189_3371542942889786_1718442896032453481_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=gFqoTgtiADEAX88C8jU&_nc_ht=scontent.fgdl5-2.fna&oh=52746b6da5b6bb9e76b0c4cdc0c6a53a&oe=5FDA2D99',
      name: 'Martin Jimenez',
      place: 'Tepic',
      loveCount: 0 ,
      likeCount: 0 ,
      interest: [{description: 'Música', color: '#010101'}, {description: 'Ajedrez', color: '#666666'}, {description: 'Futbol', color: '#A1A1A1'}]
    });

  }

}
