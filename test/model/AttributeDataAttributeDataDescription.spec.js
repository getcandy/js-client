/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * 
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
    instance = new GetcandyJs.AttributeDataAttributeDataDescription();
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

  describe('AttributeDataAttributeDataDescription', function() {
    it('should create an instance of AttributeDataAttributeDataDescription', function() {
      // uncomment below and update the code to test AttributeDataAttributeDataDescription
      //var instane = new GetcandyJs.AttributeDataAttributeDataDescription();
      //expect(instance).to.be.a(GetcandyJs.AttributeDataAttributeDataDescription);
    });

    it('should have the property webstore (base name: "webstore")', function() {
      // uncomment below and update the code to test the property webstore
      //var instane = new GetcandyJs.AttributeDataAttributeDataDescription();
      //expect(instance).to.be();
    });

  });

}));
