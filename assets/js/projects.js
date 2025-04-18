$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
         {
            image: 'assets/images/MHP.png',
            link: 'https://docs.aryaka.com/space/KNOW/136773659/Getting+Started+with+Aryaka+Unified+SASE+as+a+Service',
            title: 'SASE getting started guide',
            demo: false,
            technologies: ['Confluence'],
            description: "An end-user guide for getting started with Aryaka's security offering.",
            categories: ['sec', 'featured']
        },
        {
            image: 'assets/images/MHP.png',
            link: 'https://docs.aryaka.com/space/KNOW/31031569/Configure+a+Secure+Web+Gateway+policy+template',
            title: 'Configure a SWG policy template',
            demo: false,
            technologies: ['Confluence'],
            description: "An end-user guide for configuring a Secure Web Gateway policy template in MyAryaka.",
            categories: ['sec']
        },
        {
            image: 'assets/images/aryakadocs.png',
            link: 'https://docs.aryaka.com/space/TBW/8192076/ANAP+Insertion+Topology',
            title: 'ANAP Insertion Topology',
            demo: false,
            technologies: ['Confluence'],
            description: "A guide to install and deploy an Aryaka Network Access Point device.",
            categories: ['hardware','featured']
        },
        {
            image: 'assets/images/aryakadocs.png',
            link: 'https://docs.aryaka.com/space/TBW/37027887/NGFW-SWG',
            title: 'NGFW-SWG technical brief',
            demo: false,
            technologies: ['Confluence'],
            description: "A technical deep dive on Aryaka's Next Generation Firewall - Secure Web Gateway offering.",
            categories: ['sec']
        },
        {
            image: 'assets/images/microCAT.png',
            link: 'https://drive.google.com/file/d/16BFjiOCrwePjDJTjuMW3QOhPto2fkcy1/view?usp=sharing',
            title: 'Sea-Bird MicroCAT deployment guide',
            demo: false,
            technologies: [],
            description: "A guide for deploying a Seabird Scientific MicroCAT (an oceanographic instrument used to measure temperature and salinity).",
            categories: ['hardware']
        },
        {
            image: 'assets/images/B call.jpg',
            link: 'https://github.com/alrice12/Bm-Bcall-Detector/wiki',
            title: 'Blue whale call detector',
            demo: false,
            technologies: ['MATLAB', 'Markdown', 'GitHub'],
            description: "A guide for running custom MATLAB algorithms to automatically detect blue whale B calls in acoustic data.",
            categories: ['software']
        },
        {
            image: 'assets/images/20Hz.jpg',
            link: 'https://github.com/alrice12/Bp-20Hz-Detector/wiki',
            title: 'Fin whale energy detector',
            demo: false,
            technologies: ['MATLAB', 'Markdown', 'GitHub'],
            description: "A guide for running custom MATLAB algorithms to automatically detect fin whale acoustic energy in recordings.",
            categories: ['software']
        },
        {
            image: 'assets/images/Tethys.png',
            link: 'https://drive.google.com/file/d/1ZoZIuTDWSIbhS-449Xq7NZuiCqIX5G8I/view?usp=sharing',
            title: 'Tethys-MATLAB Interface Guide',
            demo: false,
            technologies: ['MATLAB'],
            description: "Documentation for interfacing with the Tethys database via MATLAB. Includes instructions for set-up, formulating a query, and a list of functions with descriptions.",
            categories: ['featured', 'software']
        },
        {
            image: 'assets/images/Deployments_Tab.JPG',
            link: 'https://drive.google.com/file/d/1HqJEKqysmq9QB6GFwD3wIoa5MXqCp0WZ/view?usp=sharing',
            title: 'Tethys Data Explorer',
            demo: false,
            technologies: ['MATLAB'],
            description: "End-user documentation of a web UI for interacting with data stored on a remote database.",
            categories: ['software']
        },
        {
            image: 'assets/images/Mooring.JPG',
            link: 'https://drive.google.com/file/d/1amxpWauSb1q3nVLW3jCDppqCevEQ4Zjt/view?usp=sharing',
            title: 'Oceanographic Mooring',
            demo: false,
            technologies: ['Adobe Illustrator'],
            description: "A diagram of an oceanographic acoustic instrument to inform engineers of layout during assembly.",
            categories: ['figures']
        },
        {
            image: 'assets/images/4-chan.JPG',
            link: 'https://drive.google.com/file/d/17T5Q7ehrjQHFXFoEJvpwGwg96Gjdi8Nm/view?usp=sharing',
            title: '4-channel Hydrophone Array',
            demo: false,
            technologies: ['Adobe Illustrator'],
            description: "A diagram of an oceanographic acoustic instrument depicting necessary measurements to complete before instrument deployment.",
            categories: ['featured', 'figures']
        },
        {
            image: 'assets/images/IRWIN.png',
            link: 'https://drive.google.com/file/d/1DF8XcbinD3WLelkBL2t7YtUYu6q6HnYJ/view?usp=sharing',
            title: 'Environmental Monitoring of Offshore Wind Farms',
            demo: false,
            technologies: [],
            description: "Executive summary of a response to an RFP to develop an environmental monitoring system that could be integrated into a floating offshore wind turbine.",
            categories: ['proposals']
        },
        {
            image: 'assets/images/OoRep2.JPG',
            link: 'https://www.cetus.ucsd.edu/docs/reports/MPLTM660-2022.pdf',
            title: 'Report for US Navy on killer whales in the Gulf of Alaska',
            demo: false,
            technologies: [],
            description: "A report summarizing an anlysis of killer whale acoustic detections in the Gulf of Alaska.",
            categories: ['publications']
        },
        {
            image: 'assets/images/SOCALRep2.JPG',
            link: 'https://www.cetus.ucsd.edu/docs/reports/MPLTM657-2022.pdf',
            title: 'Report for US Navy on marine mammals in Southern California',
            demo: false,
            technologies: [],
            description: "An annual report on acoustic and visual detections of marine mammals in Southern California.",
            categories: ['publications']
        },
        {
            image: 'assets/images/Bm-paper.JPG',
            link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0266469',
            title: 'Paper on decline in blue whale call frequency',
            demo: false,
            technologies: [],
            description: "A first-author publication about the mysterious phenomenon of frequency decline in blue whales.",
            categories: ['publications']
        },
        {
            image: 'assets/images/WA-paper.JPG',
            link: 'https://link.springer.com/article/10.1007/s00227-021-03941-9',
            title: 'Paper on marine mammal distribution offshore of Washington',
            demo: false,
            technologies: [],
            description: "A first-author publication detailing marine mammal distribution offshore of Washington State from analysis of acoustic data.",
            categories: ['publications']
        },
        {
            image: 'assets/images/GOA-paper.JPG',
            link: 'https://link.springer.com/article/10.1007/s00227-021-03884-1',
            title: 'Paper on marine mammal distribution in the Gulf of Alaska',
            demo: false,
            technologies: [],
            description: "A first-author publication detailing marine mammal distribution in the Gulf of Alaska from analysis of acoustic data.",
            categories: ['publications']
        },
        {
            image: 'assets/images/KW-paper.JPG',
            link: 'https://www.int-res.com/abstracts/meps/v572/p255-268/',
            title: 'Paper on occurrence of killer whales offshore of Washington',
            demo: false,
            technologies: [],
            description: "A first-author publication describing the spatial and temporal distribution of killer whales offshore of Washington State from analysis of acoustic data.",
            categories: ['publications']
        },
        {
            image: 'assets/images/figures.png',
            link: 'https://drive.google.com/file/d/1wsnIsyl1e9gOkaIDrE9A3c9f-XbHX9tz/view?usp=sharing',
            title: 'Selected Scientific Figures',
            demo: false,
            technologies: ['MATLAB', 'Adobe Illustrator'],
            description: "Four figures created for scientific publications.",
            categories: ['figures']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
