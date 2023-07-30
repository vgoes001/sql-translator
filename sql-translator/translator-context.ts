import { Condition } from './contracts/condition';
import { SQLTranslator } from './contracts/sql-translator';
import { BetweenTranslator } from './operators/between-translator';
import { EqualTranslator } from './operators/equal-translator';
import { GreaterThanOrEqualTranslator } from './operators/greater-than-or-equal-translator';
import { GreaterThanTranslator } from './operators/greater-than-translator';
import { InTranslator } from './operators/in-translator';
import { LessThanOrEqualTranslator } from './operators/less-than-or-equal-translator';
import { LessThanTranslator } from './operators/less-than-translator';
import { LikeTranslator } from './operators/like-translator';
import { NotEqualTranslator } from './operators/not-equal-translator';
import { NotInTranslator } from './operators/not-in-translator';
import { NotLikeTranslator } from './operators/not-like-translator';

export class TranslatorContext {
  private translators: { [key: string]: SQLTranslator } = {};

  constructor() {
    this.translators = {
      equal: new EqualTranslator(),
      notEqual: new NotEqualTranslator(),
      greaterThan: new GreaterThanTranslator(),
      lessThan: new LessThanTranslator(),
      greaterThanOrEqual: new GreaterThanOrEqualTranslator(),
      lessThanOrEqual: new LessThanOrEqualTranslator(),
      in: new InTranslator(),
      notIn: new NotInTranslator(),
      like: new LikeTranslator(),
      notLike: new NotLikeTranslator(),
      between: new BetweenTranslator(),
    };
  }

  translate(condition: Condition): string {
    const operator = this.translators[condition.operator];
    if (!operator) {
      throw new Error(`Unsupported operator: ${condition.operator}`);
    }

    return operator.translate(condition);
  }
}
