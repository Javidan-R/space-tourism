import { AboutHeading } from 'core/shared/about-heading/about-heading.component';
import { useGetHomeVideo } from './actions/home.query';
import videophoto from '../../assets/images/statics/Rectangle 666.png';
import { useHomeStyles } from './home.style';
import { FaPlay } from 'react-icons/fa';
import colors from 'assets/styles/abstracts/color';
import { TbCurrencyManat } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Button from 'core/shared/button/button.component';
import TextGroup from 'core/shared/text-group/text-group.component';
const HomeComponent = () => {
  const classes = useHomeStyles();
  const { data: video } = useGetHomeVideo();

  if (!video) {
    return null;
  }
  // console.log(video);
  const desctiption = `Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue. Egestas et amet neque placerat aliquam tempor. Ultricies natoque lacus, id natoque cras. Erat aliquam sollicitudin risus semper molestie. Ut mattis nisl faucibus vel tincidunt.
  Et in laoreet faucibus urna quis. Tempus in condimentum malesuada ut molestie et in. Lobortis neque aliquam felis ac ac augue elit.`;
  return (
    <div>
      <AboutHeading
        heading={'We help you find the perfect loan'}
        desc={
          'Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi est, egestas. Nunc, dignissim amet, purus amet. Amet dictum sit elit urna non purus, gravida commodo.'
        }
        buttonFirst='Products'
        buttonSecond='About NiceArt'
      />
      <section className='px-40'>
        <div className={classes.videoContainer}>
          <div className={classes.videoOverlay}>
            <img
              src={videophoto}
              alt={video?.decription}
              className={classes.videoPlaceholder}
            />
            <FaPlay className={classes.playIcon} />{' '}
          </div>
          <video controls className={classes.videoPlayer}>
            <source src={video?.file.url} type={video?.file.type} />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <p className='py-20'>{desctiption}</p>
        </div>
      </section>

      {/*  */}
      <section>
        <div className='row px-40'>
          <div className='col-md-6 col-sm-12'>
            <div>
              <TextGroup miniTitle={'ABOUT US'}
              title={'Lectus mauris pulvinar sit.'}
              desc={` Malesuada tortor fringilla ut faucibus. Urna tellus lectus
              platea turpis non. Tellus odio eu ante tincidunt vivamus nunc
              nibh arcu, augue. Egestas et amet neque placerat aliquam tempor.
              Ultricies natoque lacus, id natoque cras. Erat aliquam
              sollicitudin risus semper molestie. Ut mattis nisl faucibus vel
              tincidunt.`}
              />
              <button>Learn more</button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div>
              <img src={videophoto} alt='about use image' />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className='row '>
          <div className='col-md-6 col-sm-12'>
            <TextGroup  miniTitle={'Products'} title={'Daşınmaz əmlak krediti'}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div>
              <p>
                Quisque bibendum adipiscing sem massa auctor nulla donec mi
                integer. Suspendisse eget convallis magna viverra amet. Ut quam
                scelerisque massa morbi ac pharetra. Sit at elit non et diam.
                Quam a id egestas elit. Posuere cursus accumsan urna viverra.
                Sit egestas et convallis donec risus sapien enim. Gravida
                praesent adipiscin
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className='row '>
          <div className='col-md-6 col-sm-12'>

        <TextGroup miniTitle={'Products'} title={'Daşınmaz əmlak krediti'}
        desc={`Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
        turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
        augue.`}
        />
          </div>
          <div className='col-md-6 col-sm-12'>
            <form action=''>
              <div className='row'>
                <div className='col-md-4'>
                  <label htmlFor=''>Kreditin məbləği</label>
                  <input type='text' name='' id='' />
                  <input type='range' name='' id='' />
                </div>
                <div className='col-md-4'>
                  <label htmlFor=''>Kreditin müddəti</label>
                  <input type='text' name='' id='' />
                  <input type='range' name='' id='' />
                </div>
                <div className='col-md-4'>
                  <label htmlFor=''>Faiz dərəcəsi</label>
                  <input type='text' name='' id='' />
                  <input type='range' name='' id='' />
                </div>
              </div>
              <div>
                <p>Aylıq ödəniş</p>
                <div className={colors.mainGreen}>
                  <h5>897.78</h5>
                  <TbCurrencyManat />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label htmlFor=''>FIN code</label>
                  <input type='text' name='' id='' placeholder='ABDCEFG' />
                </div>
                <div className='col-md-6'>
                  <label htmlFor=''>Əlaqə nömrəsi</label>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='+9994 00 000 00 00'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    <input type='checkbox' name='' id='' />
                    <div>
                      <Link to={''}>AKB RAZILIQ</Link> veriləsi üçün icazə
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <Button variant={'primary'} arrow='right'>
                    Müraciət et
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;