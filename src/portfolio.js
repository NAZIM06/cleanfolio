const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'NAZIM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nazim Uddin',
  role: 'Front End Developer',
  description:
    'Hello! I am Nazim, a front-end developer and a guy slighty obsessed for code quality. I enjoy working collaboratively but can also run with projects on my own. I am currently available for freelance work or any remote job. If you have a project that you want to get started or think you need my help with something, then get in touch.',
  resume: 'https://drive.google.com/file/d/1ZP045te8F_uKDkDcC85sDCEHgTyaqqZa/view?usp=drive_link',
  social: {
    linkedin: 'https://linkedin.com/in/nazim-uddin6',
    github: 'https://github.com/NAZIM06',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nazimuddin2106@gmail.com',
}

export { header, about, projects, skills, contact }
