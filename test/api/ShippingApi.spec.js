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
    instance = new GetcandyJs.ShippingApi();
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

  describe('ShippingApi', function() {
    describe('deleteShippingShippingMethodId', function() {
      it('should call deleteShippingShippingMethodId successfully', function(done) {
        //uncomment below and update the code to test deleteShippingShippingMethodId
        //instance.deleteShippingShippingMethodId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShipping', function() {
      it('should call getShipping successfully', function(done) {
        //uncomment below and update the code to test getShipping
        //instance.getShipping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingShippingMethodId', function() {
      it('should call getShippingShippingMethodId successfully', function(done) {
        //uncomment below and update the code to test getShippingShippingMethodId
        //instance.getShippingShippingMethodId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingZones', function() {
      it('should call getShippingZones successfully', function(done) {
        //uncomment below and update the code to test getShippingZones
        //instance.getShippingZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingZonesShippingZoneId', function() {
      it('should call getShippingZonesShippingZoneId successfully', function(done) {
        //uncomment below and update the code to test getShippingZonesShippingZoneId
        //instance.getShippingZonesShippingZoneId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postShipping', function() {
      it('should call postShipping successfully', function(done) {
        //uncomment below and update the code to test postShipping
        //instance.postShipping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postShippingIdPrices', function() {
      it('should call postShippingIdPrices successfully', function(done) {
        //uncomment below and update the code to test postShippingIdPrices
        //instance.postShippingIdPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postShippingZones', function() {
      it('should call postShippingZones successfully', function(done) {
        //uncomment below and update the code to test postShippingZones
        //instance.postShippingZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putShippingIdUsers', function() {
      it('should call putShippingIdUsers successfully', function(done) {
        //uncomment below and update the code to test putShippingIdUsers
        //instance.putShippingIdUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putShippingPricesShippingPriceId', function() {
      it('should call putShippingPricesShippingPriceId successfully', function(done) {
        //uncomment below and update the code to test putShippingPricesShippingPriceId
        //instance.putShippingPricesShippingPriceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putShippingShippingMethodId', function() {
      it('should call putShippingShippingMethodId successfully', function(done) {
        //uncomment below and update the code to test putShippingShippingMethodId
        //instance.putShippingShippingMethodId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putShippingShippingMethodIdZones', function() {
      it('should call putShippingShippingMethodIdZones successfully', function(done) {
        //uncomment below and update the code to test putShippingShippingMethodIdZones
        //instance.putShippingShippingMethodIdZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
