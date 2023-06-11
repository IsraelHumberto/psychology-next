const testimonials = {
    name: 'testimonials',
    title: 'Seção - Depoimentos',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título da Seção',
        type: 'string',
      },
      {
        name: 'testimonials',
        title: 'Depoimentos',
        type: 'array',
        of: [{type: 'testimonial'}],
      },
    ],
  }
  
  export default testimonials
  