import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class LessThanOrEqualTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    return `${condition.attribute} <= '${condition.value}'`;
  }
}
