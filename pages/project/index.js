import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg'
import ProjectSectionS3 from '../../components/ProjectsS3';
import ProjectSection from '../../components/Projects';
import ProductSamples from '../../components/ProductSamples';
import Navbar2 from '../../components/Navbar2/Navbar2';
import WhiteGold from '../../components/WhiteGoldProject';

const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}/> 
            <WhiteGold/>
            <ProjectSection/>
            <ProjectSectionS3 />
            <ProductSamples/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
