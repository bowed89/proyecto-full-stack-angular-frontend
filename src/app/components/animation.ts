import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export const fadeIn: AnimationTriggerMetadata =
trigger('fadeIn', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('500ms linear',
        style({
            opacity: 1
        }))
    ])
]);
