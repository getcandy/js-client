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
    instance = new @GetcandyJsClient.Attribute();
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

  describe('Attribute', function() {
    it('should create an instance of Attribute', function() {
      // uncomment below and update the code to test Attribute
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be.a(@GetcandyJsClient.Attribute);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property handle (base name: "handle")', function() {
      // uncomment below and update the code to test the property handle
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property filterable (base name: "filterable")', function() {
      // uncomment below and update the code to test the property filterable
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property scopeable (base name: "scopeable")', function() {
      // uncomment below and update the code to test the property scopeable
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property translatable (base name: "translatable")', function() {
      // uncomment below and update the code to test the property translatable
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property variant (base name: "variant")', function() {
      // uncomment below and update the code to test the property variant
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property searchable (base name: "searchable")', function() {
      // uncomment below and update the code to test the property searchable
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property localised (base name: "localised")', function() {
      // uncomment below and update the code to test the property localised
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property lookups (base name: "lookups")', function() {
      // uncomment below and update the code to test the property lookups
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instane = new @GetcandyJsClient.Attribute();
      //expect(instance).to.be();
    });

  });

}));
