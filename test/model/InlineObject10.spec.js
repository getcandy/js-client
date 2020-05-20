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
    instance = new GetcandyJs.InlineObject10();
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

  describe('InlineObject10', function() {
    it('should create an instance of InlineObject10', function() {
      // uncomment below and update the code to test InlineObject10
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be.a(GetcandyJs.InlineObject10);
    });

    it('should have the property startAt (base name: "start_at")', function() {
      // uncomment below and update the code to test the property startAt
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property stopRules (base name: "stop_rules")', function() {
      // uncomment below and update the code to test the property stopRules
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property sets (base name: "sets")', function() {
      // uncomment below and update the code to test the property sets
      //var instane = new GetcandyJs.InlineObject10();
      //expect(instance).to.be();
    });

  });

}));
