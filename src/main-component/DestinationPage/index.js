import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'




const DestinationPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Destination'} pagesub={'Destination'}/> 
            
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DestinationPage;
