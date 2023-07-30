import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class InTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    const values = condition.value.map((value: any) => `'${value}'`).join(', ');

    return `${condition.attribute} IN (${values})`;
  }
}
