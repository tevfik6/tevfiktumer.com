const experiences = [
    {
        name: "SugarCRM Deutschland GmbH",
        date: "2017 - Present",
        title: "Senior Developer Support Engineer",
        description: '',
        links: [
            'http://www.sugarcrm.com/de'
        ]
    },
    {
        name: "SugarCRM Deutschland GmbH",
        date: "2013 - 2017",
        title: "Developer Support Engineer",
        description: '',
        links: [
            'http://www.sugarcrm.com/de'
        ]
    },
    {
        name: "Yurtdışı Tecrübesi",
        date: "2012 - 2013",
        title: "Freelancer",
        description: 'This is an online project for people who want to share their experiences traveling abroad for different purposes (work, tourism, education, etc.) <br> In this project I worked with FuelPHP Framework, PHP, MySQL, HTML5, CSS3, JavaScript, jQuery, Adobe Photoshop.',
        links: [
            'http://www.yurtdisitecrubesi.com'
        ]
    },
    {
        name: "Kula Makina",
        date: "2011 - 2012",
        title: "Freelancer",
        description: 'This is a webside of a company that is selling CNC Machines in Ankara and Istanbul. <br> In this project I worked with Codeigniter Framework, PHP, MySQL, HTML5, CSS3, JavaScript, jQuery, Adobe Photoshop.',
        links: [
            'http://www.kula.com.tr'
        ]
    },
    {
        name: "Derya Tokmakçıoğlu",
        date: "2010",
        title: "Freelancer",
        description: 'We have re-designed and re-programmed of a our previous projects (2008).<br> In this project I worked with PHP, MySQL, HTML, CSS, JavaScript, jQuery, Adobe Photoshop.',
        links: [
            'http://www.dttasarim.com',
            'http://www.deryatokmakcioglu.com'
        ]
    },
    {
        name: "Karnesitesi.com",
        date: "2009 - 2010",
        title: "Freelancer",
        description: 'We have developed this project for dersverilir.net. The main purpose of this website is to evaluate students\' school reports and give advice on what tutoring courses you should take. <br> In this project I worked with PHP, MySQL, HTML, CSS, JavaScript, Photoshop.',
        links: [
            'http://www.karnesitesi.com'
        ]
    },
    {
        name: "Dersverilir.net",
        date: "2009",
        title: "Freelancer",
        description: 'This is the most popular portal in Turkey that helps students and private teacher find each other.<br> In this project I worked with PHP, MySQL, HTML, CSS, JavaScript, Photoshop.',
        links: [
            'http://www.dersverilir.net'
        ]
    },
    {
        name: "Bia Ajans",
        date: "2008",
        title: "Freelancer",
        description: 'Bia Ajans is one of the biggest agencies in Izmir.<br> In this project I worked with PHP, MySQL, HTML, CSS, JavaScript, jQuery.',
        links: [
            'http://www.bia.com.tr'
        ]
    },
    {
        name: "Derya Tokmakçıoğlu",
        date: "2007 - 2008",
        title: "Freelancer",
        description: 'This is a website for a successful architect, who has designed many hospital and office buildings in Izmir.<br> In this project I worked with PHP, MySQL, HTML, CSS, JavaScript, jQuery, Photoshop.',
        links: [
            'http://www.dttasarim.com',
            'http://www.deryatokmakcioglu.com'
        ]
    },
    {
        name: "Turkish Basketball League",
        date: "2006 - 2007",
        title: "Agency: Win Media",
        description: 'With the Win Media Agency I have worked on programming the official page of Turkish Basketball League.<br> In this project I worked with PHP, MySQL, HTML, XML, JavaScript.',
        links: [
            'http://www.tbl.gov.tr'
        ]
    },
    {
        name: "Bobofone - Lokofun",
        date: "2005 - 2006",
        title: "Agency: Win Media",
        description: 'It was a mobile ring-tone store supported by Turkcell on the biggest mobile providers in Turkey.<br> In this project I worked with PHP, MySQL, HTML, JavaScript. ',
    },
    {
        name: "Eurobasket Women 2005",
        date: "2005",
        title: "Agency: Win Media",
        description: 'A website for Turkish Women Basketball League.<br> In this project I worked with PHP, MySQL, HTML, JavaScript. ',
    },
    {
        name: "Win Media, Creative and Hostin",
        date: "2005",
        title: "Agency",
        description: 'After I finished my Associate Degree, I started to work for Win Media agency. There I have worked on both big and small-budget projects. ',
    },
];

const success = "success";
const info = "info";
const warning = "warning";

const skills = {
    "Web Programming": [
        { name: "PHP", class: success, progress: "100" },
        { name: "HTML4/5", class: success, progress: "100" },
        { name: "JavaScript", class: success, progress: "95" },
        { name: "CSS2/3", class: success, progress: "95" },
        { name: "SQL/MySQL", class: success, progress: "95" },
        { name: "NodeJS", class: success, progress: "80" },
    ],
    "Programming": [
        { name: "C", class: success, progress: "95" },
        { name: "Regular Expressions (RegExp)", class: success, progress: "85" },
        { name: "Go", class: success, progress: "75" },
        { name: "Python", class: success, progress: "75" },
        { name: "Objective-C", class: info, progress: "25" },
        { name: "C++", class: info, progress: "40" },
        { name: "Java", class: info, progress: "20" },
        { name: "Perl", class: warning, progress: "15" }
    ],
    "Frameworks": [
        { name: "VueJS 2/3 - JavaScript", class: success, progress: "95" },
        { name: "Tailwind - CSS", class: success, progress: "90" },
        { name: "Laravel - PHP", class: success, progress: "90" },
        { name: "FuelPHP - PHP", class: success, progress: "100" },
        { name: "Codeigniter - PHP", class: success, progress: "85" },
        { name: "jQuery - JavaScript", class: success, progress: "100" },
        { name: "Mootools - JavaScript", class: info, progress: "70" },
        { name: "Twitter Bootstrap - CSS", class: success, progress: "100" }
    ]
};

export { experiences, skills }