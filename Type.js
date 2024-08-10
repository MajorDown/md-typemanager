const TypeChecker = require("./TypeChecker");

/**
 * Classe de validation de type.
 * @class
 */
class Type {
  /**
   * Crée une instance de Type avec un schéma donné.
   * @param {object} schema - Le schéma de type, définissant les types attendus pour chaque propriété.
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Valide un objet contre le schéma de type.
   * @param {object} obj - L'objet à valider.
   * @returns {boolean} Vrai si l'objet respecte le schéma, faux sinon.
   * @throws {Error} Lance une erreur si l'objet ne respecte pas le schéma.
   */
  check(obj) {
    return this.checkSchema(this.schema, obj);
  }

  /**
   * Valide un schéma spécifique par rapport à une valeur donnée.
   * @param {object|string|array} schemaPart - Une partie du schéma à valider.
   * @param {*} value - La valeur à valider contre le schéma.
   * @returns {boolean} Vrai si la valeur respecte le schéma, faux sinon.
   * @throws {Error} Lance une erreur si la valeur ne respecte pas le schéma.
   */
  checkSchema(schemaPart, value) {
    if (TypeChecker.isString(schemaPart)) {
      // Si c'est un type primitif comme 'string', 'number', etc.
      if (TypeChecker.getTypeOf(value) !== schemaPart) {
        throw new Error(
          `Type mismatch: expected ${schemaPart}, got ${TypeChecker.getTypeOf(
            value
          )}`
        );
      }
    } else if (Array.isArray(schemaPart)) {
      // Si c'est un tableau de types ou un tableau de valeurs littérales
      if (!TypeChecker.isArray(value)) {
        throw new Error(
          `Type mismatch: expected array, got ${TypeChecker.getTypeOf(value)}`
        );
      }
      for (let i = 0; i < value.length; i++) {
        if (schemaPart[0] instanceof Type) {
          // Si c'est une instance de Type, valider chaque élément comme un objet du type spécifié
          schemaPart[0].check(value[i]);
        } else {
          // Sinon, valider chaque élément par rapport au type primitif ou à la valeur littérale
          this.checkSchema(schemaPart[0], value[i]);
        }
      }
    } else if (TypeChecker.isObject(schemaPart)) {
      // Si c'est un objet, pour les objets imbriqués ou les types définis précédemment
      if (!TypeChecker.isObject(value)) {
        throw new Error(
          `Type mismatch: expected object, got ${TypeChecker.getTypeOf(value)}`
        );
      }
      for (const key in schemaPart) {
        if (schemaPart.hasOwnProperty(key)) {
          this.checkSchema(schemaPart[key], value[key]);
        }
      }
    } else if (schemaPart instanceof Type) {
      // Si c'est une instance de Type
      schemaPart.check(value);
    } else {
      throw new Error(`Invalid schema definition`);
    }
    return true;
  }
}

module.exports = Type;
