const request = require('supertest');
const express = require('express');
const { expect } = require('chai');

const app = express();

const routes = require('../src/routes'); // Asumiendo que tienes un archivo que exporta tus rutas
app.use('/', routes);

describe('GET /products', function() {
  it('should return a list of available products', async function() {
    const res = await request(app)
      .get('/products')
      .expect(200);

    expect(res.body).to.be.an('array');
    expect(res.body.every(product => product.existencia > 0)).to.be.true;
  });
  it('should return a 404 error for an undefined route', async function() {
    const res = await request(app)
      .get('/undefined-route')
      .expect(404);

    expect(res.body.error).to.equal('Ruta no definida');
  });


});
