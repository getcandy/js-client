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
    instance = new @GetcandyJsClient.ProductFamiliesApi();
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

  describe('ProductFamiliesApi', function() {
    describe('deleteProductFamiliesProductFamilyId', function() {
      it('should call deleteProductFamiliesProductFamilyId successfully', function(done) {
        //uncomment below and update the code to test deleteProductFamiliesProductFamilyId
        //instance.deleteProductFamiliesProductFamilyId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductFamilies', function() {
      it('should call getProductFamilies successfully', function(done) {
        //uncomment below and update the code to test getProductFamilies
        //instance.getProductFamilies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductFamiliesProductFamilyId', function() {
      it('should call getProductFamiliesProductFamilyId successfully', function(done) {
        //uncomment below and update the code to test getProductFamiliesProductFamilyId
        //instance.getProductFamiliesProductFamilyId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postProductFamilies', function() {
      it('should call postProductFamilies successfully', function(done) {
        //uncomment below and update the code to test postProductFamilies
        //instance.postProductFamilies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductFamiliesProductFamilyId', function() {
      it('should call putProductFamiliesProductFamilyId successfully', function(done) {
        //uncomment below and update the code to test putProductFamiliesProductFamilyId
        //instance.putProductFamiliesProductFamilyId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
