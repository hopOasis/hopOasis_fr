import { createSwaggerSpec } from 'next-swagger-doc';
import { PROXI_URL } from '../static/constants';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Oaza Next.JS Swagger API',
        version: '1.0',
      },
      servers: [{ url: PROXI_URL }],
      paths: {
        '/beers': {
          get: {
            tags: ['Products'],
            description: 'Getting BEERS from remote api and convert them to unifiable objects',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        id: 'BEER-30001',
                        name: 'Beer name',
                        volumeLarge: 0.5,
                        volumeSmall: 0.33,
                        priceLarge: 150,
                        priceSmall: 100,
                        description: 'Beer description',
                        beerColor: 'white',
                        image: ['https://image-name'],
                        rating: 4.3,
                        votes: 40,
                        specialOfferIds: [1],
                        itemType: 'BEER',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        '/beers/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting BEER from remote api and convert to unifiable object',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be BEER-30001, for expample',
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      id: 'BEER-30001',
                      name: 'Beer name',
                      volumeLarge: 0.5,
                      volumeSmall: 0.33,
                      priceLarge: 150,
                      priceSmall: 100,
                      description: 'Beer description',
                      beerColor: 'white',
                      image: ['https://image-name'],
                      rating: 4.3,
                      votes: 40,
                      specialOfferIds: [1],
                      itemType: 'BEER',
                    },
                  },
                },
              },
            },
          },
        },
        '/beers/{id}/rating': {
          post: {
            tags: ['Products'],
            description: 'Add BEER rating to remote api',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be BEER-30001, for expample',
              },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ratingValue: { type: 'number' },
                    },
                  },
                  example: { ratingValue: 4 },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      message: 'succsess',
                    },
                  },
                },
              },
            },
          },
        },
        '/ciders': {
          get: {
            tags: ['Products'],
            description: 'Getting CIDERS from remote api and convert them to unifiable objects',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        id: 'CIDER-30001',
                        name: 'Cider name',
                        volumeLarge: 0.5,
                        volumeSmall: 0.33,
                        priceLarge: 150,
                        priceSmall: 100,
                        description: 'Cider description',
                        beerColor: null,
                        image: ['https://image-name'],
                        rating: 4.3,
                        votes: 40,
                        specialOfferIds: [1],
                        itemType: 'CIDER',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        '/ciders/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting CIDER from remote api convert to unifiable object',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be CIDER-30001, for expample',
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      id: 'CIDER-30001',
                      name: 'Cider name',
                      volumeLarge: 0.5,
                      volumeSmall: 0.33,
                      priceLarge: 150,
                      priceSmall: 100,
                      description: 'Cider description',
                      beerColor: null,
                      image: ['https://image-name'],
                      rating: 4.3,
                      votes: 40,
                      specialOfferIds: [1],
                      itemType: 'CIDER',
                    },
                  },
                },
              },
            },
          },
        },
        '/ciders/{id}/rating': {
          post: {
            tags: ['Products'],
            description: 'Add CIDER rating to remote api',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be CIDER-30001, for expample',
              },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ratingValue: { type: 'number' },
                    },
                  },
                  example: { ratingValue: 4 },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      message: 'succsess',
                    },
                  },
                },
              },
            },
          },
        },
        '/snacks': {
          get: {
            tags: ['Products'],
            description: 'Getting SNACKS from remote api and convert them to unifiable objects',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        id: 'SNACK-30001',
                        name: 'Snack name',
                        volumeLarge: 0.5,
                        volumeSmall: 0.33,
                        priceLarge: 150,
                        priceSmall: 100,
                        description: 'Snack description',
                        beerColor: null,
                        image: ['https://image-name'],
                        rating: 4.3,
                        votes: 40,
                        specialOfferIds: [1],
                        itemType: 'SNACK',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        '/snacks/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting SNACK from remote api api and convert to unifiable object',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be SNACK-30001, for expample',
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      id: 'SNACK-30001',
                      name: 'Snack name',
                      volumeLarge: 0.5,
                      volumeSmall: 0.33,
                      priceLarge: 150,
                      priceSmall: 100,
                      description: 'Snack description',
                      beerColor: null,
                      image: ['https://image-name'],
                      rating: 4.3,
                      votes: 40,
                      specialOfferIds: [1],
                      itemType: 'SNACK',
                    },
                  },
                },
              },
            },
          },
        },
        '/snacks/{id}/rating': {
          post: {
            tags: ['Products'],
            description: 'Add SNACK rating to remote api',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be SNACK-30001, for expample',
              },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ratingValue: { type: 'number' },
                    },
                  },
                  example: { ratingValue: 4 },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      message: 'succsess',
                    },
                  },
                },
              },
            },
          },
        },
        '/sets': {
          get: {
            tags: ['Products'],
            description: 'Getting SETS from remote api and convert them to unifiable objects',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: [
                      {
                        id: 'PRODUCT_BUNDLE-30001',
                        name: 'Set name',
                        volumeLarge: 300,
                        volumeSmall: 150,
                        priceLarge: 150,
                        priceSmall: 100,
                        description: 'Set description',
                        beerColor: null,
                        image: ['https://image-name'],
                        rating: 4.3,
                        votes: 40,
                        specialOfferIds: [1],
                        itemType: 'PRODUCT_BUNDLE',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        '/sets/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting set from remote api and convert to unifiable object',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be PRODUCT_BUNDLE-30001, for expample',
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      id: 'PRODUCT_BUNDLE-30001',
                      name: 'Set name',
                      volumeLarge: 300,
                      volumeSmall: 150,
                      priceLarge: 150,
                      priceSmall: 100,
                      description: 'Set description',
                      beerColor: null,
                      image: ['https://image-name'],
                      rating: 4.3,
                      votes: 40,
                      specialOfferIds: [1],
                      itemType: 'PRODUCT_BUNDLE',
                    },
                  },
                },
              },
            },
          },
        },
        '/sets/{id}/rating': {
          post: {
            tags: ['Products'],
            description: 'Add SET rating to remote api',
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                type: 'number',
                description: 'ID automatically generated in the server. ID must be PRODUCT_BUNDLE-30001, for expample',
              },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ratingValue: { type: 'number' },
                    },
                  },
                  example: { ratingValue: 4 },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      message: 'succsess',
                    },
                  },
                },
              },
            },
          },
        },
        '/weekProducts': {
          get: {
            tags: ['Special'],
            description: 'Getting weekly products from remote api',
            responses: {},
          },
        },
        '/specialForYou': {
          get: {
            tags: ['Special'],
            description: 'Getting special-for-you products from remote api',
            responses: {},
          },
        },
        '/location': {
          get: {
            tags: ['Service'],
            description: 'Getting LOCATION from remote api',
            responses: {
              200: {
                content: {
                  'application/json': {
                    example: {
                      ip: '37.73.207.179',
                      city: 'Kiev',
                    },
                  },
                },
              },
            },
          },
        },
        '/carts': {
          post: {
            tags: ['Cart'],
            description:
              "Post cart to remote api. !!!Notice. Cart use cookies. Cookies expire after 30 days. Cookie automatically generated in the server. You can get cookie from BROWSER=>DEVTOOLS=>APPLICATION=>COOKIES=>OAZA_GUEST to fill 'cartId' field. Field 'itemType' - enum BEER | SNACK | PRODUCT_BUNDLE | CIDER",
            parameters: [
              {
                name: 'oaza_guest',
                in: 'cookie',
                required: true,
                shema: {
                  type: 'number',
                },
              },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      cartId: {
                        type: 'number',
                      },
                      itemId: { type: 'number' },
                      quantity: {
                        type: 'number',
                      },
                      itemType: { type: 'string' },
                    },
                  },
                  example: {
                    cartId: '=> set number from cookie',
                    itemId: 30001,
                    quantity: 1,
                    itemType: '=> enum BEER | SNACK | PRODUCT_BUNDLE | CIDER',
                  },
                },
              },
              required: true,
            },
            responses: {},
          },
        },
        '/carts/{id}': {
          get: {
            tags: ['Cart'],
            description:
              'Getting cart list from remote api. !!!Notice. Cart use cookies. Cookies expire after 30 days. Cookie automatically generated in the server. You can get cookie from BROWSER=>DEVTOOLS=>APPLICATION=>COOKIES=>OAZA_GUEST and put it to the ID filed',
            parameters: [{ name: 'id', in: 'path', type: 'number', required: true }],
            responses: {},
          },
        },
      },
      components: {},
    },
  });
  return spec;
};
