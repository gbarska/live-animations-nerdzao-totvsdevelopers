import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
    keyframes,
    group
  } from '@angular/animations';


export const borderState =

trigger('borderState', [
  state('default', style({
    color: 'black'
  })),
  state('error', style({
    color: '#29a3a3'
  })),
]);

// tslint:disable-next-line: align
export const popOverState =

trigger('popOverState', [
      state('hide', style({
       opacity: '0'
      })),
      state('show', style({
        opacity: '1'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('2000ms ease-in'))
    ]);

// tslint:disable-next-line: align
export const photoState =

trigger('photoState', [
      state('move', style({
         transform: 'translateX(-100%) translateY(50px)'
      })),
      state('enlarge', style({
        transform: 'scale(1.5)'
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotate(90deg)'
      })),
      transition('move <=> spin', animate('1000ms ease-in')),
      transition('move <=> enlarge', animate('1500ms ease-in')),
      transition('move <=> default', animate('200ms ease-in')),
      transition('spin <=> enlarge', animate('900ms ease-out')),
      transition('spin <=> default', animate('600ms ease-out')),
      transition('enlarge <=> default', animate(2500)),
    ]);

    //bug
export const clickedStateTrigger = trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '100px'
      })),
      state('mousedown', style({
        backgroundColor: 'red',
        border: '1px solid black',
      })),
      transition('mousedown <=> clicked', animate(300)),
    ]);

export const animateMultiState =

    trigger('animateMultiState', [
      state('default',style({
        backgroundColor: '#051d4d',
        opacity: 1
      })),
      state('animated',style({
        backgroundColor: 'white',
        opacity: 0
      })),
      transition('default => animated', [
        style({
         backgroundColor: '#051d4d',
         opacity: 1
        }),
        animate(1500, style({
         backgroundColor: 'black',
         opacity: 1
        })),
        animate(1600, style({
          backgroundColor: 'grey',
          opacity: 0
        })),
        animate(300)
      ])
    ]);


//voidstate
export const todoState =

    trigger('todoState', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(1000)
      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate(1200, style({
          opacity: 0.5,
          color: 'red'
        }))
      ])
    ]);

//group
export const groupState =

    trigger('groupState', [
      transition(':enter', [
        style({
          opacity: 0,
          backgroundColor: 'white'
        }),
       group([
         animate(1000, style({
           opacity: 0.7
         })),
         animate(2000, style({
           backgroundColor: 'lightblue'
         }))
       ]),
       animate(300, style({
         backgroundColor: 'white'
       }))

      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate(300)
      ])
    ]);

export const listPhotosAnimation =

trigger('listPhotosAnimation', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-150%)',
      }),
      stagger('300ms', animate('1000ms ease-out', keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-150%)',
          offset: 0
        }),
        style({
         opacity: 0.8,
         transform: 'translateX(15%)',
         offset: 0.4
       }),
       style({
         opacity: 1,
         transform: 'translateX(0)',
         offset: 1
       })
       ]))),
    ], {optional: true})
])
]);


