import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() isAuthenticated: boolean;
    @Output() signOutClicked = new EventEmitter<void>();

    readonly rParkGithubUrl = 'https://github.com/r-park';
    readonly rParkAppUrl = 'https://ng2-todo-app.firebaseapp.com/';
    readonly authorGithubUrl = 'https://github.com/yuliankarapetkov'
    readonly appGithubUrl = 'https://github.com/yuliankarapetkov/todo-app';

    showInfo = false;

    constructor() { }

    toggleShowInfo() {
        this.showInfo = !this.showInfo;
    }

    signOut() {
        this.signOutClicked.emit();
    }

    ngOnInit() {
    }
}
