import {HeaderItem} from "./header-item";

export class RowItem {
  value: any;
  headerItem: HeaderItem;

  static getItem(value: any, headerItem: HeaderItem): RowItem {
    let rowItem = new RowItem();

    rowItem.value = value;
    rowItem.headerItem = headerItem;
    return rowItem;
  }
}
