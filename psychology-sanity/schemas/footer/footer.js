const footer = {
    name: 'footer',
    title: 'Rodapé',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'social',
        title: 'Redes Sociais',
        type: 'array',
        of: [{type: 'socialMedia'}],
      },
    ],
  }
  
  export default footer
  