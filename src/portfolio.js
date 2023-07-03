const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nazim06.github.io/cleanfolio/',
  title: 'NAZIM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nazim Uddin',
  role: 'Front End Developer',
  description:
    'Hello! I am Nazim, a front-end developer and a guy slighty obsessed for code quality. I enjoy working collaboratively but can also run with projects on my own. I am currently available for freelance work or any remote job. If you have a project that you want to get started or think you need my help with something, then get in touch.',
  resume: 'https://drive.google.com/file/d/1ZP045te8F_uKDkDcC85sDCEHgTyaqqZa/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/nazim-uddin6',
    github: 'https://github.com/NAZIM06',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Camp Knowledge',
    description:
      'A Language Learning Website.',
    stack: ['React', 'Node', 'Express.Js'],
    sourceCode: 'https://github.com/NAZIM06/camp-knowledge-client',
    livePreview: 'https://project-alpha-c5335.web.app/',
  },
  {
    name: 'Toytopia',
    description:
      'A Full Stack Sports Car Toy Store',
    stack: ['React', 'Tailwind', 'Firebase'],
    sourceCode: 'https://github.com/NAZIM06/toytopia',
    livePreview: 'https://toytopia-96a4c.web.app/',
  },
  {
    name: 'Chef’s Table',
    description:
      'Arabian Cuisine Website',
    stack: ['JavaScript', 'Tailwind', 'React'],
    sourceCode: 'https://github.com/NAZIM06/chefs-table',
    livePreview: 'https://chef-s-table-84d17.web.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Tailwind',
  'bootstrap',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Firebase',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nazimuddin2106@gmail.com',
}

export { header, about, projects, skills, contact }
