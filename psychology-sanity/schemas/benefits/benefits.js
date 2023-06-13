const benefits = {
    name: 'benefits',
    title: 'Seção - Beneficios Online',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título da Seção',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Texto - Paragrafos',
        type: 'array',
        of: [{type: 'paragraph'}],
      },
      {
        name: 'image',
        title: 'Imagem Fundo',
        type: 'image',
      },
      {
        name: 'benefits',
        title: 'Depoimentos',
        type: 'array',
        of: [{type: 'benefit'}],
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
    ],
  }
  
  export default benefits