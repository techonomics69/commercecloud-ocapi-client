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
    instance = new ShopApi.Category()
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

describe('CategoryModel', () => {
    it('should create an instance of CategoryModel', () => {
        // uncomment below and update the code to test CategoryModel
        // var instane = new ShopApi.Category()
        // expect(instance).to.be.a(ShopApi.Category);
    })

    it('should have the property cAlternativeUrl (base name: "c_alternativeUrl")', () => {
        // uncomment below and update the code to test the property cAlternativeUrl
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cCatBannerID (base name: "c_catBannerID")', () => {
        // uncomment below and update the code to test the property cCatBannerID
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cCustomCSSFile (base name: "c_customCSSFile")', () => {
        // uncomment below and update the code to test the property cCustomCSSFile
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cEnableCompare (base name: "c_enableCompare")', () => {
        // uncomment below and update the code to test the property cEnableCompare
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cHeaderMenuBanner (base name: "c_headerMenuBanner")', () => {
        // uncomment below and update the code to test the property cHeaderMenuBanner
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cHeaderMenuOrientation (base name: "c_headerMenuOrientation")', () => {
        // uncomment below and update the code to test the property cHeaderMenuOrientation
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cShowInMenu (base name: "c_showInMenu")', () => {
        // uncomment below and update the code to test the property cShowInMenu
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cSizeChartID (base name: "c_sizeChartID")', () => {
        // uncomment below and update the code to test the property cSizeChartID
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cSlotBannerHtml (base name: "c_slotBannerHtml")', () => {
        // uncomment below and update the code to test the property cSlotBannerHtml
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property cSlotBannerImage (base name: "c_slotBannerImage")', () => {
        // uncomment below and update the code to test the property cSlotBannerImage
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property categories (base name: "categories")', () => {
        // uncomment below and update the code to test the property categories
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property description (base name: "description")', () => {
        // uncomment below and update the code to test the property description
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property id (base name: "id")', () => {
        // uncomment below and update the code to test the property id
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property image (base name: "image")', () => {
        // uncomment below and update the code to test the property image
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property name (base name: "name")', () => {
        // uncomment below and update the code to test the property name
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property pageDescription (base name: "page_description")', () => {
        // uncomment below and update the code to test the property pageDescription
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property pageKeywords (base name: "page_keywords")', () => {
        // uncomment below and update the code to test the property pageKeywords
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property pageTitle (base name: "page_title")', () => {
        // uncomment below and update the code to test the property pageTitle
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property parentCategoryId (base name: "parent_category_id")', () => {
        // uncomment below and update the code to test the property parentCategoryId
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

    it('should have the property thumbnail (base name: "thumbnail")', () => {
        // uncomment below and update the code to test the property thumbnail
        // var instane = new ShopApi.Category()
        // expect(instance).to.be();
    })

})
