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
    instance = new @GetcandyJsClient.InlineResponse4226();
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

  describe('InlineResponse4226', function() {
    it('should create an instance of InlineResponse4226', function() {
      // uncomment below and update the code to test InlineResponse4226
      //var instane = new @GetcandyJsClient.InlineResponse4226();
      //expect(instance).to.be.a(@GetcandyJsClient.InlineResponse4226);
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new @GetcandyJsClient.InlineResponse4226();
      //expect(instance).to.be();
    });

    it('should have the property lineTotal (base name: "line_total")', function() {
      // uncomment below and update the code to test the property lineTotal
      //var instane = new @GetcandyJsClient.InlineResponse4226();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unit_price")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new @GetcandyJsClient.InlineResponse4226();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "tax_rate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instane = new @GetcandyJsClient.InlineResponse4226();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @GetcandyJsClient.InlineResponse4226();
      //expect(instance).to.be();
    });

  });

}));
