/**
 * Une classe utilitaire pour la vérification des types et la validation des objets.
 */
class TypeChecker {
  /**
   * Vérifie si une valeur est un nombre.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un nombre, faux sinon.
   */
  static isNumber(value) {
    return typeof value === "number";
  }

  /**
   * Vérifie si une valeur est une chaîne de caractères.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une chaîne de caractères, faux sinon.
   */
  static isString(value) {
    return typeof value === "string";
  }

  /**
   * Vérifie si une valeur est un booléen.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un booléen, faux sinon.
   */
  static isBoolean(value) {
    return typeof value === "boolean";
  }

  /**
   * Vérifie si une valeur est un tableau.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un tableau, faux sinon.
   */
  static isArray(value) {
    return Array.isArray(value);
  }

  /**
   * Vérifie si une valeur est un objet.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet et non un tableau, faux sinon.
   */
  static isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  /**
   * Vérifie si une valeur est une fonction.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une fonction, faux sinon.
   */
  static isFunction(value) {
    return typeof value === "function";
  }

  /**
   * Vérifie si une valeur est null.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est null, faux sinon.
   */
  static isNull(value) {
    return value === null;
  }

  /**
   * Vérifie si une valeur est undefined.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est undefined, faux sinon.
   */
  static isUndefined(value) {
    return typeof value === "undefined";
  }

  /**
   * Vérifie si une valeur est un symbole.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un symbole, faux sinon.
   */
  static isSymbol(value) {
    return typeof value === "symbol";
  }

  /**
   * Vérifie si une valeur est un objet Date.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet Date, faux sinon.
   */
  static isDate(value) {
    return value instanceof Date;
  }

  /**
   * Vérifie si une valeur est une expression régulière (RegExp).
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une expression régulière, faux sinon.
   */
  static isRegExp(value) {
    return value instanceof RegExp;
  }

  /**
   * Vérifie si une valeur est un BigInt.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un BigInt, faux sinon.
   */
  static isBigInt(value) {
    return typeof value === "bigint";
  }

  /**
   * Vérifie si une valeur est un objet Map.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet Map, faux sinon.
   */
  static isMap(value) {
    return value instanceof Map;
  }

  /**
   * Vérifie si une valeur est un objet Set.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet Set, faux sinon.
   */
  static isSet(value) {
    return value instanceof Set;
  }

  /**
   * Vérifie si une valeur est un objet WeakMap.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet WeakMap, faux sinon.
   */
  static isWeakMap(value) {
    return value instanceof WeakMap;
  }

  /**
   * Vérifie si une valeur est un objet WeakSet.
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est un objet WeakSet, faux sinon.
   */
  static isWeakSet(value) {
    return value instanceof WeakSet;
  }

  /**
   * Vérifie si une valeur est une promesse (Promise).
   * @param {*} value - La valeur à vérifier.
   * @returns {boolean} Vrai si la valeur est une promesse, faux sinon.
   */
  static isPromise(value) {
    return value instanceof Promise;
  }

  /**
   * Détermine le type d'une valeur donnée.
   * @param {*} value - La valeur dont on veut connaître le type.
   * @returns {string} Le type de la valeur.
   */
  static getTypeOf(value) {
    switch (true) {
      case this.isNull(value):
        return "null";
      case this.isUndefined(value):
        return "undefined";
      case this.isNumber(value):
        return "number";
      case this.isString(value):
        return "string";
      case this.isBoolean(value):
        return "boolean";
      case this.isArray(value):
        return "array";
      case this.isFunction(value):
        return "function";
      case this.isSymbol(value):
        return "symbol";
      case this.isDate(value):
        return "date";
      case this.isRegExp(value):
        return "regexp";
      case this.isBigInt(value):
        return "bigint";
      case this.isMap(value):
        return "map";
      case this.isSet(value):
        return "set";
      case this.isWeakMap(value):
        return "weakmap";
      case this.isWeakSet(value):
        return "weakset";
      case this.isPromise(value):
        return "promise";
      case this.isObject(value):
        return "object";
      default:
        return "unknown";
    }
  }

  /**
   * Vérifie si un objet correspond à un modèle donné.
   * @param {object} object - L'objet à valider.
   * @param {object} model - Le modèle auquel valider l'objet.
   * @returns {boolean} true si l'objet correspond au modèle, sinon. false
   * @throws {TypeError} Si l'objet ou le modèle n'est pas un objet.
   */
  static ismatching(object, model) {
    if (!TypeChecker.isObject(object) || !TypeChecker.isObject(model)) {
      throw new TypeError("Les deux paramètres doivent être des objets");
    }

    for (let key in model) {
      if (model.hasOwnProperty(key)) {
        const expectedType = model[key];
        const actualValue = object[key];

        if (typeof expectedType === "function") {
          if (!expectedType(actualValue)) {
            return false;
          }
        } else if (TypeChecker.isObject(expectedType)) {
          if (!TypeChecker.ismatching(actualValue, expectedType)) {
            return false;
          }
        } else if (TypeChecker.isArray(expectedType)) {
          if (!TypeChecker.isArray(actualValue)) {
            return false;
          }
          const arrayModel = expectedType[0];
          for (let item of actualValue) {
            if (TypeChecker.isObject(arrayModel)) {
              if (!TypeChecker.ismatching(item, arrayModel)) {
                return false;
              }
            } else if (typeof arrayModel === "function") {
              if (!arrayModel(item)) {
                return false;
              }
            }
          }
        } else {
          throw new TypeError(
            `Le modèle pour la clé "${key}" doit être une fonction, un objet, ou un tableau`
          );
        }
      }
    }
    return true;
  }
}

module.exports = TypeChecker;
