// import {environment} from 'core/configs/app.config';
import {useFooterStyles} from './footer.style';
import classNames from 'classnames';
// import useLocalization from 'assets/lang';
import { useMemo } from 'react';

const FooterComponent = () => {
    const classes = useFooterStyles();
    // const projectName = environment.applicationName;
    // const date = new Date().getFullYear();
    // const translate = useLocalization();

   const footerClasses = useMemo(() => (
    classNames({
        [classes.footer]:true,
        'py-100':true
    })
   ), [classes.footer]);

    return (
        <div className={classes.footerContainer}>
            <footer className={footerClasses}>
                 
            </footer>
        </div>
    );
};

export default FooterComponent;
