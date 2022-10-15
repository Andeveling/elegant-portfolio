import { ProjectI } from '@/types'

export const Projects: ProjectI[] = [
  {
    id: '0',
    title: 'Rick and Morty App',
    subtitle: 'Proyecto frontend',
    description: 'Diseño y desarrollo de una SPA basada en la serie Rick and Morty.',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665871790/book/Screenshot_5_mnhm47.jpg',
    imagesUrl: [
      {
        id: '1',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665871790/book/Screenshot_5_mnhm47.jpg',
      },
      {
        id: '2',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665871795/book/Screenshot_4_xa0qdm.jpg',
      },
      {
        id: '3',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665871784/book/Screenshot_3_firff3.jpg',
      },
      {
        id: '4',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665871703/book/Screenshot_2_sg0io1.jpg',
      },
    ],
    tech: ['ReactJs', 'Typescript', 'Redux-Toolkit', 'NextUI'],
    repository: 'https://github.com/Andeveling/myrickandmortyapp',
    deploy: 'https://myrickandmortyandeveling.netlify.app/',
    role: 'Diseño y desarrollo',
    contribution: '',
  },
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
        title: 'Detalles de cada Pokemon mediante params',
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
      'Entre mis contribuciones mas importantes estan: configuración boiler plate del cliente, Eslint, Prettier, view del panel de usuario y funcionalidad, implementación front/back sistema de Reviews',
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
  {
    id: '4',
    title: 'Books CRUD',
    subtitle: 'Un crud basado en Node Js y Express Js',
    description:
      'Un crud basico usando Node y Express, con persistencia de datos en un archivo .JSON usando fs de node. y usando como  motor de plantillas EJS',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665245797/book/Screenshot_1_sd8pmx.jpg',
    imagesUrl: [
      {
        id: '1',
        title: 'Visualiza los libros',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665245797/book/Screenshot_1_sd8pmx.jpg',
      },
      {
        id: '2',
        title: 'Crea libros',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665245797/book/Screenshot_7_kdonmp.jpg',
      },
    ],
    tech: ['Html', 'CSS', 'Node Js', 'Express Js', 'Bootstrap', 'Ejs'],
    repository: 'https://github.com/Andeveling/books',
    deploy: '',
    role: 'Desarrollo de un crud basado en Node Js y Express, usando como motor de plantillas EJS',
    contribution: 'Crear un backend, usando un motor de plantillas como EJS para la interfaz.',
  },
  {
    id: '5',
    title: 'Todo App',
    subtitle: 'Una app donde podemos agregar Tareas a realizar, tacharlas y borrarlas',
    description: 'Diseño y desarrollo de una simple app para gestión de tareas',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665247621/todoapp/Screenshot_1_aa9ze0.jpg',
    imagesUrl: [
      {
        id: '1',
        title: 'Lista de Tareas',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665247621/todoapp/Screenshot_1_aa9ze0.jpg',
      },
      {
        id: '2',
        title: 'Crea Tareas',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665247621/todoapp/Screenshot_3_h420fu.jpg',
      },
      {
        id: '3',
        title: 'Filtra tareas por match en cadenas de texto',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665247621/todoapp/Screenshot_2_f3cuwe.jpg',
      },
    ],
    tech: ['Html', 'CSS', 'ReactJs'],
    repository: 'https://github.com/Andeveling/todo-list',
    deploy: '',
    role: 'Diseño y desarrollo',
    contribution: 'En este proyecto aprendí el uso de React-Context y React-Portal, sus distintos usos y utilidades.',
  },
  {
    id: '6',
    title: 'Portfolio',
    subtitle: 'Portafolio hecho con html y css',
    description: 'Diseño y desarrollo de una simple página',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665189624/Photo/Screenshot_1_o8pm5w.jpg',
    imagesUrl: [
      {
        id: '1',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665189624/Photo/Screenshot_1_o8pm5w.jpg',
      },
    ],
    tech: ['Html', 'CSS'],
    repository: 'https://github.com/Andeveling/Andeveling.github.io',
    deploy: 'https://andeveling.github.io/',
    role: 'Maquetación html y css',
    contribution: 'En este pequeño proyecto aprendi conceptos como responsive design y el uso de CSS Grid',
  },
  {
    id: '7',
    title: 'Bata-bit',
    subtitle: 'Proyecto de maquetación html',
    description: 'Tomando un diseño de una pagina en la web, hice la maquetación usando html y css',
    imageUrl: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665190068/Photo/Screenshot_5_hsg5ek.jpg',
    imagesUrl: [
      {
        id: '1',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665190068/Photo/Screenshot_3_movpwe.jpg ',
      },
      {
        id: '2',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665190068/Photo/Screenshot_4_civiol.jpg',
      },
      {
        id: '3',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665190068/Photo/Screenshot_5_hsg5ek.jpg',
      },
      {
        id: '4',
        title: '',
        url: 'https://res.cloudinary.com/dg84upfsp/image/upload/v1665190156/Photo/Screenshot_6_kts5qz.jpg',
      },
    ],
    tech: ['Html', 'CSS'],
    repository: 'https://github.com/Andeveling/Bata-Bit',
    deploy: '',
    role: 'Maquetación html, css',
    contribution: '',
  },
]
