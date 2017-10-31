/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js'
import ShopApi from '../../src/index'

let instance

beforeEach(() => {
    instance = new ShopApi.TermFilter()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('TermFilterModel', () => {
    it('should create an instance of TermFilterModel', () => {
        // uncomment below and update the code to test TermFilterModel
        // var instane = new ShopApi.TermFilter()
        // expect(instance).to.be.a(ShopApi.TermFilter);
    })

    it('should have the property field (base name: "field")', () => {
        // uncomment below and update the code to test the property field
        // var instane = new ShopApi.TermFilter()
        // expect(instance).to.be();
    })

    it('should have the property operator (base name: "operator")', () => {
        // uncomment below and update the code to test the property operator
        // var instane = new ShopApi.TermFilter()
        // expect(instance).to.be();
    })

    it('should have the property values (base name: "values")', () => {
        // uncomment below and update the code to test the property values
        // var instane = new ShopApi.TermFilter()
        // expect(instance).to.be();
    })

})
