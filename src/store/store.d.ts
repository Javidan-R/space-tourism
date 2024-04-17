import { ILang } from '../assets/lang/lang';

export interface IState {
    loader: boolean;
    menu: boolean;
    languages: ILanguages[];
    locale: any;
    // setIsMenuOpen: (isOpen: boolean) => void; 
}


export interface ILanguages {
    id: number;
    key: ILang;
    value: string;
}
