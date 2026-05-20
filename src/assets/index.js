// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import Linkedin from 'remixicon-react/LinkedinLineIcon'
import WhatsappLineIcon from 'remixicon-react/WhatsappLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
  { icon: InstagramLineIcon, href: 'https://www.instagram.com/ofernandeslucas?igsh=MmNtZ2dndW15MTQ%3D&utm_source=qr' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lucasfernandesloiola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { icon: YoutubeLineIcon, href: 'https://youtube.com/@lufloatoficial?si=IQjGzSs9Mga8-IcQ' },
  { icon: GithubLineIcon, href: 'https://github.com/lufloat' },
  { icon: WhatsappLineIcon, href: 'https://wa.me/5562981452568' }
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Repositórios GitHub',
    amount: 28,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Projetos Concluídos',
    amount: 47,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Clientes Satisfeitos',
    amount: 13,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Certificados',
    amount: 32,
    icon: <AwardFillIcon />,
  }
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText = "Sou desenvolvedor full-stack com forte interesse em design e experiência do usuário, unindo tecnologia e estética na criação de soluções digitais completas. Atuo no back-end com C#, .NET, Python e Django na construção de sistemas estruturados e escaláveis, e no front-end com React e Next.js, além de experiência com HTML, CSS e Tailwind para desenvolvimento de interfaces responsivas e organizadas. Trabalho com PostgreSQL para modelagem eficiente de dados e utilizo Figma para prototipação e criação de layouts intuitivos. Busco integrar performance, clareza visual, usabilidade e qualidade de código em cada projeto.";

export const experienceData = [
  {
    year: 2,
    title: 'Grupo Jaime Câmara ( 2021 - 2024)',
    education: 'Faculdade : Anhnaguera e cursos Alura e Udemy.',
    experience: [
      '- Criação de artes para o jornal O Popular, e rádios. Utilizando ferramentas como Photoshop e Illustrator.',
      '- Criação de peças para os sites O Popular.',
    ],
  },
  {
    year: 2,
    title: 'Faculdade Engenharia de Software (2024 - 2027)',
    education: 'Faculdade Anhanguera',
    experience: [
      '- Sistemas full stack',
      '- Estruturar soluções',
    ],
  },
  {
    year: 5,
    title: 'Certificações Alura e Udemy',
    education: 'Além da graduação em Engenharia de Software, realizo formação contínua por meio de cursos especializados na Alura e Udemy, com foco em desenvolvimento full stack, arquitetura de software e tecnologias modernas',
    experience: [
      '- Cursos extracurriculares',
      '- Capacitação contínua',
    ],
  },
  {
    year: 6,
    title: 'Programador C# - Grupo Odilon Santos (2025 - atual)',
    education: 'Responsável pelo desenvolvimento de um sistema CRM voltado para gestão de impressoras, incluindo criação de funcionalidades, estruturação do sistema e design de layouts para a interface.',
    experience: [
      '- Desenvolvimento de aplicação em C#',
      '- Construção de CRM para gerenciamento de impressoras',
    ],
  },
]

// Skills
export const skillsData = [
  { name: 'Figma', icon: '/skills/figma.png' },
  { name: 'Photoshop', icon: '/skills/photoshop.png' },
  { name: 'VS Code', icon: '/skills/vscode.png' },
  { name: 'HTML', icon: '/skills/html.png' },
  { name: 'CSS', icon: '/skills/css.png' },
  { name: 'JavaScript', icon: '/skills/js.png' },
  { name: 'TailwindCSS', icon: '/skills/tailwind.png' },
  { name: 'Vite', icon: '/skills/vite.png' },
  { name: 'ReactJS', icon: '/skills/react.png' },
  { name: 'TypeScript', icon: '/skills/ts.png' },
  { name: 'C#', icon: '/skills/C.png' },
  { name: '.NET', icon: '/skills/net.png' },
  { name: 'AI', icon: '/skills/ai.png' },
  { name: 'Pyhton ', icon: '/skills/python.png' },
  { name: 'NextJS', icon: '/skills/nextjs.png' },
  { name: 'NodeJS', icon: '/skills/nodejs.png' },
  { name: 'Github', icon: '/skills/github.png' },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Marrie, Dev Full-Stack',
    comment: "Lucas é um programador extremamente dedicado e detalhista. Sempre entrega soluções bem estruturadas, com código limpo e fácil de manter. ",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Indaya Martins',
    comment: "Tive uma ótima experiência trabalhando com o Lucas. Ele tem excelente raciocínio lógico, resolve problemas rapidamente e se comunica muito bem.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-3.png',
    name: 'Lu Almeida',
    comment: "Profissional comprometido e confiável. Lucas entende rapidamente as necessidades do projeto e propõe melhorias inteligentes.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-1.png',
    name: 'Laryssa Soares',
    comment: "Lucas é aquele tipo de programador que traz tranquilidade para o projeto. Organizado, ágil e sempre atento aos detalhes.",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-5.png',
    name: 'Leandro, Diretor Jaime Câmera',
    comment: "Lucas se destaca pela organização e clareza no desenvolvimento. Seu trabalho transmite segurança, qualidade e profissionalismo",
    stars: [1, 1, 1, 1, 1],
  },
]

// Projects
export const projectsData = [
  {
    name: 'EstimServ – Sistema de Orçamentos Inteligente',
    desc: 'Sistema inteligente para geração de orçamentos em PDF, integrado com agenda e dashboard de gestão comercial. Fluxo completo para acompanhamento de orçamentos, aprovações e status em tempo real. Desenvolvido em React + C#/.NET + Supabase.',
    url: 'projects/FotoSistema.png',
    video: true,
    tech: ['React', 'C#', '.NET', 'UX', 'CSS'],
  },
  {
    name: 'Design Layout Imprensão 3d',
    desc: '',
    url: '/projects/Vistoria.jpeg',
    tech: ['Figma', 'Photoshop', 'UX', 'Python', 'Django', 'CSS'],
  },
  {
    name: 'D',
    desc: '',
    url: '/projects/bot.jpeg',
    tech: ['Figma', 'Photoshop', 'UX'],
  },
  {
    name: '1',
    desc: '.',
    url: '/projects/crm.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'C#', '.NET'],
  },
  {
    name: '4',
    desc: '',
    url: '/projects/5.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '5',
    desc: '.',
    url: '/projects/6.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '6',
    desc: '.',
    url: '/projects/8.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '7',
    desc: '',
    url: '/projects/9.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '8',
    desc: ' ',
    url: '/projects/10.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '9',
    desc: '.',
    url: '/projects/12.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '10',
    desc: '',
    url: '/projects/1.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '10',
    desc: '',
    url: '/projects/13.jpg',
    tech: ['Design & Figma'],
  },
  {
    name: '10',
    desc: '',
    url: '/projects/15.jpg',
    tech: ['Design & Figma'],
  },
]

export const projectsButton = [
  'All',
  'Design & Figma',
  'Next',
  'React',
  'CSS',
  'JavaScript',
  'Typescript',
  'TailwindCSS',
  'NextJS',
  'C#',
  '.NET',
  'Python',
  'Django',
  'UX',
]

// Pricing Plans
export const pricingPlans = [
  {
    title: '💼 CLT',
    pricing: 'Ideal para empresas que buscam um profissional dedicado, com foco em longo prazo e integração total ao time.',
    features: [
      'Disponibilidade integral',
      'Compromisso contínuo com o projeto',
      'Evolução e manutenção constante',
      'Estabilidade e previsibilidade',
      'Participação ativa nas decisões técnicas',
      'Foco em projetos de longo prazo',
    ],
    recommended: 'Ideal para: Times internos / projetos de longa duração',
  },
  {
    title: '🚀 PJ (Pessoa Jurídica)',
    pricing: 'Modelo estratégico para empresas que precisam de flexibilidade e autonomia.',
    features: [
      'Contrato flexível por período ou demanda',
      'Alta autonomia técnica',
      'Entregas orientadas a resultado',
      'Escalabilidade conforme necessidade',
      'Agilidade na contratação',
      'Possibilidade de atuação híbrida ou remota',
      'Otimização de custos operacionais',
    ],
    recommended: 'Ideal para: Startups / squads / projetos específicos',
  },
  {
    title: '🧑‍💻 Freelancer',
    pricing: 'Perfeito para demandas pontuais e desenvolvimento sob medida',
    features: [
      'Projetos com escopo fechado',
      'Correções e melhorias rápidas',
      'Implementação de novas features',
      'Ajustes visuais e de layout',
      'Suporte técnico sob demanda',
      'Criação de layouts e artes visuais',
      'Ideal para startups e pequenos negócios',
      'Entregas por prazo fechado',
    ],
    recommended: 'Demandas rápidas / validações / melhorias',
  },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'
export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: '1️⃣ Quais tecnologias você trabalha?',
    answer: 'Trabalho principalmente com C#, .NET, desenvolvimento de sistemas, integrações, bancos de dados e criação de layouts modernos e funcionais.',
  },
  {
    question: '2️⃣ Você desenvolve sistemas sob medida?',
    answer: 'Sim. Analiso a necessidade do projeto e desenvolvo soluções personalizadas conforme o fluxo e os objetivos do cliente.',
  },
  {
    question: '3️⃣ Você faz apenas back-end ou front-end também?',
    answer: 'Atuo nas duas frentes. Posso desenvolver a lógica do sistema e também criar interfaces intuitivas e bem estruturadas.',
  },
  {
    question: '4️⃣ Você realiza manutenção em sistemas existentes?',
    answer: 'Sim. Posso corrigir erros, otimizar performance, implementar melhorias e adicionar novas funcionalidades.',
  },
  {
    question: '5️⃣ Como funciona o processo de desenvolvimento?',
    answer: 'Normalmente seguimos etapas: briefing → planejamento → desenvolvimento → validação → ajustes → entrega final.',
  },
  {
    question: '6️⃣ Você trabalha com prazos fechados?',
    answer: 'Sim. Após entender o escopo, defino um cronograma claro para garantir previsibilidade e organização.',
  },
  {
    question: 'Você faz integrações com APIs ou outros sistemas?',
    answer: 'Sim. Integro sistemas com APIs, bancos de dados, automações e ferramentas externas.',
  },
  {
    question: '8️⃣ Você assina contrato ou acordo de confidencialidade (NDA)?',
    answer: 'Sim. Posso formalizar contrato e NDA para garantir segurança e sigilo das informações.',
  },
  {
    question: '9️⃣ Você atua como CLT, PJ ou Freelancer?',
    answer: 'Tenho flexibilidade para atuar nos três modelos, dependendo da necessidade do projeto ou empresa',
  },
  {
    question: '🔟 Você ajuda na definição técnica do projeto?',
    answer: 'Sim. Posso auxiliar na arquitetura, escolha de tecnologias, estrutura do sistema e boas práticas.',
  },
  {
    question: '1️⃣1️⃣ Seu desenvolvimento é focado apenas em código ou também na experiência do usuário?',
    answer: 'Meu trabalho une desenvolvimento e experiência do usuário (UX). Além da lógica e performance, priorizo interfaces intuitivas, design consistente e usabilidade eficiente.',
  },
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'
export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  { id: 'home', name: 'Home', icon: <Home5LineIcon /> },
  { id: 'about', name: 'Sobre mim', icon: <UserLineIcon /> },
  { id: 'experience', name: 'Experiência', icon: <HistoryLineIcon /> },
  { id: 'skills', name: 'Skills', icon: <BriefcaseLineIcon /> },
  { id: 'reviews', name: 'Reviews', icon: <UserStarLineIcon /> },
  { id: 'projects', name: 'Projetos', icon: <ProjectorLineIcon /> },
  { id: 'pricing', name: 'Pricing', icon: <PriceTag3LineIcon /> },
  { id: 'contact', name: 'Contato', icon: <ContactsBook2LineIcon /> },
  { id: 'questions', name: 'Dúvidas', icon: <QuestionAnswerLineIcon /> },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
