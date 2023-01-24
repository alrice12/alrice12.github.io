$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/B call.jpg',
            link: 'https://github.com/alrice12/Bm-Bcall-Detector/wiki',
            title: 'Blue whale call detector',
            demo: false,
            technologies: ['MATLAB', 'Markdown'],
            description: "A guide for running custom MATLAB algorithms to automatically detect blue whale B calls in acoustic data.",
            categories: ['featured', 'how-to']
        },
        {
            image: 'assets/images/20Hz.jpg',
            link: 'hhttps://github.com/alrice12/Bp-20Hz-Detector/wiki',
            title: 'Fin whale call detector',
            demo: false,
            technologies: ['MATLAB', 'Markdown'],
            description: "A guide for running custom MATLAB algorithms to automatically detect fin whale 20 Hz calls in acoustic data.",
            categories: ['featured', 'how-to']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/abhn/Marvel',
            title: 'Getting Started with Tethys',
            demo: false,
            technologies: ['MATLAB'],
            description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
            categories: ['how-to']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/abhn/mpw',
            title: 'Making Tethys Queries',
            demo: false,
            technologies: ['MATLAB'],
            description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
            categories: ['featured', 'how-to']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Oceanographic Mooring',
            demo: false,
            technologies: ['Adobe Illustrator'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['figures']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/abhn/data-destroyer-gui',
            title: '4-channel Hydrophone Array',
            demo: false,
            technologies: ['Adobe Illustrator'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['featured', 'figures']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://github.com/abhn/RPi-Status-Monitor',
            title: 'Proposal',
            demo: false,
            technologies: ['python', 'flask'],
            description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
            categories: ['proposals']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://github.com/abhn/S3Scan',
            title: 'Report 1',
            demo: false,
            technologies: ['python'],
            description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
            categories: ['featured', 'publications']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://github.com/abhn/Elementary',
            title: 'Report 2',
            demo: false,
            technologies: ['Jekyll', 'CSS3'],
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['publications']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://github.com/abhn/Soot-Spirits',
            title: 'Paper 1',
            demo: false,
            technologies: ['Jekyll', 'CSS3'],
            description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
            categories: ['publications']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
            title: 'Paper 2',
            demo: false,
            technologies: ['Python', 'Sockets'],
            description: "Simple terminal group chat based on native sockets using Python.",
            categories: ['publications']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
            title: 'Paper 3',
            demo: false,
            technologies: ['DIY'],
            description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
            categories: ['publications']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'Paper 4',
            demo: false,
            technologies: ['NextCloud', 'GnuPG'],
            description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
            categories: ['publications']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
            title: 'Figure 1',
            demo: false,
            technologies: ['MATLAB', 'Adobe Illustrator'],
            description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
            categories: ['figures']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
            title: 'Figure 2',
            demo: false,
            technologies: ['MATLAB', 'Adobe Illustrator'],
            description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
            categories: ['figures']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://github.com/abhn/koalamate',
            title: 'Figure 3',
            demo: false,
            technologies: ['MATLAB', 'Adobe Illustrator'],
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
            categories: ['figures']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://github.com/abhn/koalamate',
            title: 'Figure 4',
            demo: false,
            technologies: ['MATLAB', 'Adobe Illustrator'],
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
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
