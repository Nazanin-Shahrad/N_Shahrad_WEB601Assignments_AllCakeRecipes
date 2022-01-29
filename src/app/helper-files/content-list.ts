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

    getContectCard(index: number) : string {

        if (this.lengthContent() <= index){
            return "<p> error: index is out of range </p>";

        }


        return `
        <div class="card">
        <h4>${this._items[index].title}</h4>
        <img src="${this._items[index].imgURL}" alt="cake" style="width:200px ; heigth: 150px">
        <p>${this._items[index].description}</p>
        <h5>${this._items[index].creator}</h5>
        <p>${this._items[index].type}</p>
        <hr>
        </div>

        `;



    }


}
