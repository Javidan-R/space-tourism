export enum Routes {
    default = '/',
    home = '/',
    destination = '/destination',
    crew = '/crew',
    technology = '/technology',
}

export enum Pages {
    home = 'Ana Səhifə',
    destination = 'Təyinat',
    crew = 'Ekipaj',
    technology = 'Texnologiya',
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
