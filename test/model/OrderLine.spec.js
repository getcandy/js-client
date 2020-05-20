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
    factory(root.expect, root.@GetcandyJsClient);
  }
}(this, function(expect, @GetcandyJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @GetcandyJsClient.OrderLine();
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

  describe('OrderLine', function() {
    it('should create an instance of OrderLine', function() {
      // uncomment below and update the code to test OrderLine
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be.a(@GetcandyJsClient.OrderLine);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property lineTotal (base name: "line_total")', function() {
      // uncomment below and update the code to test the property lineTotal
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property discountTotal (base name: "discount_total")', function() {
      // uncomment below and update the code to test the property discountTotal
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property deliveryTotal (base name: "delivery_total")', function() {
      // uncomment below and update the code to test the property deliveryTotal
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unit_price")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property unitQty (base name: "unit_qty")', function() {
      // uncomment below and update the code to test the property unitQty
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property taxTotal (base name: "tax_total")', function() {
      // uncomment below and update the code to test the property taxTotal
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "tax_rate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property option (base name: "option")', function() {
      // uncomment below and update the code to test the property option
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property isShipping (base name: "is_shipping")', function() {
      // uncomment below and update the code to test the property isShipping
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property isManual (base name: "is_manual")', function() {
      // uncomment below and update the code to test the property isManual
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instane = new @GetcandyJsClient.OrderLine();
      //expect(instance).to.be();
    });

  });

}));
