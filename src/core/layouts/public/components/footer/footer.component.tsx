import React from 'react';
import { Link } from 'react-router-dom';
import useLocalization from 'assets/lang';
import { environment } from 'core/configs/app.config';
import MenuComponent from '../menu/menu.component';
import { useFooterStyles } from './footer.style';
import { Logo } from 'assets/images/icons/logo';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { SlPhone } from 'react-icons/sl';
import colors from 'assets/styles/abstracts/color';
const FooterComponent: React.FC = () => {
  const classes = useFooterStyles();
  const projectName: string = environment.applicationName;
  const date: number = new Date().getFullYear();
  const translate = useLocalization();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className='row'>
          <div className='col-md-7 col-sm-12 '>
            <Logo />
            <p className={classes.footerText}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <ul className={classes.socialLinks}>
              <SocialLink icon={<FaFacebook />} to='https://www.facebook.com' />
              <SocialLink icon={<FaTwitter />} to='https://twitter.com' />
              <SocialLink icon={<FaInstagram />} to='https://instagram.com' />
              <SocialLink icon={<FaLinkedin />} to='https://www.linkedin.com' />
              <SocialLink icon={<FaYoutube />} to='https://www.youtube.com' />
            </ul>
          </div>
          <div className='col-md-5 col-sm-12'>
            <div className='row '>
              <div className='col-md-6 col-sm-6 '>
                <h4 className='py-20'>Site</h4>
                <MenuComponent isFooter={true} />
              </div>
              <div className='col-md-6 col-sm-6'>
                <h4 className='py-20'>Contact us</h4>
                <ul className={classes.contactList}>
                  <ContactItem
                    icon={<IoMailOutline />}
                    text='contact@company.com'
                  />
                  <ContactItem icon={<SlPhone />} text='(414) 687 - 5892' />
                  <ContactItem
                    icon={<IoLocationOutline />}
                    text='Location of company'
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-6'>
            {translate('copyright')} © {date} {projectName}
          </div>
          <div className='col-md-6 col-sm-6  '>
           <Link to={''}>
           <p className={`${colors.black} d-flex`} style={{justifyContent:'flex-end'}}> {translate('organisation')}</p>
           </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; to: string }> = ({
  icon,
  to,
}) => {
  const classes = useFooterStyles();
  return (
    <li className={classes.social}>
      <Link to={to} target='_blank' rel='noopener noreferrer'>
        {icon}
      </Link>
    </li>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <li>
      <a
        href={
          text.startsWith('mailto:') || text.startsWith('tel:') ? text : '#'
        }
      >
        <i>{icon}</i>
        <span>{text}</span>
      </a>
    </li>
  );
};

export default FooterComponent;
