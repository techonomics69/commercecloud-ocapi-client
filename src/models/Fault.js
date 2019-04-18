/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
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
import ApiClient from '../ApiClient'

/**
* The Fault model module.
* @module models/Fault
* @version 17.8
*/
export default class Fault {
    /**
    * Constructs a new <code>Fault</code>.
    * Document representing a fault.
    * @alias module:models/Fault
    * @class
    */
    constructor() {
        /**
        * The message of the fault.
        * @member {String} message
        */
        this.message = undefined

        /**
        * The type of the fault.
        * @member {String} type
        */
        this.type = undefined

        /**
        * These are optional arguments returned with fault
        * @member {Object} arguments
        */
       this.arguments = undefined
    }

    /**
    * Constructs a <code>Fault</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Fault} obj Optional instance to populate.
    * @return {module:models/Fault} The populated <code>Fault</code> instance.
    */
    static constructFromObject(data, obj) {

        if (data) {
            obj = obj || new Fault()

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String')
            }

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String')
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], Object)
            }
        }

        return obj
    }
}
