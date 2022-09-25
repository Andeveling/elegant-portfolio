import { ProjectI } from '@/types'

export const Projects: ProjectI[] = [
  {
    id: '1',
    title: 'Pokemon app',
    subtitle: 'App full stack basada en Pokemon',
    description:
      'Diseño y desarrollo de una SPA fullstack basada en la serie Pokémon, la aplicación cuenta con listado de Pokémons, búsqueda, filtrado, ordenamiento.',
    imageUrl: 'https://assets.pokemon.com/assets//cms2/img/watch-pokemon-tv/_downloads/movie14_wallpaper1_1440.jpg',
    imagesUrl: [
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143226/PORTFOLIO/1_mwbghk.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143226/PORTFOLIO/2_qt4zr5.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143226/PORTFOLIO/3_efnb5r.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143225/PORTFOLIO/4_ci08sn.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143225/PORTFOLIO/5_pdk6n5.jpg',
    ],
    tech: ['ReactJs', 'Redux-Toolkit', 'Css', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL'],
    repository: '',
    deploy: '',
    role: 'Diseño y desarrollo',
    contribution: '',
  },
  {
    id: '2',
    title: 'E-commerce-Sehos',
    subtitle: 'App para administrar un E-commerce',
    description:
      'Colaborador de una SPA full stack, basada en un e-commerce de zapatos, cuenta con: login/register, autenticación de usuarios, listado de productos, filtrados, ordenamientos, dashboard de administrador con funcionalidades de gestión de la tienda, panel de usuario para administrar tu cuenta y pasarela de pagos online.',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664077398/cld-sample-5.jpg',
    imagesUrl: [
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/0_vmrstv.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/1_lnhvrw.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/2_ooxuf7.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/3_qhwole.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/4_rra6yv.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143415/PORTFOLIO/5_t3pmuq.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/6_sxotgz.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/7_j5ecs0.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/8_kbjcbv.jpg',
      'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/9_i7umif.jpg',
    ],
    tech: ['ReactJs', 'Redux-Toolkit', 'Material/UI', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL'],
    repository: 'https://github.com/joelorzet/sehos-client',
    deploy: 'https://sehos.netlify.app/',
    role: 'Diseño y desarrollo',
    contribution: 'Configuración boiler plate del cliente, Eslint, Prettier, view de panel de usuario',
  },
  {
    id: '3',
    title: 'Lottery-Marzeel',
    subtitle: 'App para crear y gestionar sorteos',
    description:
      'Diseño y desarrollo de una SPA basada en sorteos, con panel de admin para gestionar sus sorteos y participantes',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664077383/samples/imagecon-group.jpg',
    imagesUrl: [''],
    tech: ['ReactJs', 'Redux-Toolkit', 'Material/UI', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL', 'Typescript'],
    repository: '',
    deploy: '',
    role: 'Diseño y desarrollo',
    contribution: '',
  },
]
