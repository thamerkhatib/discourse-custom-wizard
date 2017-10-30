import { default as computed } from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  classNames: 'wizard-custom-field',
  isDropdown: Ember.computed.equal('field.type', 'dropdown'),
  disableId: Ember.computed.not('field.isNew'),
  choicesTypes: ['translation', 'preset', 'custom'],
  choicesTranslation: Ember.computed.equal('choicesType', 'translation'),
  choicesPreset: Ember.computed.equal('choicesType', 'preset'),
  choicesCustom: Ember.computed.equal('choicesType', 'custom'),

  @computed('field.type')
  isInput: (type) => type === 'text' || type === 'textarea',

  @computed()
  presetChoices() {
    return [
      { id: 'categories', name: I18n.t('admin.wizard.field.choices_preset.categories') }
    ];
  },
});
