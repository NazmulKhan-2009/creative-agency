import React from 'react';
import { Link } from 'react-router-dom';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
const BusinessTag = () => {
  return (
    <div className="col-md-10 mx-auto mt-5 text-center">
      <Link class="navbar-brand p-4" to="#">
              <img src={slack} alt="" width="140" height="36" />
      </Link>
      <Link class="navbar-brand p-4"  to="#">
              <img src={google} alt="" width="140" height="36"/>
      </Link>
      <Link class="navbar-brand p-4 p" to="#">
              <img src={uber} alt="" width="140" height="36"/>
      </Link>
      <Link class="navbar-brand p-4"  to="#">
              <img src={netflix} alt="" width="140" height="36"/>
      </Link>
      <Link class="navbar-brand p-4"  to="#">
              <img src={airbnb} alt="" width="140" height="36"/>
      </Link>
    </div>
  );
};

export default BusinessTag;