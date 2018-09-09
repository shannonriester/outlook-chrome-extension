const week = [{
    day: 'sunday',
    target: '._cb_g2 > ._cb_h2:nth-child(1)',
  },
  {
    day: 'monday',
    target: '._cb_g2 > ._cb_h2:nth-child(2)',
  },
  {
    day: 'tuesday',
    target: '._cb_g2 > ._cb_h2:nth-child(3)',
  },
  {
    day: 'wednesday',
    target: '._cb_g2 > ._cb_h2:nth-child(4)',
  },
  {
    day: 'thursday',
    target: '._cb_g2 > ._cb_h2:nth-child(5)',
  },
  {
    day: 'friday',
    target: '._cb_g2 > ._cb_h2:nth-child(6)',
  },
  {
    day: 'saturday',
    target: '._cb_g2 > ._cb_h2:nth-child(7)',
  },
];

const workWeek = [{
    day: 'monday',
    target: '._cb_k2 > :nth-child(1)',
  },
  {
    day: 'tuesday',
    target: '._cb_k2 > :nth-child(2)',
  },
  {
    day: 'wednesday',
    target: '._cb_k2 > :nth-child(3)',
  },
  {
    day: 'thursday',
    target: '._cb_k2 > :nth-child(4)',
  },
  {
    day: 'friday',
    target: '._cb_k2 > :nth-child(5)',
  },
];

// parent with full date: ._wx_z1
const month = [{
    day: 'sunday',
    target: '._wx_E1 > ._wx_F1:nth-child(1)',
  },
  {
    day: 'monday',
    target: '._wx_E1 > ._wx_F1:nth-child(2)',
  },
  {
    day: 'tuesday',
    target: '._wx_E1 > ._wx_F1:nth-child(3)',
  },
  {
    day: 'wednesday',
    target: '._wx_E1 > ._wx_F1:nth-child(4)',
  },
  {
    day: 'thursday',
    target: '._wx_E1 > ._wx_F1:nth-child(5)',
  },
  {
    day: 'friday',
    target: '._wx_E1 > ._wx_F1:nth-child(6)',
  },
  {
    day: 'saturday',
    target: '._wx_E1 > ._wx_F1:nth-child(7)',
  },
];

export {
  week,
  workWeek,
  month,
};