import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    // templateUrl: './event-thumbnail.component.html'
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Price: \${{ event?.price }}</div>
    <div>Date: {{ event?.date }}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>

    <div *ngIf="event?.location">
        <span>Location: {{event?.location?.city}}</span>
        <span class="pad-left">Location: City: {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        Online url: {{event?.onlineUrl}}
    </div>
</div>
    `,
    styles: [`
        .bold {font-weight: bold;}
        .green {color: #003300 !important;}
        .thumbnail {min-height:210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any

    // getStartTimeClass() {
    //     const isEarlyStart = this.event?.time === '8:00 am';
    //     return { green: isEarlyStart, bold: isEarlyStart }
    // }

    getStartTimeClass() {
        const isEarlyStart = this.event?.time === '8:00 am';
        if (isEarlyStart)
            return 'green bold'

        return ''
    }
}