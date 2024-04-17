// import { Breadcrumb } from "../../core/shared/breadcrumb/breadcrumb.component";
import { AboutHeading } from '../../core/shared/about-heading/about-heading.component';
import { useAboutStyles } from './about.style';
// import { Pages, Routes } from "router/routes";
import TextGroup from 'core/shared/text-group/text-group.component';
import { FC } from 'react';
import videophoto from '../../assets/images/statics/Rectangle 666.png';

interface AboutGoalsCardProps {
  image?: string;
  title?: string;
  desc?: string;
}

const AboutComponent: FC = () => {
  const classes = useAboutStyles();
  return (
    <section>
      {/* <Breadcrumb route={Routes.about} page={Pages.about} /> */}
      <AboutHeading
        heading={'Title for about us or Lorem Ipsum motto'}
        title={'Lectus mauris pulvinar sit?'}
        desc={
          'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '
        }
        miniTitle={'Biz kimik?'}
      />
      <div>
        <img
          src='https://www.figma.com/file/uCfXSF7LKGeKUUSOGgxBei/image/dc5babe5db58a40b24bd3ed43324f319169e007e'
          alt=''
        />
        <div></div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
        <TextGroup
          miniTitle={'Məqsədimiz'}
          title={'Id duis id turpis mi quisque. Nulla.'}
          desc={'Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue. Egestas et amet neque placerat aliquam tempo'}
        />
        </div>
        <div className='col-md-6  col-sm-12 dflex justify-content-center items-center align-center'>
        <AboutGoalsCard image={videophoto} title='Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.'  desc='Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ' />
        </div>
      </div>
    </section>
  );
};

const AboutGoalsCard: FC<AboutGoalsCardProps> = ({ image, title, desc }) => {
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <div>
          <img width={50} height={50} src={image} alt={title} />
        </div>
        <div>
          <p className=''>{title}</p>
          <p className=''>{desc}</p>
        </div>
      </div>
    
    </div>
  );
};

export default AboutComponent;
