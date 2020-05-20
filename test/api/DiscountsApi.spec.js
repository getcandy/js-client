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
    instance = new GetcandyJs.DiscountsApi();
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

  describe('DiscountsApi', function() {
    describe('deleteDiscountsDiscountId', function() {
      it('should call deleteDiscountsDiscountId successfully', function(done) {
        //uncomment below and update the code to test deleteDiscountsDiscountId
        //instance.deleteDiscountsDiscountId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDiscounts', function() {
      it('should call getDiscounts successfully', function(done) {
        //uncomment below and update the code to test getDiscounts
        //instance.getDiscounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDiscountsDiscountId', function() {
      it('should call getDiscountsDiscountId successfully', function(done) {
        //uncomment below and update the code to test getDiscountsDiscountId
        //instance.getDiscountsDiscountId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDiscounts', function() {
      it('should call postDiscounts successfully', function(done) {
        //uncomment below and update the code to test postDiscounts
        //instance.postDiscounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putDiscountsDiscountId', function() {
      it('should call putDiscountsDiscountId successfully', function(done) {
        //uncomment below and update the code to test putDiscountsDiscountId
        //instance.putDiscountsDiscountId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
