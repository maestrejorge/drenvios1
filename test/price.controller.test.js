const request = require('supertest');
const express = require('express');
const { expect } = require('chai');
const app = express();

// Configura las rutas
const routes = require('../src/routes'); // Asumiendo que tienes un archivo que exporta tus rutas
app.use('/', routes);


describe('GET /:user_id/:nombre_producto', function() {
  this.timeout(4000);

  it('should return the correct price for user 1 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/1/Nike Air Max 90')
      .expect(200);

    expect(res.body.precio_especial_personal).to.equal(129.99);
  });

  it('should return the correct price for user 2 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/2/Nike Air Max 90')
      .expect(200);

    expect(res.body.precio_base).to.equal(150.99);
  });
  it('should return the correct prsice for user 3 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/3/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);
    });
  it('should return the correct price for user 4 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/4/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);
    });
  it('should return the correct price for user 5 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/5/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);
  });
  it('should return the correct price for user 6 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/6/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);

  });
  it('should return the correct price for user 7 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/7/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);
    });

  it('should return the correct price for user 8 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/8/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);
    });
  it('should return the correct price for user 9 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/9/Nike Air Max 90')
      .expect(200);

      expect(res.body.precio_base).to.equal(150.99);
    });
  it('should return the correct price for user 10 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/10/Nike Air Max 90')
      .expect(200);
      expect(res.body.precio_base).to.equal(150.99);
    });
  it('should return the correct price for user 11 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/11/Nike Air Max 90')
      .expect(200);
      expect(res.body.precio_base).to.equal(150.99);
  });
  it('should return the correct price for user 12 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/12/Nike Air Max 90')
      .expect(200);
      expect(res.body.precio_base).to.equal(150.99);
    });  
    it('should return the correct price for user 1 and Converse Chuck Taylor All Star', async function () {
      const res = await request(app)
        .get('/3/Converse Chuck Taylor All Star')
        .expect(200);
        expect(res.body.precio_especial_personal).to.equal(55.99);
      });
  it('should return the correct price for user 13 and Nike Air Max 90', async function () {
    const res = await request(app)
      .get('/13/Nike Air Max 90')
      .expect(404);

    expect(res.body.error).to.equal("No se encontró el usuario o el producto especificado.");
  });
  it('should return the correct error for product id: fdfada21dsfa, userId: 1', async function () {
    const res = await request(app)
      .get('/1/fdfada21dsfa')
      .expect(404);

    expect(res.body.error).to.equal("No se encontró el usuario o el producto especificado.");
  });
  it('should return the correct error for product id: fdfada21dsfa, userId: 3', async function () {
    const res = await request(app)
      .get('/3/fdfada21dsfa')
      .expect(404);

    expect(res.body.error).to.equal("No se encontró el usuario o el producto especificado.");
  });
  it('should return the correct error for product id: "" userId: 9', async function () {
    const res = await request(app)
      .get('/9')
      .expect(404);

    expect(res.body.error).to.equal("Ruta no definida");
  });
  it('should handle the case when user or product is not found', async function() {
    const res = await request(app)
      .get('/1000/Nonexistent Product')
      .expect(404);

    expect(res.body.error).to.equal('No se encontró el usuario o el producto especificado.');  
  });
});
