const about = {
  name: 'about',
  title: 'Seção Sobre',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título - Seção',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Texto - Paragrafos',
      type: 'array',
      of: [{type: 'paragraph'}],
    },
    {
      name: 'titleBox',
      title: 'Caixa de itens - Título',
      type: 'string',
    },
    {
      name: 'specialties',
      title: 'Caixa de itens - Itens',
      type: 'array',
      of: [{type: 'specialties'}],
    },

  ],
}

export default about

