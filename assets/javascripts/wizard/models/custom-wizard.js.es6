import Step from 'wizard/models/step';
import WizardField from 'wizard/models/wizard-field';
import { ajax } from 'wizard/lib/ajax';
import computed from 'ember-addons/ember-computed-decorators';

const CustomWizard = Ember.Object.extend({
  @computed('steps.length')
  totalSteps: length => length
});

export function findCustomWizard(name) {
  return ajax({ url: `/wizard/custom/${name}.json` }).then(response => {
    const wizard = response.wizard;
    wizard.steps = wizard.steps.map(step => {
      const stepObj = Step.create(step);
      stepObj.fields = stepObj.fields.map(f => WizardField.create(f));
      return stepObj;
    });

    return CustomWizard.create(wizard);
  });
}