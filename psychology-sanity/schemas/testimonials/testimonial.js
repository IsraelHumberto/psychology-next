const testimonial = {
    name: 'testimonial',
    title: 'Depoimento',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Nome',
        type: 'string',
      },
      { name: 'treatment', title: 'Tratamento', type: 'string', options: {
        list: [
            {title: 'Ansiedade', value: 'Ansiedade'},
            {title: 'Depressão', value: 'Depressão'},
            {title: 'TDAH (TRANSTORNO DE DÉFICIT DE ATENÇÃO E HIPERATIVIDADE)', value: 'TDAH (Transtorno de déficit de atenção e hiperatividade)'},
            {title: 'Conflitos Familiares', value: 'Conflitos Familiares'},
        ],
        layout: 'radio',
      } },
      {
        name: 'testimonial',
        title: 'Depoimento',
        type: 'string',
      },
      {
        name: 'photo',
        title: 'Foto',
        type: 'image',
      },
    ],
  }
  
  export default testimonial
  