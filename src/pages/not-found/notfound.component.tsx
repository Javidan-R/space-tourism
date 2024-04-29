import notFound from 'assets/images/statics/notfound.svg';
import {Link} from 'react-router-dom';
import {Routes} from 'router/routes';
import {useNotFoundStyles} from './notfound.style';

const NotfoundComponent = () => {
    const {page, panel, title, subtitle, invalidField, button, buttonField} = useNotFoundStyles();

    return (
        <>
            <div
                className={page}
                style={{
                    backgroundImage: `url("${notFound}")`,
                }}
            >
                <div className={panel}>
                    <div className={invalidField}>
                        <h1 className={title}>404</h1>
                        <p className={subtitle}>Ooops!</p>
                        <p className='error-content__error-text'>
                            The page you requested was not found!
                        </p>
                        <div  className={buttonField}>
                        <Link to={Routes.default} className={`${button}`}>
                            Go Back
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotfoundComponent;
// import { AboutHeading } from "core/shared/about-heading/about-heading.component";
// import CompanyCard from "core/shared/company-card/company-card.companent";
// import { useGetPartners } from "./actions/partners.query";
// import { useGetLeads } from "core/common/actions/leads.query";
// import useLocalization from "assets/lang";

// const PartnersComponent = () => {
//   const { data: partnersData } = useGetPartners();
//   const { data: leadsData } = useGetLeads();
//   const translate = useLocalization();
//   const filteredLead = leadsData?.find((lead) => lead.tag === "Our goal");
//   return (
//     <div>
//       <AboutHeading
//         heading={filteredLead?.heading || translate("partnersHeading")}
//         title={filteredLead?.title || translate("partnersTitle")}
//         description={filteredLead?.description || translate("partnersDescription")}
//         buttonFirst={translate("becamePartner")}
//       />
//       <div className="row py-50">
//         {partnersData && partnersData.map((company, index) => (
//             <div className="col-md-3 col-lg-3 col-sm-6" key={index}>
//               <CompanyCard company={company} />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersComponent;
