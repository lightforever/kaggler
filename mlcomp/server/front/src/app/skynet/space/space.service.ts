import {BaseService} from "../../base.service";
import {Injectable} from "@angular/core";
import {
    BaseResult,
    NamesResult,
    Space,
    SpaceRun,
    TagResult
} from "../../models";
import {AppSettings} from "../../app-settings";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class SpaceService extends BaseService {
    protected collection_part: string = 'spaces';
    protected single_part: string = 'space';

    add(data: Space) {
        let message = `${this.constructor.name}.add`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/add';
        return this.http.post<BaseResult>(url, data).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    copy(data: Space, old_space: string) {
        let message = `${this.constructor.name}.copy`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/copy';
        return this.http.post<BaseResult>(url, {
            'space': data,
            'old_space': old_space
        }).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }


    edit(data: Space) {
        let message = `${this.constructor.name}.edit`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/edit';
        return this.http.post<BaseResult>(url, data).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    remove(name: string) {
        let message = `${this.constructor.name}.remove`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/remove';
        return this.http.post<BaseResult>(url, {'name': name}).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    relation_append(parent: string, child: string) {
        let message = `${this.constructor.name}.relation_append`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/relation_append';
        return this.http.post<BaseResult>(url, {
            'parent': parent,
            'child': child
        }).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    relation_remove(parent: string, child: string) {
        let message = `${this.constructor.name}.relation_remove`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/relation_remove';
        return this.http.post<BaseResult>(url, {
            'parent': parent,
            'child': child
        }).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    run(data: SpaceRun) {
        let message = `${this.constructor.name}.run`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/run';
        return this.http.post<BaseResult>(url, data).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    tag_add(space: string, tag: string) {
        let message = `${this.constructor.name}.tag_add`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/tag_add';
        return this.http.post<BaseResult>(url, {
            'space': space,
            'tag': tag
        }).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    tag_remove(space: string, tag: string) {
        let message = `${this.constructor.name}.tag_remove`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/tag_remove';
        return this.http.post<BaseResult>(url, {
            'space': space,
            'tag': tag
        }).pipe(
            catchError(this.handleError<BaseResult>(message, new BaseResult()))
        );
    }

    tags(data) {
        let message = `${this.constructor.name}.tags`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/tags';
        return this.http.post<TagResult>(url, data).pipe(
            catchError(this.handleError<TagResult>(message, new TagResult()))
        );
    }

    names(data) {
        let message = `${this.constructor.name}.names`;
        let url = AppSettings.API_ENDPOINT + this.single_part + '/names';
        return this.http.post<NamesResult>(url, data).pipe(
            catchError(this.handleError<NamesResult>(message, new NamesResult()))
        );
    }

}