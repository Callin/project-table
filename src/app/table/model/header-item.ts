export class HeaderItem {
  id: string;
  screenName: string;
  isVisible: boolean;
  isSortable: boolean;
  isFilterable: boolean;

  static getItem(id: string, screenName: string, isVisible: boolean): HeaderItem {
    let menuItem = new HeaderItem();
    menuItem.id = id;
    menuItem.screenName = screenName;
    menuItem.isVisible = isVisible;

    return menuItem;
  }
}
