const hero = {
  name: 'hero',
  title: 'Seção Hero',
  type: 'document',
  fields: [
    {
        name: 'iconLogo', 
        title: 'Logo - Ícone', 
        description: 'Dimensão: 31px x 31px (Larg x Alt)', 
        type: 'image'
    },
    {
        name: 'nameLogo', 
        title: 'Logo - Nome', 
        description: 'Nome e Sobrenome', 
        type: 'string'
    },
    {
        name: 'imageDesktop', 
        title: 'Imagem - Desktop', 
        description: 'Proporção da dimensão: 3x4', 
        type: 'image'
    },
    {
        name: 'imageMobile', 
        title: 'Imagem - Mobile', 
        description: 'Proporção da dimensão: 7x4', 
        type: 'image'
    },
    {
        name: 'title', 
        title: 'Título', 
        type: 'string'
    },
    {
        name: 'titleBold', 
        title: 'Título - Negrito', 
        type: 'string'
    },
    {
        name: 'subtitle', 
        title: 'subtitle', 
        type: 'string'
    },
    {
        name: 'btnText', 
        title: 'Botão - Texto', 
        type: 'string'
    },
    {
        name: 'linkBtn', 
        title: 'Botão - Link', 
        type: 'string'
    },
  ]
}

export default hero
