const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-wyzer.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-wyzer.herokuapp.com',
  'process.env.CLIENT_ID': 'ksCoEENrNdC0S5f9eG2evrJt3a39Z1NF'
}
