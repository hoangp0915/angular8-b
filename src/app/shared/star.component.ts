import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number; //chuyền vào
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // chuyền ra
    onClick() : void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}