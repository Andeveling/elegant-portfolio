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
      {
        id: '1',
        title: 'Listado de Pokemons desde api externa y db local',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143226/PORTFOLIO/1_mwbghk.jpg',
      },
      {
        id: '2',
        title: 'Filtrado de Pokemons',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143226/PORTFOLIO/2_qt4zr5.jpg',
      },
      {
        id: '3',
        title: 'Busqueda de Pokemons por nombre',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143226/PORTFOLIO/3_efnb5r.jpg',
      },
      {
        id: '4',
        title: 'Detalles de cada Pokemon mediante params',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143225/PORTFOLIO/4_ci08sn.jpg',
      },
      {
        id: '5',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143225/PORTFOLIO/5_pdk6n5.jpg',
      },
    ],
    tech: ['ReactJs', 'Redux-Toolkit', 'CSS', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL'],
    repository: 'https://github.com/Andeveling/PokemonAppBootCamp',
    deploy: '',
    role: 'Diseño y desarrollo',
    contribution: '',
  },
  {
    id: '2',
    title: 'Ecommerce Sehos',
    subtitle: 'App para administrar un E-commerce',
    description:
      'Colaborador de una SPA full stack, basada en un e-commerce de zapatos, cuenta con: login/register, autenticación de usuarios, listado de productos, filtrados, ordenamientos, dashboard de administrador con funcionalidades de gestión de la tienda, panel de usuario para administrar tu cuenta y pasarela de pagos online.',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664077398/cld-sample-5.jpg',
    imagesUrl: [
      {
        id: '1',
        title: 'Landing page de bienvenida',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/0_vmrstv.jpg',
      },
      {
        id: '2',
        title: 'Listado de productos',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/1_lnhvrw.jpg',
      },
      {
        id: '3',
        title: 'Historial de ordenes',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/2_ooxuf7.jpg',
      },
      {
        id: '4',
        title: 'Detalle de cada Orden',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/3_qhwole.jpg',
      },
      {
        id: '5',
        title: 'Administrador de direcciones de entrega',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/4_rra6yv.jpg',
      },
      {
        id: '6',
        title: 'Listado de productos favoritos',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143415/PORTFOLIO/5_t3pmuq.jpg',
      },
      {
        id: '7',
        title: 'Actualizar perfil de usuario',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/6_sxotgz.jpg',
      },
      {
        id: '8',
        title: 'Detalle de los productos',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/7_j5ecs0.jpg',
      },
      {
        id: '9',
        title: 'Sistema de Reviews',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664143414/PORTFOLIO/8_kbjcbv.jpg',
      },
    ],
    tech: ['ReactJs', 'Redux-Toolkit', 'Material/UI', 'ExpressJs', 'NodeJs', 'Sequelize', 'PostgreSQL', 'Typescript'],
    repository: 'https://github.com/joelorzet/sehos-client',
    deploy: 'https://sehos.netlify.app/',
    role: 'Diseño y desarrollo',
    contribution:
      'Entre mis contibuciones mas impostantes estan; configuración boiler plate del cliente, Eslint, Prettier, view del panel de usuario y funcionalidad, implementación front/back sistema de Reviews',
  },
  {
    id: '3',
    title: 'Weather App',
    subtitle: 'Crud básico con use de estados locales',
    description: 'Diseño y desarrollo de una simple app que consume una api, nos permite ver el clima',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664233159/PORTFOLIO/Screenshot_2_jxfaeu.jpg',
    imagesUrl: [
      {
        id: '1',
        title: 'Busqueda por ciudades',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664233159/PORTFOLIO/Screenshot_2_jxfaeu.jpg',
      },
      {
        id: '2',
        title: 'Detalles de la ciudad',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1664233321/PORTFOLIO/Screenshot_3_lqskqy.jpg',
      },
    ],
    tech: ['ReactJs', 'CSS'],
    repository: 'https://github.com/Andeveling/WeatherApp.git',
    deploy: '',
    role: 'Diseño y desarrollo',
    contribution: '',
  },
]
