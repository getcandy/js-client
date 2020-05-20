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
    instance = new @GetcandyJsClient.TagsApi();
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

  describe('TagsApi', function() {
    describe('deleteTagsTagId', function() {
      it('should call deleteTagsTagId successfully', function(done) {
        //uncomment below and update the code to test deleteTagsTagId
        //instance.deleteTagsTagId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTags', function() {
      it('should call getTags successfully', function(done) {
        //uncomment below and update the code to test getTags
        //instance.getTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagsTagId', function() {
      it('should call getTagsTagId successfully', function(done) {
        //uncomment below and update the code to test getTagsTagId
        //instance.getTagsTagId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postTags', function() {
      it('should call postTags successfully', function(done) {
        //uncomment below and update the code to test postTags
        //instance.postTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putTagsTagId', function() {
      it('should call putTagsTagId successfully', function(done) {
        //uncomment below and update the code to test putTagsTagId
        //instance.putTagsTagId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
