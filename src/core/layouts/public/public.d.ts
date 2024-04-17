export interface MenuItem {
    id?: number;
    name: string;
    link: string;
    icon?: JSX.Element;
    submenu?: MenuItem[];
}
