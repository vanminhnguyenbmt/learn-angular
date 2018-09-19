import { QuestionBase } from './question-base';

export class TextBoxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(option: {} = {}) {
        super(option);
        this.type = option['type'] || '';
    }
}
