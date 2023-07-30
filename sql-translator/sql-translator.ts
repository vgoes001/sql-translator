import { Condition } from './contracts/condition';
import { TranslatorContext } from './translator-context';

export class SQLTranslator {
  private translatorContext: TranslatorContext;

  constructor() {
    this.translatorContext = new TranslatorContext();
  }

  private buildGroup(group: any): string {
    const operator = group.group.toUpperCase() === 'OR' ? 'OR' : 'AND';
    const subConditions = group.value.map((condition: Condition | any) => {
      if (condition.hasOwnProperty('group')) {
        return this.buildGroup(condition);
      } else {
        return this.translatorContext.translate(condition);
      }
    });

    return `(${subConditions.join(` ${operator} `)})`;
  }

  public translateToSQLWhere(conditions: Condition[]): string {
    const outputStack = [];

    for (const condition of conditions) {
      if (condition.hasOwnProperty('group')) {
        outputStack.push(this.buildGroup(condition));
      } else {
        outputStack.push(this.translatorContext.translate(condition));
      }
    }

    return outputStack.join(' AND ');
  }
}
