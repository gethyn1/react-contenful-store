const mockProducts = [
  {
    sys: {
      id: '123',
    },
    fields: {
      productTitle: 'Title 1',
      productImage: {
        fields: {
          file: {
            url: 'test.jpg',
          },
          title: 'title',
        },
      },
      price: 5,
    },
  },
  {
    sys: {
      id: '456',
    },
    fields: {
      productTitle: 'Title 2',
      productImage: {
        fields: {
          file: {
            url: 'test.jpg',
          },
          title: 'title',
        },
      },
      price: 6,
    },
  },
]

export default mockProducts
