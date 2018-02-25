import {EventData} from 'data/observable';
import {Page} from 'ui/page';
import {ObservableArray} from "tns-core-modules/data/observable-array";

let model: ViewModel;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    model = new ViewModel();
    page.bindingContext = model;
}

export function tapped() {
    console.log("adding an item");
    model.addItem()
}

class ViewModel {
    public items: ObservableArray<number>;

    constructor() {
        this.items = new ObservableArray<number>([])
    }

    public addItem() {
        this.items.push(Math.random())
    }
}