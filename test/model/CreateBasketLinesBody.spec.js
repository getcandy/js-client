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
    instance = new @GetcandyJsClient.CreateBasketLinesBody();
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

  describe('CreateBasketLinesBody', function() {
    it('should create an instance of CreateBasketLinesBody', function() {
      // uncomment below and update the code to test CreateBasketLinesBody
      //var instane = new @GetcandyJsClient.CreateBasketLinesBody();
      //expect(instance).to.be.a(@GetcandyJsClient.CreateBasketLinesBody);
    });

    it('should have the property variants (base name: "variants")', function() {
      // uncomment below and update the code to test the property variants
      //var instane = new @GetcandyJsClient.CreateBasketLinesBody();
      //expect(instance).to.be();
    });

    it('should have the property basketId (base name: "basket_id")', function() {
      // uncomment below and update the code to test the property basketId
      //var instane = new @GetcandyJsClient.CreateBasketLinesBody();
      //expect(instance).to.be();
    });

  });

}));
