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
    instance = new @GetcandyJsClient.InlineResponse2001();
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

  describe('InlineResponse2001', function() {
    it('should create an instance of InlineResponse2001', function() {
      // uncomment below and update the code to test InlineResponse2001
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be.a(@GetcandyJsClient.InlineResponse2001);
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "sub_total")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property deliveryTotal (base name: "delivery_total")', function() {
      // uncomment below and update the code to test the property deliveryTotal
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property taxTotal (base name: "tax_total")', function() {
      // uncomment below and update the code to test the property taxTotal
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property orderTotal (base name: "order_total")', function() {
      // uncomment below and update the code to test the property orderTotal
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property discountTotal (base name: "discount_total")', function() {
      // uncomment below and update the code to test the property discountTotal
      //var instane = new @GetcandyJsClient.InlineResponse2001();
      //expect(instance).to.be();
    });

  });

}));
