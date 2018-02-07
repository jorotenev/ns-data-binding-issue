/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import {ObservableArray} from "tns-core-modules/data/observable-array";



let model: ViewModel;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    model = new ViewModel();
    page.bindingContext = model;
    setTimeout(() => {
        model.addItem()
    }, 4000)
}


class ViewModel {
    public items: ObservableArray<number>

    constructor() {
        this.items = new ObservableArray<number>([])
    }

    public addItem() {
        this.items.push(Math.random())
    }
}