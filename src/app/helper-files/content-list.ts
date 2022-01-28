import {Content} from './content-interface'

export class ContentList {

    private _items : Content[];



    constructor (){
        this._items = [];

    }

    get items() : Content[]{
        return this._items;
    }

    addContent(item : Content){
        this._items.push(item);

    }

    lengthContent() : number {
        return this._items.length;
    }

}