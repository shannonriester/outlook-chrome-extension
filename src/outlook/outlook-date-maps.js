const week = {
  targetList: [{
      day: 'sunday',
      target: '._cb_g2 > ._cb_h2:nth-child(1)',
      colTarget: '._wx_u1',
    },
    {
      day: 'monday',
      target: '._cb_g2 > ._cb_h2:nth-child(2)',
      colTarget: '._wx_u1',
    },
    {
      day: 'tuesday',
      target: '._cb_g2 > ._cb_h2:nth-child(3)',
      colTarget: '._wx_u1',
    },
    {
      day: 'wednesday',
      target: '._cb_g2 > ._cb_h2:nth-child(4)',
      colTarget: '._wx_u1',
    },
    {
      day: 'thursday',
      target: '._cb_g2 > ._cb_h2:nth-child(5)',
      colTarget: '._wx_u1',
    },
    {
      day: 'friday',
      target: '._cb_g2 > ._cb_h2:nth-child(6)',
      colTarget: '._wx_u1',
    },
    {
      day: 'saturday',
      target: '._cb_g2 > ._cb_h2:nth-child(7)',
      colTarget: '._wx_u1',
    },
  ],
  column: {
    sunday: '._wx_u1:eq(0)',
    monday: '._wx_u1:eq(1)',
    tuesday: '._wx_u1:eq(2)',
    wednesday: '._wx_u1:eq(3)',
    thursday: '._wx_u1:eq(4)',
    friday: '._wx_u1:eq(5)',
    saturday: '._wx_u1:eq(6)',
  },
}

const workWeek = {
  targetList: [{
      day: 'monday',
      target: '._cb_k2 > :nth-child(1)',
      colTarget: '._cb_l2',
    },
    {
      day: 'tuesday',
      target: '._cb_k2 > :nth-child(2)',
      colTarget: '._cb_l2',
    },
    {
      day: 'wednesday',
      target: '._cb_k2 > :nth-child(3)',
      colTarget: '._cb_l2',
    },
    {
      day: 'thursday',
      target: '._cb_k2 > :nth-child(4)',
      colTarget: '._cb_l2',
    },
    {
      day: 'friday',
      target: '._cb_k2 > :nth-child(5)',
      colTarget: '._cb_l2',
    },
  ],
  column: {
    monday: '._wx_u1:eq(7)',
    tuesday: '._wx_u1:eq(8)',
    wednesday: '._wx_u1:eq(9)',
    thursday: '._wx_u1:eq(10)',
    friday: '._wx_u1:eq(11)',
  },
}

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

// workWeek times $('._wx_o1 > ._wx_r1:visible')
const hours24 = [{
    hour: '12a',
    top: '0px',
    topNum: 0,
  },
  {
    hour: '1a',
    top: '54px',
    topNum: 54,
  },
  {
    hour: '2a',
    top: '108px',
    topNum: 108,
  },
  {
    hour: '3a',
    top: '162px',
    topNum: 162,
  },
  {
    hour: '4a',
    top: '216px',
    topNum: 216,
  },
  {
    hour: '5a',
    top: '270px',
    topNum: 270,
  },
  {
    hour: '6a',
    top: '324px',
    topNum: 324,
  },
  {
    hour: '7a',
    top: '378px',
    topNum: 378,
  },
  {
    hour: '8a',
    top: '432px',
    topNum: 432,
  },
  {
    hour: '9a',
    top: '486px',
    topNum: 486,
  },
  {
    hour: '10a',
    top: '540px',
    topNum: 540,
  },
  {
    hour: '11a',
    top: '595px',
    topNum: 595,
  },
  {
    hour: '12p',
    top: '648px',
    topNum: 648,
  },
  {
    hour: '1p',
    top: '702px',
    topNum: 702,
  }, {
    hour: '2p',
    top: '756px',
    topNum: 756,
  }, {
    hour: '3p',
    top: '810px',
    topNum: 810,
  }, {
    hour: '4p',
    top: '864px',
    topNum: 864,
  }, {
    hour: '5p',
    top: '918px',
    topNum: 918,
  }, {
    hour: '6p',
    top: '972px',
    topNum: 972,
  }, {
    hour: '7p',
    top: '1026px',
    topNum: 1026,
  }, {
    hour: '8p',
    top: '1080px',
    topNum: 1080,
  }, {
    hour: '9p',
    top: '1134px',
    topNum: 1134,
  }, {
    hour: '10p',
    top: '1188px',
    topNum: 1188,
  }, {
    hour: '11p',
    top: '1242px',
    topNum: 1242,
  },
];

function getCalendarView(search = window.location.search) {
  if (search.indexOf('WorkWeek') !== -1) {
    return workWeek;
  } else if (search.indexOf('Week') !== -1) {
    return week;
  } else if (search.indexOf('Month') !== -1) {
    return month;
  }
}

export {
  week,
  workWeek,
  month,
  hours24,
  getCalendarView,
};