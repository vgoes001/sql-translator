import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class GreaterThanTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    return `${condition.attribute} > '${condition.value}'`;
  }
}
