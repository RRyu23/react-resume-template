import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Melody Personal Resume',
  description: "Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Lyuxuan Wang`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Lyuxuan Wang <strong className="text-stone-100"> Digital Social Media</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, CA', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'China', Icon: FlagIcon},
    {label: 'Skills', text: 'Final Cut Pro, Adobe PR, PS, AE, Office Suite', Icon: SparklesIcon},
    {label: 'School', text: 'University of Southern California', Icon: AcademicCapIcon},
    {label: 'Major', text: 'Digital Social Media', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Videos Production',
    skills: [
      {
        name: 'Adobe Premiere Pro',
        level: 10,
      },
      {
        name: 'CapCut',
        level: 10,
      },
      {
        name: 'Final Cut Pro',
        level: 8,
      },
    ],
  },
  {
    name: 'Social Media Operations',
    skills: [
      {
        name: 'Creative Content Creation',
        level: 9,
      },
      {
        name: 'Videos Production',
        level: 10,
      },
      {
        name: 'Multi-media Marketing',
        level: 8,
      },
    ],
  },
  {
    name: 'Game Design',
    skills: [
      {
        name: 'Game World Building',
        level: 8,
      },
      {
        name: 'Iterative Design Process',
        level: 8,
      },
      {
        name: 'Play-testing Analysis',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'All I Want To Say Is I LOVE YOU !!! | Interview Program',
    description: 'How long have you not told your parents, lovers and friends that I love you?\n' +
        'In this short video, we invited several volunteers on campus to do the challenge, calling the people they love and saying I love you to them directly.',
    url: 'https://www.youtube.com/watch?v=-BvFiQswOlY',
    image: porfolioImage1,
  },
  {
    title: 'Hello, Goodbye| Microfilm',
    description: 'A short film about friendship. After a quarrel with Victoria, Elva died by accidents. Before she went to the heaven, she wanted to see her best friend Victoria again......',
    url: 'https://www.youtube.com/watch?v=M3C6AIq2zN4',
    image: porfolioImage2,
  },
  {
    title: 'The Ultimate Chinese Food Challenge: International Students Try Mystery Dishes',
    description: 'In this short film, we invited international students from various countries to taste some local refreshment specialities in China. Let\'s see if they can accept this unique taste! ',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2022 - May 2024',
    location: 'University of Southern California',
    title: 'M.S. in Digital Social Media',
    content: (
        <div>GPA:4.0/4.0
          <p>Courses: ABC, CBA, ABC</p>
        </div>),
  },
  {
    date: 'Sept 2017 - Jun 2021',
    location: 'Beijing International Studies University',
    title: 'B.A. in Journalism & B.A. in English',
    content: (
        <div>GPA:3.6/4.0
          <p>Courses: ABC, CBA, ABC</p>
        </div>),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mar 2020 - Present',
    location: 'Remote',
    title: 'Social Media Influencer',
    content: (
      <p>
        Operate two channels at Little Red Book with over 4000 followers, one channel is a food blogger, and the other is a life vlogger.
      </p>
    ),
  },
  {
    date: 'Mar 2022 - Jul 2022',
    location: 'ByteDance',
    title: 'Intern in TikTok accounts operation',
    content: (
        <div>
          <p>
            &#x2022; Independently managed 7 short video channels on TikTok and YouTube to promote the growth of users and boost engagement with product. The channel in charge of operation has a maximum of 1.1M followers on TikTok
          </p>
          <p>
            &#x2022; Developed and maintained client relationships for strategic partnerships in the US, Indonesia, Philippines, Brazil, resulting in user
            expansion and collaboration with influencers hosting more than 3M followers on TikTok.
          </p>
          <p>
            &#x2022; Contributed to team brainstorming and campaign analysis to drive market-oriented commercials and cross-functional collaboration.
          </p>
        </div>

    ),
  },
  {
    date: 'Jul 2021 - Jan 2022',
    location: 'CRRC Corporation Limited (China Railway Rolling Stock Corporation',
    title: 'Member of Corporate Culture Department',
    content: (
        <div>
          <p>
            &#x2022; Planned and organized a series of activities for CRRC's 140th anniversary, resulting in successful sponsorship agreements.
          </p>
          <p>
            &#x2022; Compiled and managed the official social media platforms, resulting in daily views of more than 10K times through targeted and popular hashtags on the company's official microblog platform.
          </p>
          <p>
            &#x2022; Created over 300 publicity contents tailored to the characteristics of different social media platforms, resulting in increased engagement and followers.
          </p>
        </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
