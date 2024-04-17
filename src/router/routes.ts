export enum Routes {
    default = '/',
    home = '/',
    contact = '/contact',
    about = '/about',
    partners = '/partners',
    products = '/products',
    productDetailed = '/product-detailed',
}

export enum Pages {
    home = 'Ana Səhifə',
    contact = 'Əlaqə',
    about = 'Haqqımızda',
    partners = 'Partnyorlar',
    products = 'Məhsullar',
}

export const goTo = (route: string, param: string | number) => {
    return route + '/' + param;
};

export const goToWithQuery = (route: string, param: { [key: string]: string | number }) => {
    let path = route + '?';
    if (param) {
        for (const key in param) {
            if (path.substr(path.length - 1) !== '?')
                path += '&';
            path += key + '=' + param[`${key}`];
        }
    }
    return path;
};
