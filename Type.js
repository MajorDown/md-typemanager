/**
 * Classe permettant de créer ou de vérifier le type d'une valeur ou d'un objet par rapport à un schéma donné.
 * @class
 **/
class TypeJS {
  /**
   * @static
   * Vérifie si une valeur est un nombre.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un nombre, faux sinon.
   **/
  static isNumber(value) {
    return typeof value === "number";
  }

  /**
   * @static
   * Vérifie si une valeur est une chaîne de caractères.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une chaîne de caractères, faux sinon.
   **/
  static isString(value) {
    return typeof value === "string";
  }

  /**
   * @static
   * Vérifie si une valeur est un booléen.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un booléen, faux sinon.
   **/
  static isBoolean(value) {
    return typeof value === "boolean";
  }

  /**
   * @static
   * Vérifie si une valeur est un tableau.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un tableau, faux sinon.
   **/
  static isArray(value) {
    return Array.isArray(value);
  }

  /**
   * @static
   * Vérifie si une valeur est un objet.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet et non un tableau, faux sinon.
   **/
  static isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  /**
   * @static
   * Vérifie si une valeur est une fonction.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une fonction, faux sinon.
   **/
  static isFunction(value) {
    return typeof value === "function";
  }

  /**
   * @static
   * Vérifie si une valeur est null.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est null, faux sinon.
   **/
  static isNull(value) {
    return value === null;
  }

  /**
   * @static
   * Vérifie si une valeur est undefined.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est undefined, faux sinon.
   **/
  static isUndefined(value) {
    return typeof value === "undefined";
  }

  /**
   * @static
   * Vérifie si une valeur est un symbole.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un symbole, faux sinon.
   **/
  static isSymbol(value) {
    return typeof value === "symbol";
  }

  /**
   * @static
   * Vérifie si une valeur est une instance de Date.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une instance de Date, faux sinon.
   **/
  static isDate(value) {
    return value instanceof Date;
  }

  /**
   * @static
   * Vérifie si une valeur est une expression régulière (RegExp).
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une expression régulière, faux sinon.
   **/
  static isRegExp(value) {
    return value instanceof RegExp;
  }

  /**
   * @static
   * Vérifie si une valeur est un BigInt.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un BigInt, faux sinon.
   **/
  static isBigInt(value) {
    return typeof value === "bigint";
  }

  /**
   * @static
   * Vérifie si une valeur est une instance de Map.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une instance de Map, faux sinon.
   **/
  static isMap(value) {
    return value instanceof Map;
  }

  /**
   * @static
   * Vérifie si une valeur est une instance de Set.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une instance de Set, faux sinon.
   **/
  static isSet(value) {
    return value instanceof Set;
  }

  /**
   * @static
   * Vérifie si une valeur est une instance de WeakMap.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une instance de WeakMap, faux sinon.
   **/
  static isWeakMap(value) {
    return value instanceof WeakMap;
  }

  /**
   * @static
   * Vérifie si une valeur est une instance de WeakSet.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une instance de WeakSet, faux sinon.
   **/
  static isWeakSet(value) {
    return value instanceof WeakSet;
  }

  /**
   * @static
   * Vérifie si une valeur est une promesse (Promise).
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une promesse, faux sinon.
   **/
  static isPromise(value) {
    return value instanceof Promise;
  }

  /**
   * @static
   * Détermine le type d'une valeur donnée.
   * @param {*} value - La valeur dont on veut connaître le type.
   * @returns {string} Le type de la valeur.
   **/
  static getTypeOf(value) {
    switch (true) {
      case TypeJS.isNull(value):
        return "null";
      case TypeJS.isUndefined(value):
        return "undefined";
      case TypeJS.isNumber(value):
        return "number";
      case TypeJS.isString(value):
        return "string";
      case TypeJS.isBoolean(value):
        return "boolean";
      case TypeJS.isArray(value):
        return "array";
      case TypeJS.isFunction(value):
        return "function";
      case TypeJS.isSymbol(value):
        return "symbol";
      case TypeJS.isDate(value):
        return "date";
      case TypeJS.isRegExp(value):
        return "regexp";
      case TypeJS.isBigInt(value):
        return "bigint";
      case TypeJS.isMap(value):
        return "map";
      case TypeJS.isSet(value):
        return "set";
      case TypeJS.isWeakMap(value):
        return "weakmap";
      case TypeJS.isWeakSet(value):
        return "weakset";
      case TypeJS.isPromise(value):
        return "promise";
      case TypeJS.isObject(value):
        return "object";
      default:
        return "unknown";
    }
  }

  /**
   * Crée une instance de TypeJS avec un schéma donné.
   * @param {object} schema - Le schéma de type, définissant les types attendus pour chaque propriété.
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Vérifie qu'un objet correspond au schéma de type.
   * @param {object} obj - L'objet à vérifier.
   * @returns {boolean} Vrai si l'objet respecte le schéma, faux sinon.
   */
  test(obj) {
    try {
      return this.testField(this.schema, obj);
    } catch (error) {
      console.error(`Type mismatch: ${error.message}`);
      return false;
    }
  }

  /**
   * Vérifie qu'une valeur correspond à une partie spécifique du schéma.
   * @param {object|string|array} schemaPart - Une partie du schéma à vérifier.
   * @param {*} value - La valeur à vérifier par rapport au schéma.
   * @returns {boolean} Vrai si la valeur respecte le schéma, faux sinon.
   * @throws {Error} Si le schéma est invalide.
   */
  testField(schemaPart, value) {
    if (TypeJS.isString(schemaPart)) {
      const result = TypeJS.getTypeOf(value) === schemaPart;
      if (!result) {
        console.error(
          `Expected type '${schemaPart}' but got '${TypeJS.getTypeOf(value)}'`
        );
      }
      return result;
    } else if (Array.isArray(schemaPart)) {
      if (!TypeJS.isArray(value)) {
        console.error(`Expected an array but got '${TypeJS.getTypeOf(value)}'`);
        return false;
      }
      for (let i = 0; i < value.length; i++) {
        if (schemaPart[0] instanceof TypeJS) {
          if (!schemaPart[0].test(value[i])) {
            console.error(`Mismatch in array at index ${i}`);
            return false;
          }
        } else {
          if (!this.testField(schemaPart[0], value[i])) {
            console.error(`Mismatch in array at index ${i}`);
            return false;
          }
        }
      }
      return true;
    } else if (TypeJS.isObject(schemaPart)) {
      if (!TypeJS.isObject(value)) {
        console.error(
          `Expected an object but got '${TypeJS.getTypeOf(value)}'`
        );
        return false;
      }
      for (const key in schemaPart) {
        if (schemaPart.hasOwnProperty(key)) {
          if (!this.testField(schemaPart[key], value[key])) {
            console.error(`Mismatch at key '${key}'`);
            return false;
          }
        }
      }
      return true;
    } else if (schemaPart instanceof TypeJS) {
      return schemaPart.test(value);
    } else {
      throw new Error(`Invalid schema definition`);
    }
  }
}

module.exports = TypeJS;
