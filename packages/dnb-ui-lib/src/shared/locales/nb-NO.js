export default {
  'nb-NO': {
    DatePicker: {
      day: 'dag',
      month: 'måned',
      year: 'år',
      start: 'fra',
      end: 'til',
      selected_date: 'Valgt dato: %s',
      selected_month: 'Valgt måned %s',
      selected_year: 'Valgt år %s',
      next_month: 'Neste måned %s',
      prev_month: 'Forrige måned %s',
      next_year: 'Neste år %s',
      prev_year: 'Forrige år %s',
      open_picker_text: 'åpne datovelger',
      mask_order: 'dd/mm/yyyy',
      mask_placeholder: 'dd/mm/åååå', // have to be same setup as "mask" - but can be like: dd/mm/åååå
      date_format: 'yyyy-MM-dd', // in v1 of date-fns we where more flexible in terms of the format
      return_format: 'yyyy-MM-dd', // used in date-fns v1: YYYY-MM-DD
      submit_button_text: 'Ok',
      cancel_button_text: 'Avbryt',
      reset_button_text: 'Tilbakestill'
    },
    GlobalStatus: {
      default_title: 'En feil har skjedd',
      close_text: 'Lukk',
      status_anchor_text: 'Gå til'
    },
    GlobalError: {
      404: {
        title: 'Oisann! Vi finner ikke siden du leter etter …',
        text:
          'Sikker på at du har skrevet riktig adresse? Eller har vi rotet med lenkene? Prøv på nytt, eller [gå tilbake der du kom fra](/back).',
        alt: 'Dame søker i tom eske'
      },
      500: {
        title: 'Oops, her ble det en teknisk feil!',
        text:
          'Tjenesten fungerer ikke slik den skal for øyeblikket, men prøv igjen senere.',
        alt: 'Mann leter etter spor'
      }
    },
    Dropdown: {
      title: 'Valgmeny'
    },
    Modal: {
      close_title: 'Lukk',
      more_info: 'Mer informasjon'
    },
    Input: {
      submit_button_title: 'Send knapp'
    },
    Logo: {
      alt: 'DNB Logo'
    }
  }
}
