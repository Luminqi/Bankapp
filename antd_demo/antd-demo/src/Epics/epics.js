import React from 'react';
import { actions as dialogActions } from '../Dialog';
import { actionTypes as dialogActionTypes } from '../Dialog';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { switchMap, map } from 'rxjs/operators';

const handleResponse = (response) => {
    let repo = response.items[0];
    let content= (
        <React.Fragment>
        <p>{repo.description}</p>
        <a href={repo.html_url}>More detials</a>
        </React.Fragment>
    );
    return dialogActions.updatecontent(content);
};

const showContentEpic = action$ =>
    action$.pipe(
        ofType(dialogActionTypes.SHOWMODAL),
        switchMap(action =>
            ajax.getJSON(`https://api.github.com/search/repositories?q=${action.title}`).pipe(
                map(response => handleResponse(response))
            )
        )
    );

export default showContentEpic;
