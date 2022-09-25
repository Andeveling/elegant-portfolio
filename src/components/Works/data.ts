import { ProjectI } from '@/types'

export const Projects: ProjectI[] = [
  {
    id: 1,
    title: 'Pokemon app',
    subtitle: 'App full stack basada en Pokemon',
    description:
      'Diseño y desarrollo de una SPA fullstack basada en la serie Pokémon, la aplicación cuenta con listado de Pokémons, búsqueda, filtrado, ordenamiento.',
    imageUrl: 'https://assets.pokemon.com/assets//cms2/img/watch-pokemon-tv/_downloads/movie14_wallpaper1_1440.jpg',
    tech: ['ReactJs', 'Redux-Toolkit', 'Css', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL'],
    repository: '',
    deploy: '',
  },
  {
    id: 2,
    title: 'E-commerce-Sehos',
    subtitle: 'App para administrar un E-commerce',
    description:
      'Colaborador de una SPA full stack, basada en un e-commerce de zapatos, cuenta con: login/register, autenticación de usuarios, listado de productos, filtrados, ordenamientos, dashboard de administrador con funcionalidades de gestión de la tienda, panel de usuario para administrar tu cuenta y pasarela de pagos online.',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664077398/cld-sample-5.jpg',
    tech: ['ReactJs', 'Redux-Toolkit', 'Material/UI', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL'],
    repository: 'https://github.com/joelorzet/sehos-client',
    deploy: 'https://sehos.netlify.app/',
  },
  {
    id: 3,
    title: 'Lottery-Marzeel',
    subtitle: 'App para crear y gestionar sorteos',
    description:
      'Diseño y desarrollo de una SPA basada en sorteos, con panel de admin para gestionar sus sorteos y participantes',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664077383/samples/imagecon-group.jpg',
    tech: ['ReactJs', 'Redux-Toolkit', 'Material/UI', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL', 'Typescript'],
    repository: '',
    deploy: '',
  },
]
