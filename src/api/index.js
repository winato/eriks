import doRequest from './doRequest';

const getProducts = () => doRequest({
  url: 'compare/products',
  method: 'get',
})

export {
  getProducts,
}
