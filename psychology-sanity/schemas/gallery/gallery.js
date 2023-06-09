const gallery = {
  name: 'gallery',
  title: 'Seção - Galeria de Fotos',
  type: 'document',
  fields: [
    {
      name: 'photos',
      title: 'Imagens',
      type: 'array',
      of: [{type: 'photo'}],
    },
  ],
}

export default gallery
