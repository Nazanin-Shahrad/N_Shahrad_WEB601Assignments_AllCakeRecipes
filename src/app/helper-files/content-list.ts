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

        let item = this._items[index];

        return `
        <div class="card">
        <h4>${item.title}</h4>
        <img src="${item.imgURL}" alt="cake" style="width:200px ; heigth: 150px">
        <p>${item.description}</p>
        <h5>${item.creator}</h5>
        <p>${item.type}</p>
        <hr>
        </div>



        `;



    }


}
