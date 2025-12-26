// categories

import Icon1 from '@/assets/images/categories/Icon1.jpg';
import Icon2 from '@/assets/images/categories/Icon2.jpg';
import Icon3 from '@/assets/images/categories/Icon3.svg';
import Icon4 from '@/assets/images/categories/Icon4.jpg';
import Icon5 from '@/assets/images/categories/Icon5.jpg';
import Icon6 from '@/assets/images/categories/Icon6.jpg';
import Icon7 from '@/assets/images/categories/Icon7.jpg';
import Icon8 from '@/assets/images/categories/Icon.jpg';

import brand1 from '@/assets/images/brands/brand1.png';
import brand2 from '@/assets/images/brands/brand2.png';
import brand3 from '@/assets/images/brands/brand3.png';
import brand4 from '@/assets/images/brands/brand4.png';
import brand5 from '@/assets/images/brands/brand5.png';

export const categories = [
  {
    id: 1,
    name: 'Design',
    jobs: 235,
    icon: Icon1,
  },
  {
    id: 2,
    name: 'Sales',
    jobs: 760,
    icon: Icon2,
  },
  {
    id: 3,
    name: 'Marketing',
    jobs: 400,
    icon: Icon3,
  },
  {
    id: 4,
    name: 'Finance',
    jobs: 150,
    icon: Icon4,
  },
  {
    id: 5,
    name: 'Technology',
    jobs: 320,
    icon: Icon5,
  },
  {
    id: 6,
    name: 'Engineering',
    jobs: 543,
    icon: Icon6,
  },
  {
    id: 7,
    name: 'Bussiness',
    jobs: 200,
    icon: Icon7,
  },
  {
    id: 8,
    name: 'Human Resources',
    jobs: 320,
    icon: Icon8,
  },
];

export const brands = [
  { name: 'Vodafone image', image: brand1 },
  { name: 'Intel image', image: brand2 },
  { name: 'Tesla image ', image: brand3 },
  { name: 'AMD image', image: brand4 },
  { name: 'Talkit image', image: brand5 },
];

// jobPosts
import JobPost1 from '@/assets/images/featured-jobs/meta.png';
import JobPost2 from '@/assets/images/featured-jobs/netflix.png';
import JobPost3 from '@/assets/images/featured-jobs/microsoft.png';
import JobPost4 from '@/assets/images/featured-jobs/reddit.png';
import JobPost5 from '@/assets/images/featured-jobs/google.png';
import JobPost6 from '@/assets/images/featured-jobs/spotify.png';

export const jobPosts = [
  {
    id: 1,
    title: 'Product Designer',
    application: 25,
    description:
      "Doing the right thing for investors is what we're all about at Vanguard, and that in..",
    company: 'MetaMask',
    role: ['Entry Role', 'Full-Time', 'Remote'],
    salary: 250,
    date: '12 days ago',
    logo: JobPost1,
  },
  {
    id: 2,
    title: 'Sr. UX Designer',
    application: 14,
    description:
      "Netflix is one of the world's leading streaming entertaining service with o..",
    company: 'Netflix',
    role: ['Expert', 'Full-Time', 'Remote'],
    salary: 14,
    date: '5 days ago',
    logo: JobPost2,
  },
  {
    id: 3,
    title: 'Product Engineer',
    application: 58,
    description:
      'Welcome to lightspeed LA, the first U.S based, AAA game development studio..',
    company: 'Microsoft',
    role: ['Intermediate', 'Full-Time'],
    salary: 210,
    date: '4 days ago',
    logo: JobPost3,
  },
  {
    id: 4,
    title: 'Product Designer',
    application: 13,
    description:
      'Prelin is how banks anboard their customers for bussiness checking accou..',
    company: 'Reddit',
    role: ['Expert', 'Part-Time'],
    salary: 120,
    date: '22 days ago',
    logo: JobPost4,
  },
  {
    id: 5,
    title: 'Backend Dev.',
    application: 21,
    description:
      'Coalifire is an a mission to make the world a safe place by solving our client..',
    company: 'Google',
    role: ['Intermediate', 'Full-Time'],
    salary: 260,
    date: '5 days ago',
    logo: JobPost5,
  },
  {
    id: 6,
    title: 'SMM Manager',
    application: 73,
    description:
      'Join us as we increase access to banking and financial services, helping banks an...',
    company: 'Spotify',
    role: ['Intermediate', 'Full-Time', 'Part Time'],
    salary: 170,
    date: '8 days ago',
    logo: JobPost6,
  },
];

// latest jobs

import companyImage1 from '@/assets/images/latest-jobs/company.jpg';
import companyImage2 from '@/assets/images/latest-jobs/company2.jpg';
import companyImage3 from '@/assets/images/latest-jobs/company3.jpg';
import companyImage4 from '@/assets/images/latest-jobs/company4.jpg';
import companyImage5 from '@/assets/images/latest-jobs/company5.jpg';
import companyImage6 from '@/assets/images/latest-jobs/company6.jpg';
import companyImage7 from '@/assets/images/latest-jobs/company7.jpg';
import companyImage8 from '@/assets/images/latest-jobs/company8.jpg';

export const latestJobLists = [
  {
    id: 1,
    title: 'Socila Media Assistant',
    logo: companyImage1,
    location: 'Paris, France',
    companyName: 'Nomad',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },
  {
    id: 2,
    title: 'Brand Designer',
    logo: companyImage2,
    location: 'San Fransisco, USA',
    companyName: 'Dropbox',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },

  {
    id: 3,
    title: 'Interactive Developer',
    logo: companyImage3,
    location: 'Hamburg, Germany',
    companyName: 'Terraform',
    JobType: 'Part-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },
  {
    id: 4,
    title: 'HR Manager ',
    logo: companyImage4,
    location: 'Lucern, Switzerland',
    companyName: 'Packer',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },
  {
    id: 5,
    title: 'Social Media Assistant',
    logo: companyImage5,
    location: 'Paris, France',
    companyName: 'Netlify',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },
  {
    id: 6,
    title: 'Brand Designer',
    logo: companyImage6,
    location: 'San Fransisco, USA',
    companyName: 'Maze',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },

  {
    id: 7,
    title: 'Interactive Developer',
    logo: companyImage7,
    location: 'Hamburg, Germany',
    companyName: 'Udacity',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },
  {
    id: 8,
    title: 'HR Manager ',
    logo: companyImage8,
    location: 'Lucern, Switzerland',
    companyName: 'Webflow',
    JobType: 'Full-Time',
    jobFields: [
      { name: 'Marketing', value: true },
      { name: 'Design', value: true },
    ],
  },
];

// footer

export const footerLinks = [
  {
    title: 'About',
    links: [
      { name: 'Campanies', url: '/companies' },
      { name: 'Pricing', url: '/pricing' },
      { name: 'Terms', url: '/terms' },
      { name: 'Advice', url: '#advice' },
      { name: 'Privacy Policy', url: '#privacy-policy' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help Docs', url: '/docs' },
      { name: 'Guide', url: '/guide' },
      { name: 'Updates', url: '/update' },
      { name: 'Contact Us', url: '/contact' },
    ],
  },
];
