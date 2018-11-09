import {
  trigger,
  animate,
  transition,
  style,
  group,
  query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  //SLIDER
  transition('* => *, :enter', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
    query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

    group ([
      query(':leave', [
        animate('500ms ease-in-out', style({
          transform: 'translateX(100vw)',
          opacity:0.5
        }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-in-out', style({
          transform: 'translateX(0)',
        }))
      ], { optional: true })
    ])
  ])

  // FADE WITH GROUP
  // // The '* => *' will trigger the animation to change between any two states
  // transition('* => *', [
  //   // The query function has three params.
  //   // First is the event, so this will apply on entering or when the element is added to the DOM.
  //   // Second is a list of styles or animations to apply.
  //   // Third we add a config object with optional set to true, this is to signal
  //   // angular that the animation may not apply as it may or may not be in the DOM.
  //   group ([
  //     query(
  //       ':leave',
  //       // here we apply a style and use the animate function to apply the style over 0.3 seconds
  //       [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
  //       { optional: true }
  //     ),
  //     query(
  //       ':enter',
  //       [style({ opacity: 0 }), animate('0.6s', style({ opacity: 1 }))],
  //       { optional: true }
  //     )
  //   ]) 
  // ])
]);


