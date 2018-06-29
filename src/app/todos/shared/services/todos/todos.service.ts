import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';

import * as fromServices from '../../../../shared/services';
import { Todo } from '../../models';

import { TodosSharedModule } from '../../shared.module';

@Injectable({
  providedIn: TodosSharedModule
})
export class TodosService {
    private readonly dbPath = 'todos';

    constructor(
        private database: AngularFireDatabase,
        private authService: fromServices.AuthService
    ) { }

    private get uid() {
        return this.authService.user.uid;
    }

    getTodos(): Observable<any[]> {
        return this.database.list(`${this.dbPath}/${this.uid}`)
            .snapshotChanges()
            .pipe(
                map(changes => changes.map(c => ({ ...c.payload.val(), key: c.payload.key })))
            );
    }

    addTodo(todo: Todo) {
        return from(this.database.list(`${this.dbPath}/${this.uid}`).push(todo));
    }

    updateTodo(key: string, todo: Todo) {
        return from(this.database.object(`${this.dbPath}/${this.uid}/${key}`).update(todo));
    }

    removeTodo(key: string) {
        return from(this.database.list(`${this.dbPath}/${this.uid}`).remove(key));
    }
}
