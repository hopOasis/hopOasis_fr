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
            description: 'Getting beers from remote api',
            responses: {},
          },
        },
        '/beers/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting beer from remote api',
            parameters: [{ name: 'id', in: 'path', required: true, type: 'number' }],
            responses: {},
          },
        },
        '/ciders': {
          get: {
            tags: ['Products'],
            description: 'Getting ciders from remote api',
            responses: {},
          },
        },
        '/ciders/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting cider from remote api',
            parameters: [{ name: 'id', in: 'path', required: true, type: 'number' }],
            responses: {},
          },
        },
        '/snacks': {
          get: {
            tags: ['Products'],
            description: 'Getting snacks from remote api',
            responses: {},
          },
        },
        '/snacks/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting snack from remote api',
            parameters: [{ name: 'id', in: 'path', required: true, type: 'number' }],
            responses: {},
          },
        },
        '/sets': {
          get: {
            tags: ['Products'],
            description: 'Getting sets from remote api',
            responses: {},
          },
        },
        '/sets/{id}': {
          get: {
            tags: ['Products'],
            description: 'Getting set from remote api',
            parameters: [{ name: 'id', in: 'path', required: true, type: 'number' }],
            responses: {},
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
        '/products': {
          post: {
            tags: ['Service'],
            description: 'Getting products by filter',
            requestBody: {
              description:
                "value can be      all | beers | ciders | snacks | sets . By defaulf ruturns data from '/beers' endpoint.",
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      filter: {
                        type: 'string',
                        enum: ['all', 'beer', 'cider', 'snacks', 'sets'],
                        description: 'Filter for the products',
                      },
                    },
                    required: ['filter'],
                  },
                  example: {
                    filter: '=> enum  all | beers | ciders | snacks | sets',
                  },
                },
              },
            },
            responses: {},
          },
        },
        '/location': {
          get: {
            tags: ['Service'],
            description: 'Getting cart from remote api',
            responses: {},
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
              'Getting cart from remote api. !!!Notice. Cart use cookies. Cookies expire after 30 days. Cookie automatically generated in the server. You can get cookie from BROWSER=>DEVTOOLS=>APPLICATION=>COOKIES=>OAZA_GUEST',
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
