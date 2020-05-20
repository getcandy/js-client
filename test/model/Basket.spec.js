/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@getcandy.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GetcandyJs);
  }
}(this, function(expect, GetcandyJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GetcandyJs.Basket();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Basket', function() {
    it('should create an instance of Basket', function() {
      // uncomment below and update the code to test Basket
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be.a(GetcandyJs.Basket);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "sub_total")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property taxTotal (base name: "tax_total")', function() {
      // uncomment below and update the code to test the property taxTotal
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property discountTotal (base name: "discount_total")', function() {
      // uncomment below and update the code to test the property discountTotal
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property changed (base name: "changed")', function() {
      // uncomment below and update the code to test the property changed
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property hasExclusions (base name: "has_exclusions")', function() {
      // uncomment below and update the code to test the property hasExclusions
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new GetcandyJs.Basket();
      //expect(instance).to.be();
    });

  });

}));
