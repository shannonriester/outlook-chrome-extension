window.scriptsLoaded = window.scriptsLoaded || {};
window.scriptProcessStart = window.scriptProcessStart || {};
window.scriptProcessStart['microsoft.owa.calendar.surface.v2.desktop.js'] = (new Date()).getTime();

function CalendarSurfaceDesktopComponentV2() {}
CalendarSurfaceDesktopComponentV2.$$cctor = function () {
  _a.t.a().a(CalendarSurfaceDesktopComponentV2)
};
CalendarSurfaceDesktopComponentV2.prototype = {
  b: function (n, t, i) {
    var e = this;
    n.b(_cb.Y, function () {
      var t = n.a(_a.e);
      return new _wx.c(n.a(_wx.b), n.a(_cb.l), n.a(_cb.be), t.a().c().Enabled && i.g() !== "SharedHoverCard" ? n.c(_cc.bU) : null)
    }).b(_y.ci).a();
    var o = this;
    n.b(_wx.b, function () {
      var t = n.a(_a.e);
      return new _wx.b(n.a(_cb.bq), n.d(_y.eU), n.a(_cb.l), n.a(_cb.F), n.a(_a.e), n.a(_j.o), n.f(_a.S), !1)
    }).b(_cb.c).a();
    var f = this;
    n.b(_wx.l, function () {
      var t = n.a(_a.e).a();
      var i = n.a(_g.h).k();
      return new _wx.l(n.a(_a.A), n.d(_y.bG), n.d(_cb.cg), n.a(_cb.bq), n.d(_db.bl), n.a(_cb.l), n.a(_a.e), n.a(_j.o), n.d(_cc.by), n.d(_cc.bc), n.a(IMailComposeLauncher), n.d(_y.W), n.c(_cc.bg), t.bz().Enabled && i.InterestingCalendarsEnabled ? n.c(_cc.cO) : null, t.lW().Enabled ? n.c(_cc.cP) : null, t.ib().Enabled ? n.c(_cc.ce) : null, t.t().Enabled ? n.c(_cc.bH) : null, t.ko().Enabled ? n.c(_db.bY) : null)
    }).b(_cb.cp).a();
    var r = this;
    n.b(_wx.i, function () {
      return new _wx.i(document.createElement("div"), n.a(_a.e).a().S().Enabled ? n.c(_cc.j) : null, n.a(_j.j))
    });
    var u = this;
    n.b(_j.cc.$$(_cc.j), function () {
      return n.a(_g.h).k().WeatherEnabled ? n.c(_cc.j) : null
    }).a()
  },
  a: function () {
    return null
  }
};
Type.registerNamespace("_wx");
_wx.g = function () {};
_wx.k = function (n) {
  this.g = Function.createDelegate(this, this.i);
  _wx.k.initializeBase(this);
  this.f = n
};
_wx.k.prototype = {
  f: null,
  c: function (n) {
    if (_wx.j.isInstanceOfType(n.V())) {
      var t = n.V();
      t.a ? this.d(null) : this.f.b(_wx.g, this.g)
    }
  },
  b: function (n) {
    this.f.c(_wx.g, this.g)
  },
  i: function (n) {
    this.d(null)
  }
};
_wx.j = function (n, t, i, r) {
  _wx.j.initializeBase(this);
  this.d = n;
  this.b = t;
  this.c = i;
  this.a = r
};
_wx.j.prototype = {
  d: null,
  b: null,
  c: null,
  a: null
};
_wx.h = function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
  this.bl = Function.createDelegate(this, this.bO);
  this.bh = Function.createDelegate(this, this.bH);
  this.bg = Function.createDelegate(this, this.bG);
  this.O = Function.createDelegate(this, this.bQ);
  this.bm = Function.createDelegate(this, this.bP);
  this.bn = Function.createDelegate(this, this.bR);
  this.br = Function.createDelegate(this, this.bV);
  this.bk = Function.createDelegate(this, this.bN);
  this.bp = Function.createDelegate(this, this.bT);
  this.bj = Function.createDelegate(this, this.bM);
  this.bo = Function.createDelegate(this, this.bS);
  this.bi = Function.createDelegate(this, this.bK);
  this.bs = Function.createDelegate(this, this.bW);
  this.bq = Function.createDelegate(this, this.bU);
  _wx.h.initializeBase(this, [n, r, i, u, e, o, s]);
  this.t = t;
  if (!e.a.e()) {
    this.g = v;
    this.V = p;
    this.y = y;
    this.Z = w;
    this.bb = b;
    this.Y = l;
    this.W = f;
    this.bc = h;
    this.j = c;
    this.A = k;
    this.S = new _j.g(this.bq, _cb.cn.$$(_fm.k).a);
    this.ba = new _j.g(this.bs, _cb.cn.$$(_fm.k).a);
    this.T = new _j.g(this.bi, _cb.cn.$$(_fm.k).a);
    if (y) {
      this.o = new _j.g(this.bo, _cb.cn.$$(_fm.k).a);
      this.e.b.a(_wx.g, new _wx.g);
      this.h.a().iI().Enabled && (this.Q = new _wx.j(_u.O.DS, _u.O.Cz, _u.O.Bq, this.o));
      if (this.h.a().hQ().Enabled) {
        this.R = new _j.g(this.bj, _cb.cn.$$(_fm.k).a);
        this.e.b.a(_wx.g, new _wx.g);
        this.P = new _wx.j(_u.O.K, _u.O.Bx, _u.O.Bb, this.R)
      }
    }
    p && (this.x = new _j.g(this.bp, _cb.cn.$$(_fm.k).a));
    this.X = new _j.g(this.bk, _cb.cn.$$(_fm.k).a);
    this.bd = new _j.g(this.br, _cb.cn.$$(_fm.k).a);
    w && (this.u = new _j.g(this.bn, _cb.cn.$$(_fm.k).a));
    var d = !1;
    var g = this;
    e.j.d().o(function (n) {
      n.a().o(function (n) {
        var t = n;
        t.m() && (d = !0)
      })
    });
    b && d && (this.z = new _j.g(this.bm, _cb.cn.$$(_fm.k).a));
    a && (this.s = a)
  }
};
_wx.h.prototype = {
  W: null,
  bc: null,
  j: null,
  y: null,
  V: null,
  Z: null,
  bb: null,
  A: null,
  Y: null,
  x: null,
  o: null,
  R: null,
  u: null,
  z: null,
  S: null,
  X: null,
  bd: null,
  ba: null,
  T: null,
  t: null,
  g: null,
  C: null,
  s: null,
  B: null,
  P: null,
  Q: null,
  bt: function () {
    if (!this.B) {
      var t = document.createElement("style");
      document.body.appendChild(t);
      var n = window.document.styleSheets;
      this.B = n[n.length - 1]
    }
    return this.B
  },
  bw: function () {
    return new _fm.k
  },
  K: function (n) {
    this.e.a.e() || this.bI(n);
    _cb.cn.prototype.K.call(this, n)
  },
  eJ: function () {
    this.e.j.q().a() && this.e.j.q().a().f(this.O);
    _cb.cn.prototype.eJ.call(this)
  },
  bI: function (n) {
    var i;
    var u = (i = new _fm.p(this.bL(), this.bx()),
      i.e(_u.O.BO),
      i);
    n.a(u);
    if (this.g) {
      var o = this;
      this.g.a(function (n) {
        u.a.p.a(n.d())
      })
    }
    n.a(new _fm.l(_u.O.BU, this.bg, 0, _u.O.BU, !1, !1, _cb.b.k(), null, !1, null));
    this.o && n.a(new _fm.f(this.o, _u.O.BF, _cb.b.x(), 0, null, null, !1, !1, !1, !1, null));
    this.z && n.a(new _fm.f(this.z, _u.O.B, _cb.b.B(), 0, null, null, !1, !1, !1, !1, null));
    if (this.s) {
      var e = this;
      this.s.a(function (t) {
        t.f() && n.a(t.i(e.t.l(), null))
      })
    }
    if (!this.w()) {
      this.C = new _fm.l(_u.O.T, this.bh, 0, _u.O.T, !1, this.U().x.length < 2, _cb.b.p(), null, !0, null);
      n.a(this.C);
      this.e.j.q() && this.e.j.q().a().e(this.O)
    }
    if (this.A) {
      n.a(new _fm.f(new _j.g(this.bl, _cb.cn.$$(_fm.k).a), _u.O.DX, _cb.b.C(), 0, null, null, !1, !1, !1, !1, null));
      var r = "button:hover > .pspAnimatedLogo { transform: scaleX(-1) rotate(180deg); }";
      var f = ".pspAnimatedLogo { transition: .5s; }";
      var t = this.bt();
      if (!t.cssRules.length || t.cssRules[0].cssText !== r) {
        t.insertRule(f, 0);
        t.insertRule(r, 0)
      }
    }
  },
  bG: function (n) {
    if (this.g) {
      var t = this;
      this.g.a(function (i) {
        n(t.bu(i))
      })
    } else
      n(this.bu(null))
  },
  bu: function (n) {
    var t = new _j.q;
    t.c(new _fm.c(_u.O.R, null, this.T));
    t.c(new _fm.i);
    n && t.c(n.e());
    this.x && t.c(new _fm.c(_u.O.X, null, this.x));
    this.u && this.h.a().bo().Enabled && t.c(new _fm.c(_u.O.BP, null, this.u));
    _fm.i.isInstanceOfType(t.d[t.d.length - 1]) || t.c(new _fm.i);
    t.c(new _fm.c(_u.O.o, null, this.X));
    t.c(new _fm.c(_u.O.BD, null, this.bd));
    this.t.c() || t.c(new _fm.c(_u.O.CC, null, this.ba));
    return new _fm.e(t.d)
  },
  bL: function () {
    var n = new _j.q;
    n.c(new _fm.c(_u.O.V, null, this.m));
    this.h.a().T().Enabled && n.c(new _fm.c(_u.O.Cy, null, this.r));
    n.c(new _fm.c(_u.O.Bd, null, this.S));
    return n.j()
  },
  bH: function (n) {
    n(this.bX())
  },
  bX: function () {
    for (var i = this.U(), u = new Array(i.x.length), r, t, n = 0; n < i.x.length; n++) {
      t = i.x[n];
      r = new _j.g(this.bJ(t.e()), _cb.cn.$$(_fm.k).a);
      u.push(new _fm.c(t.bH.CalendarName, null, r))
    }
    return new _fm.e(u)
  },
  U: function () {
    for (var f = new _j.l, u = this.e.j.d(), t = 0; t < u.x.length; ++t)
      for (var r = u.x[t], n = 0; n < r.a().x.length; n++) {
        var i = r.a().x[n];
        i.bH.CanShare && f.a(i)
      }
    return f
  },
  bQ: function (n, t) {
    this.C.bc(this.U().x.length < 2)
  },
  bJ: function (n) {
    var t = this;
    return function () {
      t.v.a(function (t) {
        t.c(n, null, !1)
      })
    }
  },
  bS: function () {
    var n = _cc.a.B() ? "GetCalendarFeedsSatori" : "GetCalendarFeedsCatalogViaButton";
    _a.o.b(_a.a.bz, n);
    var t = this;
    this.y.a(function (n) {
      n.a()
    })
  },
  bM: function () {
    _a.o.b(_a.a.bz, "AddCollegeBasketballSubscription");
    var n = this;
    this.y.a(function (n) {
      n.b()
    });
    _a.C.a(_u.O.CU, 1)
  },
  bR: function () {
    _a.o.b(_a.a.e, "OpenNewBookingCalendarForm");
    var n = this;
    this.Z.a(function (n) {
      n.a(null, null)
    })
  },
  bP: function () {
    var n = this;
    this.bb.a(function (n) {
      n.c(0)
    })
  },
  bT: function () {
    _a.o.b(_a.a.cw, "OpenHolidayCalendarPicker");
    var n = this;
    this.V.a(function (n) {
      n.a()
    })
  },
  bO: function () {
    _a.o.b(_a.a.cw, "OpenPersonalSchedulingPageDialog");
    var t = ".pspAnimatedLogo { position: fixed; margin-top: 180px; margin-left: -100px; opacity: 0; font-size: 500px !important; z-index: 2000; transform: scaleX(-1) rotate(180deg) !important; transition: .5s; }";
    var n = this.bt();
    n.insertRule(t, 0);
    var i = this;
    this.A.a(function (t) {
      t.c(null);
      _j.m.a().d(_a.a.di, "OpenPSPDialog", function () {
        n && n.deleteRule(0)
      })
    })
  },
  bW: function () {
    var n = this;
    this.j.a(function (n) {
      n.g(null)
    })
  },
  bK: function () {
    var n = this;
    this.j.a(function (n) {
      n.h()
    })
  },
  bU: function () {
    var n = _a.b.b(_a.a.b, "CreateEmailMessage", !1, null);
    this.Y.a(null, null, null);
    _a.b.a(n)
  },
  bN: function () {
    var n = this;
    this.W.a(function (t) {
      var i = t.b(n.e.e.e());
      n.e.a.d(i)
    })
  },
  bV: function () {
    var t = _a.b.b(_a.a.b, "OpenCalendarSubscriptionPanel", !0, null);
    var n = this;
    this.j.a(function (i) {
      n.bc.a(function (r) {
        var u = r.c(n.e.j.l(), i);
        n.e.a.d(u);
        _a.b.a(t)
      })
    })
  }
};
_wx.b = function (n, t, i, r, u, f, e, o) {
  this.cB = Function.createDelegate(this, this.dp);
  this.cD = Function.createDelegate(this, this.dt);
  this.cC = Function.createDelegate(this, this.ds);
  this.bX = Function.createDelegate(this, this.cG);
  this.bW = Function.createDelegate(this, this.dr);
  this.bY = Function.createDelegate(this, this.dy);
  this.bV = Function.createDelegate(this, this.dq);
  _wx.b.initializeBase(this, [n, t, i, r, u]);
  var y = _j.n.b(_a.a.b, 2, "CalendarLayoutMouseViewModel:Init");
  this.g = new _j.l;
  this.cI = f;
  this.be = e;
  this.bZ = o;
  var s = 0;
  var v;
  this.g.a((v = new _fm.c(_u.c.CN, null, this.h),
    v.v(_u.O.CV),
    v));
  this.bq = s++;
  this.bn = i;
  this.b.apcl("CurrentCalendarModel", this.bV);
  if (!this.b.a.e()) {
    var a;
    this.g.a((a = new _fm.c(_u.O.DV, null, this.x),
      a.v(_u.O.Bf),
      a));
    this.bv = s++
  }
  var h;
  this.g.a((h = new _fm.c(_u.c.J, null, this.w),
    h.v(_u.O.Bw),
    h));
  this.bu = s++;
  var c;
  this.g.a((c = new _fm.c(_u.O.v, null, this.t),
    c.v(_u.O.Bh),
    c));
  this.bs = s++;
  if (this.G.b) {
    var l;
    this.g.a((l = new _fm.c(_u.O.DF, null, this.G),
      l.v(_u.O.I),
      l));
    this.bm = s++
  }
  this.ca = new _fm.c(_u.c.Cz, null, this.B);
  this.b.b.b(_y.bk, this.bY);
  this.b.b.b(_cc.r.a, this.bW);
  this.b.b.b(_y.Z, this.bX);
  this.R = new _cb.bB(this.B);
  this.R.apcl("SelectedDate", this.cC);
  this.apcl("DisplayedDate", this.cD);
  _j.n.a(y)
};
_wx.b.prototype = {
  bq: 0,
  bv: 0,
  bu: 0,
  bs: 0,
  bm: 0,
  cI: null,
  ca: null,
  g: null,
  R: null,
  bo: null,
  bp: null,
  T: null,
  be: null,
  C: null,
  bn: null,
  S: !1,
  v: function () {
    return this.R
  },
  dB: function (n) {
    if (this.S !== n) {
      this.S = n;
      this.eL("IsCalendarSurfaceFullyLoaded", "CalendarHeadersHidden")
    }
    return n
  },
  bZ: !1,
  cE: function () {
    return this.E.a().c().Enabled
  },
  dn: function () {
    return this.E.a().bD().Enabled
  },
  dA: function (n) {
    if (this.bp !== n) {
      this.bp = n;
      this.eH("CommandBarViewModel")
    }
    return n
  },
  c: function () {
    return _cb.c.prototype.c.call(this)
  },
  i: function (n) {
    if (_cb.c.prototype.c.call(this) !== n) {
      _cb.c.prototype.c.call(this) && _cb.c.prototype.c.call(this).ba(!1);
      _cb.c.prototype.i.call(this, n);
      _cb.c.prototype.c.call(this).ba(!0);
      this.cH();
      this.eH("CanCreateNewEvent")
    }
    return n
  },
  m: function (n) {
    if (this.T !== n) {
      this.T && this.T.d(!1);
      this.T = n;
      this.T.d(!0);
      this.eH("SelectedViewBarItem")
    }
    return n
  },
  dz: function (n) {
    if (this.bo !== n) {
      this.bo = n;
      this.eH("CalendarContextMenuViewModel")
    }
    return n
  },
  V: function () {
    return !this.S || _cb.c.prototype.V.call(this)
  },
  L: function () {
    return this.b.c.b().bH.CalendarViewTypeDesktop
  },
  du: function () {
    _y.lJ.prototype.du.call(this);
    _cb.p.isInstanceOfType(this.c()) && this.c().e(this.fq)
  },
  dx: function () {
    _cb.p.isInstanceOfType(this.c()) && this.c().e(this.fq);
    _y.lJ.prototype.dx.call(this)
  },
  o: function () {
    this.P(!1);
    var n = _j.n.b(_a.a.b, 2, "CalendarLayoutMouse:ActivateView");
    _cb.c.prototype.o.call(this);
    _j.n.a(n);
    this.b.a.e() ? this.I(this.b.c.b().bH.CalendarViewTypeDesktop) : this.be.e().a(_a.W.d(_cc.n.toString(this.b.c.b().bH.CalendarViewTypeDesktop)), null)
  },
  H: function () {
    this.r("SwitchToDayView", new _cc.r(this.b.b));
    this.Y(1)
  },
  bN: function () {
    this.r("SwitchToAgendaView", new _cc.r(this.b.b));
    this.Y(5)
  },
  bO: function () {
    this.r("SwitchToWorkWeekView", new _cc.r(this.b.b));
    this.Y(3)
  },
  bd: function () {
    this.r("SwitchToWeekView", new _cc.r(this.b.b));
    this.Y(2)
  },
  bc: function () {
    this.r("SwitchToMonthView", new _cc.r(this.b.b));
    this.Y(4)
  },
  Y: function (n) {
    this.b.a.e() && n !== 3 ? this.f(n) : this.be.e().a(_a.W.d(_cc.n.toString(n)), null)
  },
  cG: function (n) {
    if (_cc.a.bm() && this.c()) {
      var i = n.a.a;
      var t = n.b.a;
      i === 1 ? this.c().ba(!1) : t === 1 && this.c().ba(!0)
    }
  },
  X: function (n) {
    this.b.c.b().bt(n)
  },
  I: function (n) {
    var t = _j.n.b(_a.a.cB, 2, "CalendarLayoutMouse:ShowPreferredView");
    _cb.c.prototype.I.call(this, n);
    this.dC(n);
    _j.n.a(t)
  },
  f: function (n) {
    if (this.c() && this.c().bh() === n) {
      _j.e.a(this.e(), "CalendarLayoutMouseViewModel no-op: The user probably clicked on an already-current pivot.");
      return
    }
    var t = null;
    switch (n) {
      case 1:
        t = _j.n.b(_a.a.b, 2, "CalendarLayoutMouse:ShowDayView");
        _cb.c.prototype.H.call(this);
        this.m(this.g.x[this.bq]);
        break;
      case 2:
        t = _j.n.b(_a.a.b, 2, "CalendarLayoutMouse:ShowWeekView");
        this.s("WeekViewModel");
        this.m(this.g.x[this.bu]);
        break;
      case 3:
        t = _j.n.b(_a.a.b, 2, "CalendarLayoutMouse:ShowWorkWeekView");
        this.s("WorkWeekViewModel");
        this.m(this.g.x[this.bv]);
        break;
      case 4:
        t = _j.n.b(_a.a.b, 2, "CalendarLayoutMouse:ShowMonthView");
        this.s("MonthAgendaViewModel");
        this.m(this.g.x[this.bs]);
        break;
      case 5:
        if (!this.E.a().fo().Enabled) {
          this.be.e().a(_a.W.d(_cc.n.toString(4)), null);
          return
        }
        t = _j.n.b(_a.a.b, 2, "CalendarLayoutMouse:ShowAgenda");
        this.s("AgendaViewModel");
        this.m(this.g.x[this.bm]);
        break;
      default:
        _j.e.b(this.e(), "Unsupported view type in CalendarLayoutMouseViewModel: {0}", _cc.n.toString(n));
        break
    }
    t && _j.n.a(t)
  },
  cq: function (n, t) {
    return new _cb.M(n, _y.e.e(), t, this.b.d)
  },
  eJ: function () {
    this.b.b.c(_y.bk, this.bY);
    this.b.rpcl("CurrentCalendarModel", this.bV);
    this.b.b.c(_cc.r.a, this.bW);
    this.b.b.c(_y.Z, this.bX);
    _cb.c.prototype.eJ.call(this)
  },
  dq: function (n, t) {
    this.cF()
  },
  cF: function () {
    this.bn && this.S && this.bn.bo().a(this.cB)
  },
  dp: function (n) {
    var i = n.a(this);
    if (!i) {
      _j.e.b(this.e(), "CreateNewCalendarCommandProvider is returning null meaning the calendar model is not expected, we will skip here.");
      return
    }
    if (this.C) {
      for (var t = 0; t < this.C.a().x.length; t++)
        this.U.p(this.C.a().x[t], !0);
      this.C.dispose()
    }
    this.C = i;
    this.dA(this.C.c());
    this.dz(this.C.b())
  },
  cH: function () {
    if (this.c()) {
      this.R.f = this.c().be();
      this.R.e(this.c().bf())
    }
  },
  dt: function (n, t) {
    this.cH()
  },
  dC: function (n) {
    switch (n) {
      case 1:
        this.m(this.g.x[this.bq]);
        break;
      case 3:
        this.m(this.g.x[this.bv]);
        break;
      case 2:
        this.m(this.g.x[this.bu]);
        break;
      case 4:
        this.m(this.g.x[this.bs]);
        break;
      case 5:
        this.m(this.g.x[this.bm]);
        break
    }
  },
  dy: function (n) {
    if (n.b === 1) {
      var t = this.b.d;
      t.q(n.a, !1)
    }
  },
  ds: function (n, t) {
    this.c().bj(this.R.b)
  },
  dr: function (n) {
    if (!this.S) {
      this.dB(!0);
      this.cF()
    }
  }
};
_wx.l = function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
  this.f = n;
  this.q = t;
  this.o = i;
  this.c = r;
  this.k = u;
  this.g = f;
  this.h = e;
  this.s = o;
  this.b = a;
  this.r = s;
  this.d = h;
  this.l = c;
  this.e = l;
  this.j = y;
  this.i = v;
  this.m = p;
  this.p = w;
  this.n = b
};
_wx.l.prototype = {
  f: null,
  q: null,
  o: null,
  k: null,
  r: null,
  d: null,
  i: null,
  j: null,
  m: null,
  p: null,
  e: null,
  l: null,
  b: null,
  h: null,
  g: null,
  s: null,
  c: null,
  n: null,
  a: function (n) {
    return new _wx.h(n, this.f, this.q, this.o, this.c, this.k, this.g, this.h, this.s, this.r, this.d, this.l, this.e, this.b, this.i, this.j, this.m, this.p, this.n)
  }
};
_wx.c = function (n, t, i, r) {
  this.z = Function.createDelegate(this, this.R);
  this.y = Function.createDelegate(this, this.Q);
  _wx.c.initializeBase(this, [n, t, i, r]);
  var u = this.c.c.b().bH.CalendarSidePanelMonthPickerCount;
  u ? this.c.M(u) : this.c.M(2);
  t.apcl("IsModuleSidePanelExpanded", this.y);
  t.apcl("SidePanelMonthPickerCount", this.z)
};
_wx.c.prototype = {
  P: function () {
    return !!this.b && this.b.cE()
  },
  h: function () {
    return this.c.r ? _wx.c.b : _wx.c.a
  },
  O: function () {
    return this.g() ? this.g().bG : null
  },
  R: function (n, t) {
    if (!this.i.e()) {
      this.c.c.b().bs(this.c.C);
      _h.f.b(this.c.c.b().c(), _a.g.a)
    }
  },
  Q: function (n, t) {
    this.eH("SidePanelWidth");
    if (!this.i.e()) {
      this.c.c.b().br(this.c.r);
      _h.f.b(this.c.c.b().c(), _a.g.a)
    }
  }
};
_wx.i = function (n, t, i) {
  this.e = Function.createDelegate(this, this.f);
  _wx.i.initializeBase(this, [n]);
  this.d = t;
  this.b = i
};
_wx.i.prototype = {
  d: null,
  a: null,
  c: !1,
  b: null,
  g: function (n) {
    if (this.c !== n) {
      this.c = n;
      this.by("IsHeaderInTwoLineMode")
    }
    return n
  },
  bz: function () {
    if (this.a) {
      this.a.dispose();
      this.a = null
    }
    _j.c.prototype.bz.call(this)
  },
  P: function () {
    var n = _j.n.b(this.I(), 2, "CalendarNavigationHeaderMouseView:OnFirstActivate");
    _j.c.prototype.P.call(this);
    this.b.b(_cc.r.a, this.e);
    _j.n.a(n)
  },
  G: function () {
    var n = _j.n.b(this.I(), 2, "CalendarNavigationHeaderMouseView:OnActivate");
    _j.c.prototype.G.call(this);
    _j.n.a(n)
  },
  f: function (n) {
    if (this.B && this.d) {
      var t = this;
      this.d.a(function (n) {
        var i = t.V();
        var r = t.B.a("weatherContainer");
        t.a = n.a(r, "DisplayedDateString", i, function () {
          return i.c().bf().d()
        }, !0)
      })
    }
    this.b.c(_cc.r.a, this.e)
  }
};
_wx.e = function (n, t, i) {
  this.l = Function.createDelegate(this, this.s);
  this.k = Function.createDelegate(this, this.r);
  _wx.e.initializeBase(this, [n]);
  this.j = t;
  this.e = i;
  this.f = new _j.g(this.k, _a.a.b);
  this.g = new _j.g(this.l, _a.a.b)
};
_wx.e.a = function (n, t) {
  switch (n) {
    case 1:
      return t ? "TimeStripSwipeDay" : "TimeStripClickDay";
    case 2:
      return t ? "TimeStripSwipeMonth" : "TimeStripClickMonth";
    case 3:
      return t ? "TimeStripSwipeWeek" : "TimeStripClickWeek";
    default:
      return ""
  }
};
_wx.e.prototype = {
  j: null,
  f: null,
  e: null,
  g: null,
  b: 0,
  a: null,
  i: !0,
  h: function (n) {
    if (n !== this.b) {
      this.b = n;
      this.t();
      this.bX(_wx.e.b)
    }
    return n
  },
  d: !1,
  p: function () {
    var n = this.m(!0);
    return String.format(_u.c.I, n)
  },
  q: function () {
    var n = this.m(!1);
    return String.format(_u.c.I, n)
  },
  c: function (n) {
    if (!n || _a.d.c(n, this.a))
      return n;
    this.a = n;
    this.bA("SelectedDate", "DisplayedDateString");
    return n
  },
  o: function () {
    var n;
    switch (this.b) {
      case 1:
        n = this.d ? this.a.b(7) : this.a.b(3);
        break;
      case 2:
        n = this.a.b(2);
        break;
      case 3:
        var t = _a.d.e(this.a);
        var r = t.c(6);
        n = _a.d.Q(t, r);
        break;
      case 4:
        n = _a.d.cb(this.a, this.a.c(2), !0);
        break;
      default:
        throw Error.notImplemented("Unexpected TimeStrip mode");
    }
    if (this.j.a().bH.ShowWeekNumbers && this.b === 3) {
      var i = _a.d.e(this.a).c(6);
      return _j.h.c(_u.O.Cp, n, _a.d.bv(i))
    }
    return n
  },
  P: function () {
    var n = _j.n.b(this.I(), 2, "CalendarDateRangeNavigationView:OnFirstActivate");
    _j.c.prototype.P.call(this);
    _j.n.a(n)
  },
  G: function () {
    var n = _j.n.b(this.I(), 2, "CalendarDateRangeNavigationView:OnActivate");
    _j.c.prototype.G.call(this);
    _j.n.a(n)
  },
  H: function () {
    _j.c.prototype.H.call(this);
    this.B && this.b === 4 && this.B.c(this.B.a("CurrentDateLabel"))
  },
  t: function () {
    var n = "";
    switch (this.b) {
      case 1:
        n = _u.O.k;
        break;
      case 3:
        n = _u.O.BC;
        break;
      case 2:
        n = _u.O.q;
        break
    }
    this.Q(n)
  },
  r: function () {
    this.n(1)
  },
  m: function (n) {
    var t;
    var i = n ? _u.c.Dk : _u.c.DB;
    switch (this.b) {
      case 1:
        t = i + _u.c.CN;
        break;
      case 3:
        t = i + _u.c.J;
        break;
      case 2:
        t = i + _u.c.CI;
        break;
      case 4:
        t = i + _u.c.Dm;
        break;
      default:
        throw Error.notImplemented("Unexpected TimeStrip mode");
    }
    return t
  },
  s: function () {
    this.n(-1)
  },
  n: function (n) {
    _cb.bK.isInstanceOfType(this.V()) && this.V().a().f.a(_a.a.b, _wx.e.a(this.b), !0, new _cc.r(this.e), null);
    var t = null;
    switch (this.b) {
      case 1:
        this.c(this.a.c(n));
        break;
      case 2:
        t = this.a.s(n);
        this.c(new _a.d(t.g(), t.f(), 1, this.a.m(), this.a.q(), this.a.v()));
        break;
      case 3:
        t = _a.d.e(this.a.c(7 * n));
        this.c(new _a.d(t.g(), t.f(), t.j(), this.a.m(), this.a.q(), this.a.v()));
        break;
      case 4:
        t = this.a.c(3 * n);
        this.c(new _a.d(t.g(), t.f(), t.j(), this.a.m(), this.a.q(), this.a.v()));
        break;
      default:
        throw Error.argumentOutOfRange("mode", this.b, "TimeStripMode should take the value Day or Month before any calls to AddDate.");
    }
  }
};
_wx.d = function (n, t, i, r, u, f, e, o, s) {
  this.ck = Function.createDelegate(this, this.cH);
  _wx.d.initializeBase(this, [n, t, i, r, u, f, e, o]);
  this.bR = s;
  this.bN = i.a().bb().Enabled
};
_wx.d.prototype = {
  bR: null,
  l: 1,
  bc: !1,
  bP: null,
  bN: !1,
  cF: function () {
    return this.a && this.cp() && !this.bd
  },
  cJ: function (n) {
    if (this.bc !== n) {
      this.bc = n;
      this.by("ItemsLoadedNotificationEnabled")
    }
    return n
  },
  cK: function (n) {
    if (this.bP !== n) {
      this.bP = n;
      this.by("ItemsLoadedNotificationMessage")
    }
    return n
  },
  bQ: function (n) {
    var t = Math.max(n, 1);
    if (t !== this.l) {
      this.l = t;
      this.bA("MonthPickerCount", "MonthPickerListHeight")
    }
    return n
  },
  cM: function (n) {
    if (n !== this.l * 243) {
      n <= this.g.z.offsetHeight - 100 && this.bQ(Math.floor(n / 243));
      this.by("MonthPickerListHeight")
    }
    return n
  },
  cG: function () {
    return this.a ? _u.O.CT : _u.O.DQ
  },
  bS: function () {
    _n.bL.prototype.bS.call(this);
    this.by("IsExpandButtonHidden")
  },
  bu: function () {
    var t = _j.n.b(_a.a.b, 2, "CalendarSidePanelMouseView:LoadChildControls");
    _cb.g.prototype.bu.call(this);
    var n = _j.k.l(this.g.z, !1) - 100;
    this.l * 243 > n && this.bQ(Math.floor(n / 243));
    _j.n.a(t)
  },
  x: function () {
    this.bA("SidePanelMainViewType", "MonthPickerCount")
  },
  w: function () {
    this.bX(["IsExpanded", "IsExpandButtonHidden", "IsDefaultViewHidden", "IsGroupsViewHidden", "NavigationPaneButtonAriaLabel"])
  },
  cH: function (n) {
    if (this.o.b) {
      this.o.a();
      var t = this;
      this.bR.c("CalendarSearchBox", function () {
        n.R()
      }, null)
    }
  }
};
_wx.f = function (n) {
  this.c = Function.createDelegate(this, this.d);
  _wx.f.initializeBase(this, [n]);
  this.b = new _j.g(this.c, _a.a.dt)
};
_wx.f.prototype = {
  b: null,
  a: null,
  d: function () {
    this.a(this.B.a("SearchBox"))
  }
};
_wx.a = function () {};
_wx.a.$$cctor = function () {
  _wx.a._I()
};
// shannon - whole calendar, only one appointment
_wx.a.ei = function () {
  var n = window.document.createElement("DIV");
  n.innerHTML = "<div>  <div>  </div>  </div><div><div></div></div><div> <div class='_wx_4'>  <div class='_wx_2'> <div class='_wx_3'></div> </div> </div> </div><div> <span class='_wx_c'></span> </div><div> <span class='_wx_b ms-font-weight-semilight'> <span></span><br/> <span></span> <span></span> <a></a> </span> </div><div> <div></div> </div><div> <div class='_wx_r'></div>  <div class='_wx_u'></div> <div class='_wx_u'></div> </div><div> <div class='_wx_9'></div> </div><div>   <div autoid=\"_wx_0\" class='_wx_j'></div> </div><div> <div class='_wx_k ms-border-color-neutralLight'></div> </div><div> <div class='_wx_q'>  <div></div> <div class='_wx_e'> <div> <div class='_wx_s'></div> </div> <div></div>  <div> <div></div> </div> <div> <div></div> <div class='_wx_p ms-border-color-neutralTertiaryAlt'></div> <div class='_wx_f'> <div></div> <div class='_wx_h'></div> </div> </div> </div> </div>  <div></div>  <div></div> <div></div> </div><div> <button type='button' class='_wx_w'></button> <button type='button' class='_wx_w'></button> <button autoid=\"_wx_1\" type='button'></button> <button type='button' class='_wx_y'></button> </div><div> <div class='_wx_J ms-bg-color-white'></div> </div><div>  <div class='_wx_E'></div>  </div><div> <span></span>  </div><div> <div class='_wx_N'></div> </div><div> <div autoid=\"_wx_3\" class='_wx_N'></div> </div><div> <span></span> <span></span> <span autoid=\"_wx_4\" class='_wx_L'></span>  </div><div> <div class='_wx_K ms-font-m ms-font-color-neutralSecondary'></div> </div><div> <div class='_wx_z'> <div class='_wx_A _wx_B'></div> <div class='_wx_B'></div> <div class='_wx_O'>  <div class='_wx_I'></div> <div class='_wx_P'> <div autoid=\"_wx_2\" class='_wx_C'></div> <div class='_wx_H ms-font-l ms-font-weight-semilight ms-font-color-neutralPrimary'></div> </div> </div> </div>    </div><div> <div autoid=\"_wx_5\" class='_wx_R'> <div></div> <div></div> </div>  <div></div> </div><div> <div class='_wx_71'></div> </div><div> <button type='button' class='_wx_X fullWidth ms-fcl-ts'></button> </div><div> <div></div> <div class='_wx_W ms-bgc-tl'></div> </div><div> <div></div>  <button autoid=\"_wx_6\" type='button' class='_wx_Z _wx_Y hiddenOverflow absoluteposition'></button> </div><div> <div class='_wx_51'> <div class='_wx_31 absoluteposition'></div> <div class='_wx_41 absoluteBottom fullWidth ms-bcl-nl'> <div></div> </div> </div> </div><div> <div class='_wx_V absoluteBottom fullWidth ms-fwt-r'></div> <div>  <div></div> <div class='_wx_61'> <div class='absoluteposition'></div> <div></div> <div></div>  </div>  <div class='absoluteBottom fullWidth'></div> </div> </div><div> <span class='_wx_b1'></span> <span class='_wx_a1 ms-font-weight-regular'></span>  </div><div> <div class='_wx_c1'> <button autoid=\"_wx_7\" type='button' class='_wx_81 ms-font-color-themePrimary'></button> </div> <button type='button' class='_wx_d1'></button> </div><div> <div class='_wx_h1'> <div></div> </div> <div class='_wx_j1 ms-bg-color-neutralLight'></div> </div><div> <div class='_wx_g1'></div> <div class='_wx_i1'> <div></div> </div> <a class='_wx_k1 ms-font-s ms-font-color-themePrimary'></a> </div><div>  <div>  </div>   <div></div>  <div></div> </div><div><div class='_wx_m1'></div></div><div> <div class='_wx_q1'> <div class='ms-border-color-neutralLight'></div> <div class='_wx_l1 ms-border-color-neutralLight'> <div class='_wx_y1'></div> <div class='_wx_o1'>  <div autoid=\"_wx_8\" class='_wx_n1'></div> </div> </div> </div> </div><div> <div class='_wx_z1 ms-border-color-neutralLight'></div> <div class='_wx_A1'></div> </div><div> <div class='_wx_Q1 ms-border-color-neutralLight'><div class='_wx_Z1'></div></div> <div class='_wx_R1 ms-border-color-neutralLight'><div class='_wx_Z1'></div></div> <div class='_wx_S1 ms-border-color-neutralLight'><div class='_wx_Z1'></div></div> <div class='_wx_T1 ms-border-color-neutralLight'><div class='_wx_Z1'></div></div> <div class='_wx_U1 ms-border-color-neutralLight'><div class='_wx_Z1'></div></div> <div class='_wx_V1 ms-border-color-neutralLight'><div class='_wx_Z1'></div></div> </div><div>  <div class='_wx_X1 ms-font-weight-regular ms-font-color-neutralTertiary _wx_Y1'></div> <div class='_wx_W1'> <div AriaRole=\"rowheader\" class='_wx_E1 ms-font-weight-semibold ms-font-color-neutralSecondary'> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_G1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_H1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_I1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_J1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_K1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_L1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> <div class='_wx_F1 ms-bg-color-neutralLighterAlt _wx_M1'><span class='_wx_N1 ms-font-m ms-font-weight-semilight ms-font-color-neutralPrimary'></span></div> </div> <div class='_wx_O1'>  <div autoid=\"_wx_9\" class='_wx_P1 _wx_Q1'></div> <div autoid=\"_wx_a\" class='_wx_P1 _wx_R1'></div> <div autoid=\"_wx_b\" class='_wx_P1 _wx_S1'></div> <div autoid=\"_wx_c\" class='_wx_P1 _wx_T1'></div> <div autoid=\"_wx_d\" class='_wx_P1 _wx_U1'></div> <div autoid=\"_wx_e\" class='_wx_P1 _wx_V1'></div>  <div></div>  <div></div> </div> </div> </div><div>  <div class='_wx_12'></div> </div><div> <div class='_wx_02'></div> </div><div> <div class='_wx_42 ms-border-color-neutralLight _wx_72 _wx_62 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_42 ms-border-color-neutralLight _wx_82 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_42 ms-border-color-neutralLight _wx_92 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_42 ms-border-color-neutralLight _wx_a2 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_42 ms-border-color-neutralLight _wx_b2 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_42 ms-border-color-neutralLight _wx_c2 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_42 ms-border-color-neutralLight _wx_d2 ms-bg-color-neutralLighter-hover'></div> <div class='_wx_e2'></div> </div>";
  _j.i.a().appendChild(n);
  return n
};
_wx.a.fg = function (n) {
  return n.cd
};
_wx.a.r = function (n) {
  return _cb.o.isInstanceOfType(n) ? n.Z : null
};
_wx.a.bn = function (n) {
  return n.bE()
};
_wx.a.c = function (n) {
  return n.X
};
_wx.a.bV = function (n) {
  return _cb.C.isInstanceOfType(n) ? n.g : null
};
_wx.a.gA = function (n) {
  return _cb.C.isInstanceOfType(n) ? n.f : null
};
_wx.a.hf = function (n) {
  return n.d
};
_wx.a.X = function (n) {
  return n.bU()
};
_wx.a.fi = function (n) {
  return n.dD
};
_wx.a.eF = function (n) {
  return n.bl
};
_wx.a.fb = function (n) {
  return n.bm
};
_wx.a.du = function (n) {
  return n.r
};
_wx.a.fc = function (n) {
  return n.bS
};
_wx.a.hc = function (n) {
  return n.a
};
_wx.a.br = function (n) {
  return n.bg
};
_wx.a.bL = function (n) {
  return n.w
};
_wx.a.bB = function (n) {
  return n.dh
};
_wx.a.fP = function (n) {
  return n.b()
};
_wx.a.i = function (n) {
  return _cb.e.isInstanceOfType(n) ? n.S : null
};
_wx.a.C = function (n) {
  return n.h()
};
_wx.a.bM = function (n) {
  return n.j
};
_wx.a.bE = function (n) {
  return n.d
};
_wx.a.bz = function (n) {
  return n.a()
};
_wx.a.dq = function (n) {
  return _cb.u.isInstanceOfType(n) ? n.s : null
};
_wx.a.db = function (n) {
  return n.s
};
_wx.a.bq = function (n) {
  return _cb.u.isInstanceOfType(n) ? n.o : null
};
_wx.a.dr = function (n) {
  return _cb.u.isInstanceOfType(n) ? n.t : null
};
_wx.a.fa = function (n) {
  return n.Y
};
_wx.a.cQ = function (n) {
  return n.m
};
_wx.a.bW = function (n) {
  return n.E()
};
_wx.a.eL = function (n) {
  return n.cc
};
_wx.a.cK = function (n) {
  return n.bn
};
_wx.a.Z = function (n) {
  return n.l
};
_wx.a.bm = function (n) {
  return n.q
};
_wx.a.ff = function (n) {
  return n.dC
};
_wx.a.v = function (n) {
  return n.k()
};
_wx.a.s = function (n) {
  return n.k
};
_wx.a.cz = function (n) {
  return n.cv
};
_wx.a.cL = function (n) {
  return n.cj
};
_wx.a.cw = function (n) {
  return n.bG
};
_wx.a.bI = function (n) {
  return n.b
};
_wx.a.cB = function (n) {
  return n.V
};
_wx.a.cx = function (n) {
  return n.bh()
};
_wx.a.g = function (n) {
  return n.V()
};
_wx.a.cy = function (n) {
  return _cb.e.isInstanceOfType(n) ? n.dS() : null
};
_wx.a.bD = function (n) {
  return n.e
};
_wx.a.cC = function (n) {
  return _cb.e.isInstanceOfType(n) ? n.X : null
};
_wx.a.fw = function (n) {
  return n.Z
};
_wx.a.ba = function (n) {
  return n.C
};
_wx.a.dF = function (n) {
  return _wx.h.isInstanceOfType(n) ? n.Q : null
};
_wx.a.dD = function (n) {
  return n.d
};
_wx.a.dA = function (n) {
  return n.b
};
_wx.a.dC = function (n) {
  return n.c
};
_wx.a.dB = function (n) {
  return n.a
};
_wx.a.dE = function (n) {
  return _wx.h.isInstanceOfType(n) ? n.P : null
};
_wx.a.hu = function (n) {
  return n.bp
};
_wx.a.gG = function (n) {
  return _cb.I.isInstanceOfType(n) ? n.n : null
};
_wx.a.bo = function (n) {
  return n.b
};
_wx.a.k = function (n) {
  return n.r
};
_wx.a.bs = function (n) {
  return n.c()
};
_wx.a.eZ = function (n) {
  return _cb.br.isInstanceOfType(n) ? n.a : null
};
_wx.a.eI = function (n) {
  return n.bR()
};
_wx.a.cW = function (n) {
  return n.a()
};
_wx.a.fz = function (n) {
  return n.A
};
_wx.a.fG = function (n) {
  return n.q
};
_wx.a.ch = function (n) {
  return n.E()
};
_wx.a.dG = function (n) {
  return n.bo
};
_wx.a.bf = function (n) {
  return n.q()
};
_wx.a.hy = function (n) {
  return n.cE()
};
_wx.a.fQ = function (n) {
  return n.d()
};
_wx.a.fB = function (n) {
  return n.B
};
_wx.a.eO = function (n) {
  return n.a
};
_wx.a.ik = function (n) {
  return n.e()
};
_wx.a.dH = function (n) {
  return n.S
};
_wx.a.hw = function (n) {
  return n.bZ
};
_wx.a.fC = function (n) {
  return n.N
};
_wx.a.hx = function (n) {
  return _wx.b.isInstanceOfType(n) ? n.dn() : null
};
_wx.a.gH = function (n) {
  return n.bW()
};
_wx.a.ht = function (n) {
  return n.V()
};
_wx.a.hs = function (n) {
  return 40
};
_wx.a.eN = function (n) {
  return n.K
};
_wx.a.gd = function (n) {
  return n.b()
};
_wx.a.fA = function (n) {
  return n.D
};
_wx.a.fR = function (n) {
  return n.m()
};
_wx.a.fE = function (n) {
  return n.W
};
_wx.a.id = function (n) {
  return n.b()
};
_wx.a.fx = function (n) {
  return n.K
};
_wx.a.fq = function (n) {
  return n.b
};
_wx.a.eD = function (n) {
  return n.e
};
_wx.a.dX = function (n) {
  return n.d()
};
_wx.a.y = function (n) {
  return n.c()
};
_wx.a.ii = function (n) {
  return n.e()
};
_wx.a.ie = function (n) {
  return n.a()
};
_wx.a.ig = function (n) {
  return n.b()
};
_wx.a.ih = function (n) {
  return n.c()
};
_wx.a.bJ = function (n) {
  return n.p
};
_wx.a.ib = function (n) {
  return n.y
};
_wx.a.hZ = function (n) {
  return n.p
};
_wx.a.ia = function (n) {
  return n.r
};
_wx.a.fF = function (n) {
  return n.O
};
_wx.a.hG = function (n) {
  return n.g
};
_wx.a.hJ = function (n) {
  return n.q()
};
_wx.a.dI = function (n) {
  return n.b === 4
};
_wx.a.hF = function (n) {
  return n.f
};
_wx.a.hI = function (n) {
  return n.p()
};
_wx.a.hE = function (n) {
  return n.o()
};
_wx.a.bp = function (n) {
  return n.v()
};
_wx.a.cS = function (n) {
  return n.i
};
_wx.a.dU = function (n) {
  return n.b()
};
_wx.a.co = function (n) {
  return n.z
};
_wx.a.dJ = function (n) {
  return _wx.e.isInstanceOfType(n) ? n.i : null
};
_wx.a.hH = function (n) {
  return _u.c.Du
};
_wx.a.by = function (n) {
  return n.k
};
_wx.a.bh = function (n) {
  return n.o()
};
_wx.a.p = function (n) {
  return n.j
};
_wx.a.bx = function (n) {
  return n.r
};
_wx.a.ep = function (n) {
  return n.s
};
_wx.a.er = function (n) {
  return n.p
};
_wx.a.cp = function (n) {
  return n.bG()
};
_wx.a.eq = function (n) {
  return n.A
};
_wx.a.cn = function (n) {
  return n.b
};
_wx.a.fH = function (n) {
  return n.Q
};
_wx.a.bA = function (n) {
  return n.bf()
};
_wx.a.hK = function (n) {
  return n.a
};
_wx.a.fD = function (n) {
  return n.bG()
};
_wx.a.hN = function (n) {
  return n.c
};
_wx.a.fy = function (n) {
  return n.U
};
_wx.a.hA = function (n) {
  return n.g
};
_wx.a.hz = function (n) {
  return n.T
};
_wx.a.bi = function (n) {
  return n.X
};
_wx.a.cf = function (n) {
  return _fce.a.isInstanceOfType(n) ? n.dI() : null
};
_wx.a.cg = function (n) {
  return _fce.a.isInstanceOfType(n) ? n.dJ() : null
};
_wx.a.hv = function (n) {
  return n.ca
};
_wx.a.j = function (n) {
  return n.c
};
_wx.a.di = function (n) {
  return n.a
};
_wx.a.eQ = function (n) {
  return n.C
};
_wx.a.dL = function (n) {
  return _wx.d.isInstanceOfType(n) ? n.l : null
};
_wx.a.Y = function (n) {
  return n.g()
};
_wx.a.eH = function (n) {
  return n.be()
};
_wx.a.dk = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.b() : null
};
_wx.a.eP = function (n) {
  return n.N
};
_wx.a.dK = function (n) {
  return _wx.d.isInstanceOfType(n) ? n.bc : null
};
_wx.a.eK = function (n) {
  return n.hm
};
_wx.a.fL = function (n) {
  return n.f
};
_wx.a.dj = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.f : null
};
_wx.a.hD = function (n) {
  return n.h()
};
_wx.a.fK = function (n) {
  return n.t()
};
_wx.a.fN = function (n) {
  return n.m
};
_wx.a.hC = function (n) {
  return n.P()
};
_wx.a.bt = function (n) {
  return n.O()
};
_wx.a.ft = function (n) {
  return n.r()
};
_wx.a.fs = function (n) {
  return n.q()
};
_wx.a.fr = function (n) {
  return n.c
};
_wx.a.fu = function (n) {
  return n.d
};
_wx.a.hW = function (n) {
  return _wx.f.isInstanceOfType(n) ? n.b : null
};
_wx.a.gN = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.cs() : null
};
_wx.a.gO = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.ct() : null
};
_wx.a.hS = function (n) {
  return _wx.d.isInstanceOfType(n) ? n.ck : null
};
_wx.a.hP = function (n) {
  return _wx.d.isInstanceOfType(n) ? n.cF() : null
};
_wx.a.dl = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.o : null
};
_wx.a.dM = function (n) {
  return _wx.d.isInstanceOfType(n) ? n.cG() : null
};
_wx.a.fJ = function (n) {
  return n.w()
};
_wx.a.hR = function (n) {
  return _wx.d.isInstanceOfType(n) ? n.l * 243 : null
};
_wx.a.ew = function (n) {
  return n.c
};
_wx.a.eu = function (n) {
  return n.b
};
_wx.a.gP = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.s : null
};
_wx.a.ex = function (n) {
  return n.g
};
_wx.a.ev = function (n) {
  return n.k
};
_wx.a.dh = function (n) {
  return _cb.g.isInstanceOfType(n) ? n.cb() : null
};
_wx.a.gJ = function (n) {
  return n.cc()
};
_wx.a.hQ = function (n) {
  return n.bN
};
_wx.a.gI = function (n) {
  return n.ca()
};
_wx.a.gM = function (n) {
  return n.cf()
};
_wx.a.gK = function (n) {
  return n.bs()
};
_wx.a.gL = function (n) {
  return n.cd()
};
_wx.a.fM = function (n) {
  return _cb.Y.isInstanceOfType(n) ? n.h() : null
};
_wx.a.ej = function (n) {
  return n.v()
};
_wx.a.cA = function (n) {
  return n.cg
};
_wx.a.bG = function (n) {
  return n.d
};
_wx.a.cr = function (n) {
  return n.a
};
_wx.a.eU = function (n) {
  return n.f
};
_wx.a.eX = function (n) {
  return n.b
};
_wx.a.cs = function (n) {
  return n.c
};
_wx.a.eW = function (n) {
  return n.j()
};
_wx.a.eV = function (n) {
  return n.l
};
_wx.a.cM = function (n) {
  return n.cH
};
_wx.a.cG = function (n) {
  return n.cF
};
_wx.a.cD = function (n) {
  return n.dk
};
_wx.a.cH = function (n) {
  return n.dp
};
_wx.a.cF = function (n) {
  return n.dX
};
_wx.a.cI = function (n) {
  return n.dZ
};
_wx.a.cJ = function (n) {
  return n.ea
};
_wx.a.cV = function (n) {
  return n.bR()
};
_wx.a.cU = function (n) {
  return n.cq
};
_wx.a.B = function (n) {
  return _cb.e.isInstanceOfType(n) ? n.cn() : null
};
_wx.a.fe = function (n) {
  return n.W
};
_wx.a.fd = function (n) {
  return n.bp
};
_wx.a.fl = function (n) {
  return n.dF
};
_wx.a.fj = function (n) {
  return n.ej
};
_wx.a.eG = function (n) {
  return n.cb
};
_wx.a.bl = function (n) {
  return n.ck
};
_wx.a.fk = function (n) {
  return n.ek
};
_wx.a.fh = function (n) {
  return n.bc
};
_wx.a.gU = function (n) {
  return n.f
};
_wx.a.eJ = function (n) {
  return n.cE
};
_wx.a.fW = function (n) {
  return n.c
};
_wx.a.fT = function (n) {
  return n.T()
};
_wx.a.M = function (n) {
  return n.d
};
_wx.a.hl = function (n) {
  return n.e
};
_wx.a.cE = function (n) {
  return n.bw
};
_wx.a.cX = function (n) {
  return n.b
};
_wx.a.cv = function (n) {
  return n.b
};
_wx.a.fS = function (n) {
  return n.bU()
};
_wx.a.hm = function (n) {
  return n.u
};
_wx.a.hj = function (n) {
  return n.r
};
_wx.a.eE = function (n) {
  return n.bt()
};
_wx.a.fX = function (n) {
  return n.a[0]
};
_wx.a.P = function (n) {
  return n.q
};
_wx.a.l = function (n) {
  return n.i
};
_wx.a.fY = function (n) {
  return n.a[1]
};
_wx.a.fZ = function (n) {
  return n.a[2]
};
_wx.a.ga = function (n) {
  return n.a[3]
};
_wx.a.gb = function (n) {
  return n.a[4]
};
_wx.a.gc = function (n) {
  return n.a[5]
};
_wx.a.gf = function (n) {
  return n.b
};
_wx.a.ge = function (n) {
  return n.a
};
_wx.a.gt = function (n) {
  return n.f
};
_wx.a.gu = function (n) {
  return n.o
};
_wx.a.bK = function (n) {
  return n.i
};
_wx.a.gr = function (n) {
  return n.m
};
_wx.a.gn = function (n) {
  return n.e
};
_wx.a.gp = function (n) {
  return 4
};
_wx.a.gq = function (n) {
  return n.w
};
_wx.a.gs = function (n) {
  return n.y
};
_wx.a.go = function (n) {
  return n.v
};
_wx.a.gg = function (n) {
  return n.c[0]
};
_wx.a.D = function (n) {
  return n.z
};
_wx.a.E = function (n) {
  return n.A
};
_wx.a.G = function (n) {
  return n.f
};
_wx.a.O = function (n) {
  return n.k
};
_wx.a.gh = function (n) {
  return n.c[1]
};
_wx.a.gi = function (n) {
  return n.c[2]
};
_wx.a.gj = function (n) {
  return n.c[3]
};
_wx.a.gk = function (n) {
  return n.c[4]
};
_wx.a.gl = function (n) {
  return n.c[5]
};
_wx.a.gm = function (n) {
  return n.c[6]
};
_wx.a.hi = function (n, t) {
  n.k(t)
};
_wx.a.dy = function (n, t) {
  n.h(t)
};
_wx.a.dz = function (n, t) {
  n.e = t
};
_wx.a.hh = function (n, t) {
  n.j = t
};
_wx.a.gB = function (n, t) {
  n.h(t)
};
_wx.a.hg = function (n, t) {
  n.g(t)
};
_wx.a.dv = function (n, t) {
  n.t(t)
};
_wx.a.dw = function (n, t) {
  n.cp(t)
};
_wx.a.bj = function (n, t) {
  n.T(t)
};
_wx.a.bk = function (n, t) {
  n.dC(t)
};
_wx.a.fm = function (n, t) {
  n.cO(t)
};
_wx.a.dx = function (n, t) {
  n.m(t)
};
_wx.a.fn = function (n, t) {
  n.gb(t)
};
_wx.a.hd = function (n, t) {
  n.d(t)
};
_wx.a.he = function (n, t) {
  n.h(t)
};
_wx.a.cN = function (n, t) {
  n.dz(t)
};
_wx.a.bN = function (n, t) {
  n.bJ(t)
};
_wx.a.ca = function (n, t) {
  n.M = t
};
_wx.a.cY = function (n, t) {
  n.p = t
};
_wx.a.gy = function (n, t) {
  n.bP = t
};
_wx.a.bF = function (n, t) {
  n.z(t)
};
_wx.a.bO = function (n, t) {
  n.bU(t)
};
_wx.a.da = function (n, t) {
  n.bv = t
};
_wx.a.cb = function (n, t) {
  n.cx(t)
};
_wx.a.ds = function (n, t) {
  n.cx(t)
};
_wx.a.dc = function (n, t) {
  n.K(t)
};
_wx.a.gx = function (n, t) {
  n.O = t
};
_wx.a.bP = function (n, t) {
  n.q = t
};
_wx.a.cZ = function (n, t) {
  n.bu = t
};
_wx.a.V = function (n, t) {
  n.bl(t)
};
_wx.a.cR = function (n, t) {
  n.n(t)
};
_wx.a.bY = function (n, t) {
  n.bg(t)
};
_wx.a.bX = function (n, t) {
  n.r = t
};
_wx.a.dt = function (n, t) {
  n.bs(t)
};
_wx.a.dg = function (n, t) {
  n.ca(t)
};
_wx.a.df = function (n, t) {
  n.h = t
};
_wx.a.x = function (n, t) {
  n.c(t)
};
_wx.a.fp = function (n, t) {
  n.hH(t)
};
_wx.a.w = function (n, t) {
  n.j(t)
};
_wx.a.be = function (n, t) {
  n.q(t)
};
_wx.a.bQ = function (n, t) {
  n.c = t
};
_wx.a.bZ = function (n, t) {
  n.k(t)
};
_wx.a.f = function (n, t) {
  n.l = t
};
_wx.a.bS = function (n, t) {
  n.c = t
};
_wx.a.bT = function (n, t) {
  n.d = t
};
_wx.a.bR = function (n, t) {
  n.b = t
};
_wx.a.bU = function (n, t) {
  n.g(t)
};
_wx.a.dd = function (n, t) {
  n.dm(t)
};
_wx.a.de = function (n, t) {
  n.da(t)
};
_wx.a.gz = function (n, t) {
  n.bi(t)
};
_wx.a.A = function (n, t) {
  n.a(t)
};
_wx.a.es = function (n, t) {
  n.bk(t)
};
_wx.a.h = function (n, t) {
  n.ba(t)
};
_wx.a.eg = function (n, t) {
  n.b = t
};
_wx.a.ea = function (n, t) {
  n.b = t
};
_wx.a.ef = function (n, t) {
  n.f = t
};
_wx.a.eb = function (n, t) {
  n.d = t
};
_wx.a.ee = function (n, t) {
  n.j = t
};
_wx.a.ec = function (n, t) {
  n.m = t
};
_wx.a.ed = function (n, t) {
  n.i = t
};
_wx.a.o = function (n, t) {
  n.j(t)
};
_wx.a.e = function (n, t) {
  n.K(t)
};
_wx.a.hO = function (n, t) {
  n.g(t)
};
_wx.a.gD = function (n, t) {
  n.b(t)
};
_wx.a.gF = function (n, t) {
  n.j(t)
};
_wx.a.gE = function (n, t) {
  n.g(t)
};
_wx.a.fI = function (n, t) {
  n.bj(t)
};
_wx.a.ci = function (n, t) {
  n.bg(t)
};
_wx.a.n = function (n, t) {
  n.D(t)
};
_wx.a.q = function (n, t) {
  n.Q(t)
};
_wx.a.bg = function (n, t) {
  n.m(t)
};
_wx.a.dZ = function (n, t) {
  n.b(t)
};
_wx.a.dY = function (n, t) {
  n.c(t)
};
_wx.a.ij = function (n, t) {
  n.f(t)
};
_wx.a.z = function (n, t) {
  n.a(t)
};
_wx.a.eo = function (n, t) {
  n.o(t)
};
_wx.a.W = function (n, t) {
  n.j(t)
};
_wx.a.en = function (n, t) {
  n.n(t)
};
_wx.a.em = function (n, t) {
  n.m(t)
};
_wx.a.S = function (n, t) {
  n.k(t)
};
_wx.a.bu = function (n, t) {
  n.m(t)
};
_wx.a.R = function (n, t) {
  n.b(t)
};
_wx.a.ic = function (n, t) {
  n.f(t)
};
_wx.a.u = function (n, t) {
  n.l(t)
};
_wx.a.U = function (n, t) {
  n.m(t)
};
_wx.a.bv = function (n, t) {
  n.r(t)
};
_wx.a.t = function (n, t) {
  n.T(t)
};
_wx.a.T = function (n, t) {
  n.Q(t)
};
_wx.a.ce = function (n, t) {
  n.k(t)
};
_wx.a.dS = function (n, t) {
  n.t = t
};
_wx.a.dQ = function (n, t) {
  n.s = t
};
_wx.a.dP = function (n, t) {
  n.bw = t
};
_wx.a.dR = function (n, t) {
  n.f(t)
};
_wx.a.cT = function (n, t) {
  n.a(t)
};
_wx.a.dV = function (n, t) {
  n.a(t)
};
_wx.a.dO = function (n, t) {
  n.c(t)
};
_wx.a.dT = function (n, t) {
  n.bf = t
};
_wx.a.cc = function (n, t) {
  n.T(t)
};
_wx.a.hY = function (n, t) {
  n.c(t)
};
_wx.a.bw = function (n, t) {
  n.a(t)
};
_wx.a.hL = function (n, t) {
  n.h(t)
};
_wx.a.bC = function (n, t) {
  n.bj(t)
};
_wx.a.hM = function (n, t) {
  n.c(t)
};
_wx.a.hB = function (n, t) {
  n.m(t)
};
_wx.a.eR = function (n, t) {
  n.t(t)
};
_wx.a.gQ = function (n, t) {
  n.E(t)
};
_wx.a.eT = function (n, t) {
  n.M(t)
};
_wx.a.hU = function (n, t) {
  n.bQ(t)
};
_wx.a.dn = function (n, t) {
  n.bD(t)
};
_wx.a.dp = function (n, t) {
  n.i(t)
};
_wx.a.eS = function (n, t) {
  n.bm(t)
};
_wx.a.dN = function (n, t) {
  n.cJ(t)
};
_wx.a.hT = function (n, t) {
  n.cK(t)
};
_wx.a.fO = function (n, t) {
  n.q(t)
};
_wx.a.dm = function (n, t) {
  n.r(t)
};
_wx.a.fv = function (n, t) {
  n.e(t)
};
_wx.a.dW = function (n, t) {
  n.h(t)
};
_wx.a.hX = function (n, t) {
  n.a = t
};
_wx.a.ck = function (n, t) {
  n.u(t)
};
_wx.a.cl = function (n, t) {
  n.E(t)
};
_wx.a.cm = function (n, t) {
  n.p(t)
};
_wx.a.hV = function (n, t) {
  n.cM(t)
};
_wx.a.eA = function (n, t) {
  n.x(t)
};
_wx.a.eB = function (n, t) {
  n.s(t)
};
_wx.a.ey = function (n, t) {
  n.bi(t)
};
_wx.a.eC = function (n, t) {
  n.E(t)
};
_wx.a.ez = function (n, t) {
  n.w(t)
};
_wx.a.el = function (n, t) {
  n.b(t)
};
_wx.a.ek = function (n, t) {
  n.c(t)
};
_wx.a.im = function (n, t) {
  n.d(t)
};
_wx.a.il = function (n, t) {
  n.c(t)
};
_wx.a.bH = function (n, t) {
  n.o(t)
};
_wx.a.ct = function (n, t) {
  n.n(t)
};
_wx.a.et = function (n, t) {
  n.cK(t)
};
_wx.a.eY = function (n, t) {
  n.e(t)
};
_wx.a.cu = function (n, t) {
  n.E(t)
};
_wx.a.cP = function (n, t) {
  n.ee(t)
};
_wx.a.cO = function (n, t) {
  n.ed(t)
};
_wx.a.cj = function (n, t) {
  n.h(t)
};
_wx.a.gC = function (n, t) {
  n.p(t)
};
_wx.a.F = function (n, t) {
  n.h(t)
};
_wx.a.gS = function (n, t) {
  n.j(t)
};
_wx.a.gR = function (n, t) {
  n.i(t)
};
_wx.a.gT = function (n, t) {
  n.k(t)
};
_wx.a.gV = function (n, t) {
  n.d = t
};
_wx.a.gY = function (n, t) {
  n.dF(t)
};
_wx.a.fo = function (n, t) {
  n.bM(t)
};
_wx.a.gX = function (n, t) {
  n.bw(t)
};
_wx.a.gW = function (n, t) {
  n.y(t)
};
_wx.a.gZ = function (n, t) {
  n.dH(t)
};
_wx.a.ha = function (n, t) {
  n.m(t)
};
_wx.a.hb = function (n, t) {
  n.g = t
};
_wx.a.eM = function (n, t) {
  n.fR(t)
};
_wx.a.fV = function (n, t) {
  n.bg(t)
};
_wx.a.N = function (n, t) {
  n.i(t)
};
_wx.a.hn = function (n, t) {
  n.bJ(t)
};
_wx.a.hk = function (n, t) {
  n.bU(t)
};
_wx.a.cq = function (n, t) {
  n.gs(t)
};
_wx.a.fU = function (n, t) {
  n.dz(t)
};
_wx.a.Q = function (n, t) {
  n.n = t
};
_wx.a.m = function (n, t) {
  n.u(t)
};
_wx.a.hr = function (n, t) {
  n.dl(t)
};
_wx.a.ho = function (n, t) {
  n.cB(t)
};
_wx.a.gw = function (n, t) {
  n.n(t)
};
_wx.a.hq = function (n, t) {
  n.p = t
};
_wx.a.hp = function (n, t) {
  n.dF(t)
};
_wx.a.gv = function (n, t) {
  n.H(t)
};
_wx.a.L = function (n, t) {
  n.bP(t)
};
_wx.a.H = function (n, t) {
  n.g = t
};
_wx.a.K = function (n, t) {
  n.i = t
};
_wx.a.J = function (n, t) {
  n.m(t)
};
_wx.a.I = function (n, t) {
  n.bc(t)
};
_wx.a.d = function () {
  _wx.a.bb || (_wx.a.bb = new _fc.k);
  return _wx.a.bb
};
_wx.a.cd = function () {
  _wx.a.bc || (_wx.a.bc = new _fc.l);
  return _wx.a.bc
};
_wx.a.eh = function () {
  _wx.a.bd || (_wx.a.bd = new _b.bw);
  return _wx.a.bd
};
_wx.a._I = function () {
  var ft = "CalendarAllDayWellView.Mouse._tid1";
  new _j.d(ft, function () {
    _wx.a.a[ft] === undefined && (_wx.a.a[ft] = [null]);
    var i = _wx.a.b.childNodes[0].cloneNode(!0);
    var n = new _cb.t(i.children[0]);
    var t = new _cb.bm(_j.b.Instance.a(_j.o), _j.b.Instance.a(_cb.m));
    t.U(_j.f.a(["IsUpdatingItems"], [_wx.a.fg], null, "IsUpdatingItems", null, _wx.a.hi, 1, null, null, !1)).U(_j.f.a(["CurrentColumnProviderViewModel"], [_wx.a.r], null, "ColumnProvider", null, _wx.a.dy, 1)).U(_j.f.a(["GridlineIntervalHeight"], [_wx.a.bn], null, "GridlineIntervalHeight", null, _wx.a.dz, 0, null, null, 0)).W(_j.f.a(["TemplatedParent", "TemplatedParent", "ScrollRegionControl"], [_wx.a.c, _wx.a.c, _wx.a.bV], null, "ScrollParent", null, _wx.a.hh, 1)).W(_j.f.a(["TemplatedParent", "TemplatedParent", "AllDayPanelHeight"], [_wx.a.c, _wx.a.c, _wx.a.gA], _wx.a.gB, "PanelHeight", _wx.a.hf, _wx.a.hg, 2, null, null, 0));
    n.b(t);
    return new _j.a(i, [n]).l({
      ListPanel: n
    })
  }, "", _cb.o, _cb.f, function (n) {
    return new _cb.f(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v))
  }, !1, !0, !1, 0, _wx.a.a);
  var ut = "CalendarAllDayWellView.Mouse";
  new _j.d(ut, function () {
    _wx.a.a[ut] === undefined && (_wx.a.a[ut] = [
      [
        [-1, 0, ["CurrentColumnProviderViewModel"],
          [_wx.a.r], null, "ColumnProvider", null, _wx.a.dv, 1, null, null, null
        ],
        [-1, 0, ["IsDraggingItem"],
          [_wx.a.X], null, "HandleClickEvent", null, _wx.a.dw, 1, _wx.a.d(), null, !1
        ],
        [-1, 0, ["OnAllDayGridClickCommand"],
          [_wx.a.fi], null, "ClickCommand", null, _wx.a.bj, 1, null, null, null
        ],
        [-1, 0, ["CreateAllDayItemCommand"],
          [_wx.a.eF], null, "DoubleClickCommand", null, _wx.a.bk, 1, null, null, null
        ],
        [-1, 0, ["GridAllDaySelectedRowColumnIndex"],
          [_wx.a.fb], _wx.a.fm, "SelectedRowColumnIndex", _wx.a.du, _wx.a.dx, 2, null, null, null
        ]
      ], null, [
        [-1, 4, null, null, null, "FocusInAction", null, _wx.a.bX, 0, null, null, null, _cb.W.a()],
        [-1, 1, ["TemplatedParent", "CurrentItemViews"],
          [_wx.a.c, _wx.a.bq], _wx.a.dt, "SelectedItemViews", _wx.a.Z, _wx.a.dg, 2, null, null, null
        ],
        [-1, 1, ["ScrollRegionControl"],
          [_wx.a.bV], null, "ScrollRegion", null, _wx.a.df, 0, null, null, null
        ],
        [-1, 0, ["AllDayItems"],
          [_wx.a.fa], null, "DataSource", null, _wx.a.V, 1, null, null, null
        ],
        [-1, 0, ["ModuleContext", "CurrentSurfaceItem"],
          [_wx.a.i, _wx.a.cQ], _wx.a.cR, "SelectedItem", _wx.a.bW, _wx.a.bY, 2, null, null, null
        ],
        [-1, 0, ["SelectItemCommand"],
          [_wx.a.eL], null, "ClickCommand", null, _wx.a.bj, 1, null, null, null
        ],
        [-1, 0, ["OpenItemCommand"],
          [_wx.a.cK], null, "DoubleClickCommand", null, _wx.a.bk, 1, null, null, null
        ]
      ]
    ]);
    var u = _wx.a.b.childNodes[2].cloneNode(!0);
    var n = new _cb.f(_j.a.a(u, [0, 0, 0]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v));
    n.v("CalendarItemTemplates.AllDayWellItem");
    n.bi("_wx_5");
    n.ci(!0);
    n.cf(!0);
    n.A(-1);
    var c = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    c.U(_j.f.a(["ModuleContext", "CurrentItemContextMenuViewModel"], [_wx.a.i, _wx.a.bm], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["IsAllDayItemContextMenuShown"], [_wx.a.ff], _wx.a.fp, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1)).W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.be, 1, null, null, !1));
    var s = new _cb.V(_j.b.Instance.a(_cb.y));
    s.W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.bQ, 1, null, null, !1));
    var f = new _db.H(_j.b.Instance.a(_j.cd.$$(_j.t)));
    f.W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.bZ, 1, null, null, !1));
    f.c = 5;
    f.d = !1;
    var l = new _fc.g;
    var r = new _fc.c;
    r.U(_j.f.a(["CopyItemCommand"], [_wx.a.cz], null, "Command", null, _wx.a.f, 1));
    r.j("C");
    r.k = 2;
    var o = new _fc.c;
    o.U(_j.f.a(["OpenItemViaHotkeyCommand"], [_wx.a.cL], null, "Command", null, _wx.a.f, 1));
    o.j("ENTER");
    var e = new _fc.c;
    e.U(_j.f.a(["CalendarItemRemover", "DeleteItemOrSeriesCommand"], [_wx.a.cw, _wx.a.bI], null, "Command", null, _wx.a.f, 1));
    e.j("DELETE");
    l.a([r, o, e]);
    var a = new _cb.cc;
    a.U(_j.f.a(["DateRange"], [_wx.a.cB], null, "SelectedDateRange", null, _wx.a.bS, 1)).U(_j.f.a(["ModuleContext", "CurrentItem"], [_wx.a.i, _wx.a.C], null, "SelectedItemViewModel", null, _wx.a.bT, 1)).U(_j.f.a(["CalendarViewType"], [_wx.a.cx], null, "SelectedCalendarViewType", null, _wx.a.bR, 1, null, null, 0)).W(_j.f.a(["SelectedItemViews"], [_wx.a.Z], null, "SelectedItemViews", null, _wx.a.bU, 1));
    n.C([c, s, f, l, a]);
    n.bc(function () {
      var t = _wx.a.b.childNodes[1].cloneNode(!0).childNodes[0];
      var n = new _cb.r(t, _j.b.Instance.a(_y.a), _j.b.Instance.a(_dg.h), _j.b.Instance.a(_j.cc.$$(_cc.h)), _j.b.Instance.a(_ff.b), _j.b.Instance.a(_cc.c), _j.b.Instance.a(_h.e), _j.b.Instance.a(_cb.d));
      n.W(_j.f.a(["DataContext", "CanDimItems"], [_wx.a.g, _wx.a.cy], null, "CanDim", null, _wx.a.dd, 0, null, null, !1)).W(_j.f.a(["DataContext", "ModuleContext", "CurrentCalendarModel"], [_wx.a.g, _wx.a.i, _wx.a.bD], null, "SelectedCalendar", null, _wx.a.de, 1)).W(_j.f.a(["DataContext", "DateRangeArray"], [_wx.a.g, _wx.a.cC], null, "CurrentDateRange", null, _wx.a.gz, 1));
      return n
    });
    n.y("CalendarAllDayWellView.Mouse._tid1");
    var v = new _fce.g(_j.a.a(u, [0, 0]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
    var t = new _cb.bb(u.children[0], _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v));
    t.i("_wx_6 ms-border-color-neutralTertiaryAlt");
    t.g("_wx_7 ms-border-color-neutralLight");
    t.br("ms-bg-color-neutralLighterAlt");
    var h = new _cb.bl;
    h.U(_j.f.a(["GridHoveredRowColumnIndex"], [_wx.a.fc], _wx.a.fn, "HoveredRowColumnIndex", _wx.a.hc, _wx.a.hd, 2)).W(_j.f.a(["EnableGridBehaviors"], [_wx.a.br], null, "IsEnabled", null, _wx.a.he, 1, null, null, !1));
    var i = new _cb.cJ(_j.b.Instance.a(_j.o), _j.b.Instance.a(_g.h), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.bF.$$(_cb.r)), _j.b.Instance.a(_cb.bs), _j.b.Instance.a(_j.cd.$$(_j.t)));
    i.U(_j.f.a(["IsDraggingItem"], [_wx.a.X], _wx.a.cN, "IsDragging", _wx.a.bL, _wx.a.bN, 2, null, null, !1)).U(_j.f.a(["DropItemCommand"], [_wx.a.bB], null, "DropCommand", null, _wx.a.ca, 1)).U(_j.f.a(["CurrentColumnProviderViewModel"], [_wx.a.r], null, "ColumnProvider", null, _wx.a.cY, 1)).U(_j.f.a(["CurrentColumnProviderViewModel", "SelectedDateRange"], [_wx.a.r, _wx.a.fP], null, "SelectedDateRange", null, _wx.a.gy, 1)).U(_j.f.a(["ModuleContext", "CurrentItem"], [_wx.a.i, _wx.a.C], _wx.a.bF, "SelectedItem", _wx.a.bM, _wx.a.bO, 2)).U(_j.f.a(["ModuleContext", "SelectedCalendarsModel", "SelectedCalendars"], [_wx.a.i, _wx.a.bE, _wx.a.bz], null, "SelectedCalendars", null, _wx.a.da, 1)).W(_j.f.a(["EnableGridBehaviors"], [_wx.a.br], null, "IsEnabled", null, _wx.a.cb, 1, null, null, !1)).W(_j.f.a(["TemplatedParent", "TemplatedParent", "ActiveDroppable"], [_wx.a.c, _wx.a.c, _wx.a.dq], _wx.a.ds, "ActiveDroppable", _wx.a.db, _wx.a.dc, 2)).W(_j.f.a(["TemplatedParent", "ScrollRegionControl"], [_wx.a.c, _wx.a.bV], null, "ScrollParent", null, _wx.a.gx, 0)).W(_j.f.a(["TemplatedParent", "TemplatedParent", "CurrentItemViews"], [_wx.a.c, _wx.a.c, _wx.a.bq], null, "SelectedItemViews", null, _wx.a.bP, 1)).W(_j.f.a(["TemplatedParent", "TemplatedParent", "IsSideBySideMode"], [_wx.a.c, _wx.a.c, _wx.a.dr], null, "IsSideBySideMode", null, _wx.a.cZ, 1, null, null, !1));
    i.E = !0;
    i.t = "_wx_8";
    i.bn = !1;
    t.C([h, i]);
    return new _j.a(u, [t, v, n]).l({
      ItemsScrollRegion: v,
      AllDayItems: n
    })
  }, "", _cb.o, _cb.Z, function (n) {
    return new _cb.Z(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.h))
  }, !1, !1, !1, 0, _wx.a.a);
  var et = "CalendarLayoutMouseView._tid2._tid3";
  new _j.d(et, function () {
    _wx.a.a[et] === undefined && (_wx.a.a[et] = [
      [
        [-1, 4, null, null, null, "Text", null, _wx.a.A, 0, null, null, null, _u.O.CQ]
      ]
    ]);
    var n = _wx.a.b.childNodes[3].cloneNode(!0);
    var t = new _fc.a(n.children[0]);
    return new _j.a(n, [t])
  }, "", _wx.b, _fc.e, function (n) {
    return new _fc.e(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var st = "CalendarLayoutMouseView._tid2";
  new _j.d(st, function () {
    _wx.a.a[st] === undefined && (_wx.a.a[st] = [
      [
        [-1, 0, ["AnonymousCalendarDisplayName"],
          [_wx.a.fw], null, "Text", null, _wx.a.A, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "Text", null, _wx.a.A, 0, null, null, null, _u.O.Ch]
      ], null, [
        [-1, 4, null, null, null, "Title", null, _wx.a.es, 0, null, null, null, _u.O.CQ]
      ]
    ]);
    var n = _wx.a.b.childNodes[4].cloneNode(!0);
    var t = new _fc.e(_j.a.a(n, [0, 4]));
    t.b("https://go.microsoft.com/fwlink/?LinkId=521839");
    t.a("_blank");
    t.y("CalendarLayoutMouseView._tid2._tid3");
    var i = new _fc.a(_j.a.a(n, [0, 3]));
    i.a(" | ");
    var u = new _fc.a(_j.a.a(n, [0, 2]));
    var r = new _fc.a(_j.a.a(n, [0, 0]));
    return new _j.a(n, [r, u, i, t])
  }, "", _wx.b, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var ot = "CalendarLayoutMouseView._tid4._tid6";
  new _j.d(ot, function () {
    _wx.a.a[ot] === undefined && (_wx.a.a[ot] = [
      [
        [-1, 0, ["CalendarCommandProvider", "FeedsTeachingMoment"],
          [_wx.a.ba, _wx.a.dF], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[5].cloneNode(!0);
    var u = new _j.c(r.children[0]);
    var i = new _lt.c(_j.b.Instance.a(ILightningManager), _j.b.Instance.a(_a.e));
    i.U(_j.f.b(8, null, null, null, "Id", null, _wx.a.eg, 0, null, null, 0));
    var f = new _wx.k(_j.b.Instance.a(_j.j));
    i.a = [f];
    var t = new _lt.b(_j.b.Instance.a(ILightningManager));
    t.U(_j.f.b(8, null, null, null, "Id", null, _wx.a.ea, 0, null, null, 0));
    var n = new _lt.d(_j.b.Instance.a(ILightningManager), _j.b.Instance.a(_b.f), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    n.U(_j.f.a(["TitleText"], [_wx.a.dD], null, "Title", null, _wx.a.ef, 0)).U(_j.f.a(["DescriptionText"], [_wx.a.dA], null, "Description", null, _wx.a.eb, 0)).U(_j.f.b(3, null, null, null, "NotchVerticalAlign", null, _wx.a.ee, 0, null, null, 0)).U(_j.f.a(["MoreText"], [_wx.a.dC], null, "MoreButtonText", null, _wx.a.ec, 0)).U(_j.f.a(["MoreCommand"], [_wx.a.dB], null, "MoreCommand", null, _wx.a.ed, 0));
    n.e = 130;
    n.k = 120;
    n.y = !0;
    t.a([n]);
    u.C([i, t]);
    return new _j.a(r, [u])
  }, "", _wx.b, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var nt = "CalendarLayoutMouseView._tid4._tid8";
  new _j.d(nt, function () {
    _wx.a.a[nt] === undefined && (_wx.a.a[nt] = [
      [
        [-1, 0, ["CalendarCommandProvider", "CollegeBasketballTeachingMoment"],
          [_wx.a.ba, _wx.a.dE], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[5].cloneNode(!0);
    var u = new _j.c(r.children[0]);
    var i = new _lt.c(_j.b.Instance.a(ILightningManager), _j.b.Instance.a(_a.e));
    i.U(_j.f.b(41, null, null, null, "Id", null, _wx.a.eg, 0, null, null, 0));
    var f = new _wx.k(_j.b.Instance.a(_j.j));
    i.a = [f];
    var t = new _lt.b(_j.b.Instance.a(ILightningManager));
    t.U(_j.f.b(41, null, null, null, "Id", null, _wx.a.ea, 0, null, null, 0));
    var n = new _lt.d(_j.b.Instance.a(ILightningManager), _j.b.Instance.a(_b.f), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    n.U(_j.f.a(["TitleText"], [_wx.a.dD], null, "Title", null, _wx.a.ef, 0)).U(_j.f.a(["DescriptionText"], [_wx.a.dA], null, "Description", null, _wx.a.eb, 0)).U(_j.f.b(3, null, null, null, "NotchVerticalAlign", null, _wx.a.ee, 0, null, null, 0)).U(_j.f.a(["MoreText"], [_wx.a.dC], null, "MoreButtonText", null, _wx.a.ec, 0)).U(_j.f.a(["MoreCommand"], [_wx.a.dB], null, "MoreCommand", null, _wx.a.ed, 0));
    n.e = 130;
    n.k = 120;
    n.y = !0;
    t.a([n]);
    u.C([i, t]);
    return new _j.a(r, [u])
  }, "", _wx.b, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var g = "CalendarLayoutMouseView._tid4";
  new _j.d(g, function () {
    _wx.a.a[g] === undefined && (_wx.a.a[g] = [
      [
        [-1, 0, ["CommandBarViewModel"],
          [_wx.a.hu], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 0, ["CalendarCommandProvider", "FeedsTeachingMoment"],
          [_wx.a.ba, _wx.a.dF], null, "IsHidden", null, _wx.a.e, 1, _wx.a.cd(), null, !0
        ]
      ],
      [
        [-1, 0, ["CalendarCommandProvider", "CollegeBasketballTeachingMoment"],
          [_wx.a.ba, _wx.a.dE], null, "IsHidden", null, _wx.a.e, 1, _wx.a.cd(), null, !0
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[6].cloneNode(!0);
    var u = new _j.c(n.children[2]);
    u.y("CalendarLayoutMouseView._tid4._tid8");
    var r = new _j.c(n.children[1]);
    r.y("CalendarLayoutMouseView._tid4._tid6");
    var t = new _fce.s(n.children[0], _j.b.Instance.a(_ff.b));
    t.L(!0);
    var i = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    i.U(_j.f.b(103, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    i.i(!0);
    t.C([i]);
    return new _j.a(n, [t, r, u])
  }, "", _wx.b, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var tt = "CalendarLayoutMouseView._tidb";
  new _j.d(tt, function () {
    _wx.a.a[tt] === undefined && (_wx.a.a[tt] = [
      [
        [-1, 1, ["TemplatedParent", "IsTwoLineHeader"],
          [_wx.a.c, _wx.a.gG], null, "IsHeaderInTwoLineMode", null, _wx.a.hO, 1, null, null, !1
        ],
        [-1, 5, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.bo, _wx.a.k], null, "_wx_a", null, null, 0, null, null, null
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[7].cloneNode(!0);
    var n = new _wx.i(t.children[0], _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_j.j));
    n.y("CalendarNavigationHeaderView");
    return new _j.a(t, [n])
  }, "", _wx.b, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var rt = "CalendarLayoutMouseView._tidc._tidd";
  new _j.d(rt, function () {
    _wx.a.a[rt] === undefined && (_wx.a.a[rt] = [
      [
        [-1, 0, ["MainViewModel", "IsSideBySideMode"],
          [_wx.a.bs, _wx.a.eZ], null, "AlignByColumnWidth", null, _wx.a.gD, 1, null, null, !1
        ],
        [-1, 0, ["MainViewModel", "GridRowHeaderWidth"],
          [_wx.a.bs, _wx.a.eI], null, "GridColumnOffset", null, _wx.a.gF, 1, null, null, 0
        ],
        [-1, 0, ["MainViewModel", "CurrentColumnProviderViewModel", "ColumnWidth"],
          [_wx.a.bs, _wx.a.r, _wx.a.cW], null, "ColumnWidth", null, _wx.a.gE, 1, null, null, 0
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[8].cloneNode(!0);
    var n = new _cb.O(t.children[0], _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.h));
    return new _j.a(t, [n]).l({
      ListPanel: n
    })
  }, "", _wx.b, _fce.a, function (n) {
    return new _fce.a(n, _j.b.Instance.a(_ff.a))
  }, !1, !0, !1, 0, _wx.a.a);
  var it = "CalendarLayoutMouseView._tidc";
  new _j.d(it, function () {
    _wx.a.a[it] === undefined && (_wx.a.a[it] = [
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 52],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.BV],
        [-1, 0, ["CalendarHeaderItems"],
          [_wx.a.fz], null, "DataSource", null, _wx.a.V, 1, null, null, null
        ],
        [-1, 0, ["SelectedCalendarHeaderItem"],
          [_wx.a.fG], _wx.a.fI, "SelectedItem", _wx.a.ch, _wx.a.ci, 2, null, null, null
        ]
      ]
    ]);
    var i = _wx.a.b.childNodes[9].cloneNode(!0);
    var n = new _fce.a(i.children[0], _j.b.Instance.a(_ff.a));
    n.bi("_wx_l");
    n.cy(!0);
    n.ci(!0);
    n.A(-1);
    var t = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    t.U(_j.f.a(["CalendarContextMenuViewModel"], [_wx.a.dG], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["CalendarContextMenuViewModel", "IsShown"], [_wx.a.dG, _wx.a.bf], _wx.a.bg, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1));
    n.C([t]);
    n.bc(function () {
      var t = _wx.a.b.childNodes[1].cloneNode(!0).childNodes[0];
      return new _cb.N(t, _j.b.Instance.a(_y.a), _j.b.Instance.a(_cb.F), _j.b.Instance.a(_cc.c))
    });
    n.y("CalendarLayoutMouseView._tidc._tidd");
    return new _j.a(i, [n])
  }, "", _wx.b, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var wt = "CalendarLayoutMouseView";
  new _j.d(wt, function () {
    _wx.a.a[wt] === undefined && (_wx.a.a[wt] = [
      [
        [-1, 5, ["IsModernGroupNavigationSupported"],
          [_wx.a.hy], null, "_wx_g ms-border-color-neutralLight", null, null, 0, _wx.a.d(), null, null
        ]
      ],
      [
        [-1, 0, ["ContextViewModel", "OwaShell", "AnonymousMode"],
          [_wx.a.bo, _wx.a.eO, _wx.a.ik], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ]
      ], null, null, [
        [-1, 0, ["IsCalendarSurfaceFullyLoaded"],
          [_wx.a.dH], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ],
        [-1, 5, ["IsDeepLinkIFrame"],
          [_wx.a.hw], null, "_wx_t", null, null, 0, null, null, null
        ]
      ],
      [
        [-1, 0, ["GroupManagementHeaderViewModel"],
          [_wx.a.fC], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ],
        [0, 0, ["IsGroupHeaderV3"],
          [_wx.a.hx], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 3, ["NavigationHeaderSize"],
          [_wx.a.gH], null, _fce.c.b, null, null, 1, null, null, null
        ]
      ],
      [
        [-1, 0, ["IsCalendarSurfaceFullyLoaded"],
          [_wx.a.dH], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ]
      ], null, [
        [-1, 0, ["CalendarHeadersHidden"],
          [_wx.a.ht], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ],
        [-1, 2, ["CalendarHeaderHeight"],
          [_wx.a.hs], null, _fce.c.b, null, null, 1, null, null, null
        ]
      ],
      [
        [-1, 0, ["ContextViewModel", "CurrentTimeline"],
          [_wx.a.bo, _wx.a.eN], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ],
        [0, 2, ["TimelineHeight"],
          [_wx.a.gd], null, _fce.c.b, null, null, 1, null, null, null
        ]
      ], null, [
        [-1, 0, ["CalendarLoadStatus", "IsLoaded"],
          [_wx.a.fA, _wx.a.fR], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 0, ["MainConductorViewModel", "ActiveNavigationStack"],
          [_wx.a.fE, _wx.a.id], null, "ActiveNavigationStack", null, _wx.a.dZ, 1, null, null, null
        ],
        [-1, 0, ["CachedPrimaryViews"],
          [_wx.a.fx], null, "ActiveItems", null, _wx.a.dY, 1, null, null, null
        ]
      ],
      [
        [-1, 0, ["ContextViewModel", "CurrentItemContextMenuViewModel", "CategoryViewModel", "CategoryManagementDialog"],
          [_wx.a.bo, _wx.a.bm, _wx.a.fq, _wx.a.eD], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ],
        [0, 0, ["IsShown"],
          [_wx.a.dX], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ],
        [0, 0, ["IsShown"],
          [_wx.a.dX], _wx.a.ij, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ],
        [0, 0, ["Title"],
          [_wx.a.ii], null, "DialogTitle", null, _wx.a.eo, 0, null, null, null
        ],
        [0, 0, ["CloseCommand"],
          [_wx.a.ie], null, "CloseCommand", null, _wx.a.W, 0, null, null, null
        ],
        [0, 0, ["ContentDataContext"],
          [_wx.a.ig], null, "ContentDataContext", null, _wx.a.en, 1, null, null, null
        ],
        [0, 0, ["FooterButtons"],
          [_wx.a.ih], null, "ButtonDataList", null, _wx.a.em, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "Message", null, _wx.a.bu, 0, null, null, null, _u.O.DB],
        [-1, 0, ["CalendarErrorMessageViewModel", "Title"],
          [_wx.a.bJ, _wx.a.ib], null, "DialogTitle", null, _wx.a.S, 1, null, null, null
        ],
        [-1, 0, ["CalendarErrorMessageViewModel", "FooterButtons"],
          [_wx.a.bJ, _wx.a.hZ], null, "ButtonDataList", null, _wx.a.R, 1, null, null, null
        ],
        [-1, 0, ["CalendarErrorMessageViewModel", "IsShown"],
          [_wx.a.bJ, _wx.a.ia], _wx.a.ic, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ]
      ],
      [
        [-1, 0, ["MessageBoxViewModel"],
          [_wx.a.fF], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[10].cloneNode(!0);
    var y = new _j.c(n.children[3]);
    y.y("MessageBoxDefaultView");
    y.L(!0);
    var tt = new _b.o(n.children[2], _j.b.Instance.a(_y.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    var d = new _fce.m(n.children[1], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    d.b("CategoryManagementContentView");
    var l = new _n.g(_j.a.a(n, [0, 1, 3, 2, 1]), _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
    l.bd(!0);
    var k = new _cb.bN(_j.a.a(n, [0, 1, 3, 2, 0]), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v), _j.b.Instance.a(_b.a));
    k.y("CalendarLoadingDialogInline");
    var s = new _j.i(_j.a.a(n, [0, 1, 3, 2]));
    s.eI(_fce.c.a, 4);
    s.z.parentNode.removeChild(s.z);
    var r = new _j.c(_j.a.a(n, [0, 1, 3, 1]));
    r.eI(_fce.c.a, 2);
    r.y("CalendarTimelineView");
    r.L(!0);
    r.z.parentNode.removeChild(r.z);
    var u = new _j.c(_j.a.a(n, [0, 1, 3, 0]));
    u.eI(_fce.c.a, 0);
    u.y("CalendarLayoutMouseView._tidc");
    u.z.parentNode.removeChild(u.z);
    var t = new _fce.c(_j.a.a(n, [0, 1, 3]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    t.b(2);
    t.eI(_fce.c.a, 4);
    t.c = !1;
    t.z.parentNode.removeChild(t.z);
    var a = new _j.c(_j.a.a(n, [0, 1, 2, 0]));
    a.y("CalendarLayoutMouseView._tidb");
    var o = new _j.i(_j.a.a(n, [0, 1, 2]));
    o.eI(_fce.c.a, 0);
    o.z.parentNode.removeChild(o.z);
    var i = new _j.c(_j.a.a(n, [0, 1, 1]));
    i.eI(_fce.c.a, 0);
    i.eI(_fce.c.b, 100);
    i.L(!0);
    i.y("UnifiedGroupHeaderView");
    var p = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    p.U(_j.f.b(353, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    p.i(!0);
    i.C([p]);
    i.z.parentNode.removeChild(i.z);
    var w = new _j.c(_j.a.a(n, [0, 1, 0, 0]));
    w.y("CalendarLayoutMouseView._tid4");
    var e = new _j.i(_j.a.a(n, [0, 1, 0]));
    e.eI(_fce.c.a, 0);
    e.eI(_fce.c.b, 40);
    e.z.parentNode.removeChild(e.z);
    var f = new _fce.c(_j.a.a(n, [0, 1]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    f.b(2);
    f.c = !1;
    var g = new _j.c(_j.a.a(n, [0, 0]));
    g.y("CalendarLayoutMouseView._tid2");
    var v = new _j.i(n.children[0]);
    v.A(-1);
    var b = new _fc.g;
    var c = new _fc.c;
    c.U(_j.f.a(["CalendarCommandProvider", "PrintCalendarCommand"], [_wx.a.ba, _wx.a.fQ], null, "Command", null, _wx.a.f, 1));
    c.j("P");
    c.k = 2;
    var h = new _fc.c;
    h.U(_j.f.a(["GoToTodayCommand"], [_wx.a.fB], null, "Command", null, _wx.a.f, 1));
    h.j("HOME");
    h.m = !1;
    b.a([c, h]);
    var nt = new _cb.cv(_j.b.Instance.a(_j.cc.$$(_cb.bF)), _j.b.Instance.a(_cb.y));
    v.C([b, nt]);
    f.a.a(e);
    f.a.a(i);
    f.a.a(o);
    f.a.a(t);
    t.a.a(u);
    t.a.a(r);
    t.a.a(s);
    return new _j.a(n, [v, g, f, e, w, i, o, a, t, u, r, s, k, l, d, tt, y]).l({
      timestrip: a,
      calendarHeaders: u,
      viewConductor: l
    }).c(l)
  }, "", _wx.b, _cb.I, function (n) {
    return new _cb.I(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j))
  }, !0, !1, !1, 0, _wx.a.a);
  var pt = "CalendarDateRangeNavigationView.Mouse";
  new _j.d(pt, function () {
    _wx.a.a[pt] === undefined && (_wx.a.a[pt] = [
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _n.b.co()],
        [-1, 4, null, null, null, "HoveredImageId", null, _wx.a.U, 0, null, null, null, _n.b.cU()],
        [-1, 4, null, null, null, "PressedImageId", null, _wx.a.bv, 0, null, null, null, _n.b.cV()],
        [-1, 1, ["GoPrevDateRangeCommand"],
          [_wx.a.hG], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ],
        [-1, 1, ["PreviousButtonAccessibleName"],
          [_wx.a.hJ], null, "AriaLabel", null, _wx.a.T, 1, null, null, null
        ],
        [-1, 5, ["IsInThreeDayMode"],
          [_wx.a.dI], null, "_wx_x", null, null, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _n.b.W()],
        [-1, 4, null, null, null, "HoveredImageId", null, _wx.a.U, 0, null, null, null, _n.b.cW()],
        [-1, 4, null, null, null, "PressedImageId", null, _wx.a.bv, 0, null, null, null, _n.b.cX()],
        [-1, 1, ["GoNextDateRangeCommand"],
          [_wx.a.hF], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ],
        [-1, 1, ["NextButtonAccessibleName"],
          [_wx.a.hI], null, "AriaLabel", null, _wx.a.T, 1, null, null, null
        ],
        [-1, 5, ["IsInThreeDayMode"],
          [_wx.a.dI], null, "_wx_x", null, null, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["DisplayedDateString"],
          [_wx.a.hE], null, "Text", null, _wx.a.ce, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _n.b.i()],
        [-1, 4, null, null, null, "HoveredImageId", null, _wx.a.U, 0, null, null, null, _n.b.y()],
        [-1, 4, null, null, null, "PressedImageId", null, _wx.a.bv, 0, null, null, null, _n.b.z()],
        [-1, 1, ["MonthPickerAccesibleName"],
          [_wx.a.hH], null, "AriaLabel", null, _wx.a.T, 1, null, null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[11].cloneNode(!0);
    var u = new _fc.b(n.children[3]);
    var r = new _b.E(_j.b.Instance.a(_b.f), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    r.U(_j.f.b(1, null, null, null, "PeekVerticalAlign", null, _wx.a.dS, 0, null, null, 0)).U(_j.f.b(3, null, null, null, "NotchVerticalAlign", null, _wx.a.dQ, 0, null, null, 0)).U(_j.f.b(_u.O.i, null, null, null, "AriaLabel", null, _wx.a.dP, 0)).W(_j.f.a(["DataContext", "CalendarDateRangeNavigationViewModel"], [_wx.a.g, _wx.a.bp], null, "PeekDataContext", null, _wx.a.dR, 1)).W(_j.f.a(["DataContext", "CalendarDateRangeNavigationViewModel", "IsShown"], [_wx.a.g, _wx.a.bp, _wx.a.cS], _wx.a.cT, "IsShown", _wx.a.dU, _wx.a.dV, 2, null, null, !1)).W(_j.f.a(["TemplatedParent", "DOMElement"], [_wx.a.c, _wx.a.co], null, "AnchorElement", null, _wx.a.dO, 1)).W(_j.f.a(["TemplatedParent", "ShowNotch"], [_wx.a.c, _wx.a.dJ], null, "ShowNotch", null, _wx.a.dT, 0, null, null, !1));
    r.e("DateNavigationContextView.Mouse");
    u.C([r]);
    var t = new _fc.b(n.children[2]);
    t.h("_wx_v ms-font-color-neutralPrimary ms-font-xl ms-fwt-r");
    var i = new _b.E(_j.b.Instance.a(_b.f), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    i.U(_j.f.b(1, null, null, null, "PeekVerticalAlign", null, _wx.a.dS, 0, null, null, 0)).U(_j.f.b(3, null, null, null, "NotchVerticalAlign", null, _wx.a.dQ, 0, null, null, 0)).U(_j.f.b(_u.O.i, null, null, null, "AriaLabel", null, _wx.a.dP, 0)).W(_j.f.a(["DataContext", "CalendarDateRangeNavigationViewModel"], [_wx.a.g, _wx.a.bp], null, "PeekDataContext", null, _wx.a.dR, 1)).W(_j.f.a(["DataContext", "CalendarDateRangeNavigationViewModel", "IsShown"], [_wx.a.g, _wx.a.bp, _wx.a.cS], _wx.a.cT, "IsShown", _wx.a.dU, _wx.a.dV, 2, null, null, !1)).W(_j.f.a(["TemplatedParent", "DOMElement"], [_wx.a.c, _wx.a.co], null, "AnchorElement", null, _wx.a.dO, 1)).W(_j.f.a(["TemplatedParent", "ShowNotch"], [_wx.a.c, _wx.a.dJ], null, "ShowNotch", null, _wx.a.dT, 0, null, null, !1));
    i.e("DateNavigationContextView.Mouse");
    t.C([i]);
    var e = new _fc.b(n.children[1]);
    var f = new _fc.b(n.children[0]);
    return new _j.a(n, [f, e, t, u]).l({
      CurrentDateLabel: t
    })
  }, "", _a.bw, _wx.e, function (n) {
    return new _wx.e(n, _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j))
  }, !1, !1, !1, 0, _wx.a.a);
  var yt = "CalendarNavigationHeaderView.Mouse._tidh";
  new _j.d(yt, function () {
    _wx.a.a[yt] === undefined && (_wx.a.a[yt] = [null]);
    var t = _wx.a.b.childNodes[12].cloneNode(!0);
    var n = new _fce.d(t.children[0]);
    return new _j.a(t, [n]).l({
      ListPanel: n
    })
  }, "", _wx.b, _fce.a, function (n) {
    return new _fce.a(n, _j.b.Instance.a(_ff.a))
  }, !1, !0, !1, 0, _wx.a.a);
  var kt = "CalendarNavigationHeaderView.Mouse._tidi";
  new _j.d(kt, function () {
    _wx.a.a[kt] === undefined && (_wx.a.a[kt] = [null]);
    var t = _wx.a.b.childNodes[13].cloneNode(!0);
    var n = new _fce.d(t.children[0]);
    return new _j.a(t, [n]).l({
      ListPanel: n
    })
  }, "", _wx.b, _fce.a, function (n) {
    return new _fce.a(n, _j.b.Instance.a(_ff.a))
  }, !1, !0, !1, 0, _wx.a.a);
  var bt = "CalendarNavigationHeaderView.Mouse.MenuItemViewTemplate._tidj";
  new _j.d(bt, function () {
    _wx.a.a[bt] === undefined && (_wx.a.a[bt] = [
      [
        [-1, 0, ["Text"],
          [_wx.a.by], null, "Text", null, _wx.a.A, 1, null, null, null
        ],
        [-1, 5, ["IsSelected"],
          [_wx.a.bh], null, "ms-font-color-themePrimary", null, null, 0, null, null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[14].cloneNode(!0);
    var t = new _fc.a(n.children[0]);
    return new _j.a(n, [t])
  }, "", _fm.c, _b.F, function (n) {
    return new _b.F(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var ct = "CalendarNavigationHeaderView.Mouse.MenuItemViewTemplate";
  new _j.d(ct, function () {
    _wx.a.a[ct] === undefined && (_wx.a.a[ct] = [
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 3],
        [-1, 0, ["Command"],
          [_wx.a.p], null, "ClickCommand", null, _wx.a.cc, 1, null, null, null
        ],
        [-1, 5, ["IsHidden"],
          [_wx.a.bx], null, "hidden", null, null, 0, null, null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[15].cloneNode(!0);
    var t = new _b.F(r.children[0]);
    var u = new _fc.g;
    var n = new _fc.c;
    n.U(_j.f.a(["Command"], [_wx.a.p], null, "Command", null, _wx.a.f, 0));
    n.j("ENTER");
    var i = new _fc.c;
    i.U(_j.f.a(["Command"], [_wx.a.p], null, "Command", null, _wx.a.f, 0));
    i.j("SPACE");
    u.a([n, i]);
    t.C([u]);
    t.y("CalendarNavigationHeaderView.Mouse.MenuItemViewTemplate._tidj");
    return new _j.a(r, [t])
  }, "", _fm.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var ht = "CalendarNavigationHeaderView.Mouse.MenuItemRadioViewTemplate._tidk";
  new _j.d(ht, function () {
    _wx.a.a[ht] === undefined && (_wx.a.a[ht] = [
      [
        [-1, 0, ["Text"],
          [_wx.a.by], null, "Text", null, _wx.a.A, 1, null, null, null
        ],
        [-1, 5, ["IsSelected"],
          [_wx.a.bh], null, "ms-font-color-themePrimary", null, null, 0, null, null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[14].cloneNode(!0);
    var t = new _fc.a(n.children[0]);
    return new _j.a(n, [t])
  }, "", _fm.c, _b.J, function (n) {
    return new _b.J(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var lt = "CalendarNavigationHeaderView.Mouse.MenuItemRadioViewTemplate";
  new _j.d(lt, function () {
    _wx.a.a[lt] === undefined && (_wx.a.a[lt] = [
      [
        [-1, 0, ["Command"],
          [_wx.a.p], null, "ClickCommand", null, _wx.a.cc, 0, null, null, null
        ],
        [-1, 0, ["IsSelected"],
          [_wx.a.bh], null, "AriaCheckedState", null, _wx.a.hY, 1, _wx.a.eh(), null, 0
        ],
        [-1, 0, ["AriaLabel"],
          [_wx.a.ep], null, "AriaLabel", null, _wx.a.q, 1, null, null, null
        ],
        [-1, 5, ["IsHidden"],
          [_wx.a.bx], null, "hidden", null, null, 0, null, null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[16].cloneNode(!0);
    var n = new _b.J(r.children[0]);
    n.A(-1);
    var u = new _fc.g;
    var t = new _fc.c;
    t.U(_j.f.a(["Command"], [_wx.a.p], null, "Command", null, _wx.a.f, 0));
    t.j("ENTER");
    var i = new _fc.c;
    i.U(_j.f.a(["Command"], [_wx.a.p], null, "Command", null, _wx.a.f, 0));
    i.j("SPACE");
    u.a([t, i]);
    n.C([u]);
    n.y("CalendarNavigationHeaderView.Mouse.MenuItemRadioViewTemplate._tidk");
    return new _j.a(r, [n]).l({
      FocusControl: n
    })
  }, "", _fm.c, _fce.n, function (n) {
    return new _fce.n(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var vt = "CalendarNavigationHeaderView.Mouse.SharePrintMenuItemViewTemplate._tidl";
  new _j.d(vt, function () {
    _wx.a.a[vt] === undefined && (_wx.a.a[vt] = [
      [
        [-1, 1, ["IsHovered"],
          [_wx.a.cp], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ],
        [-1, 0, ["ImageId"],
          [_wx.a.er], null, "Id", null, _wx.a.bw, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["IsHovered"],
          [_wx.a.cp], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ],
        [-1, 0, ["HoveredImageId"],
          [_wx.a.eq], null, "Id", null, _wx.a.bw, 1, null, null, null
        ]
      ],
      [
        [-1, 0, ["Text"],
          [_wx.a.by], null, "Text", null, _wx.a.A, 1, null, null, null
        ],
        [-1, 5, ["IsSelected"],
          [_wx.a.bh], null, "ms-font-color-themePrimary", null, null, 0, null, null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[17].cloneNode(!0);
    var r = new _fc.a(n.children[2]);
    var i = new _fc.d(n.children[1], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    return new _j.a(n, [t, i, r])
  }, "", _fm.c, _b.F, function (n) {
    return new _b.F(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var at = "CalendarNavigationHeaderView.Mouse.SharePrintMenuItemViewTemplate";
  new _j.d(at, function () {
    _wx.a.a[at] === undefined && (_wx.a.a[at] = [
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 3],
        [-1, 0, ["Command"],
          [_wx.a.p], null, "ClickCommand", null, _wx.a.cc, 1, null, null, null
        ],
        [-1, 5, ["IsHidden"],
          [_wx.a.bx], null, "hidden", null, null, 0, null, null, null
        ],
        [-1, 5, ["Command", "CanExecute"],
          [_wx.a.p, _wx.a.cn], null, "_wx_M ms-font-color-neutralTertiary", null, null, 0, _wx.a.d(), null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[18].cloneNode(!0);
    var n = new _b.F(r.children[0]);
    n.g(!0);
    var u = new _fc.g;
    var t = new _fc.c;
    t.U(_j.f.a(["Command"], [_wx.a.p], null, "Command", null, _wx.a.f, 0));
    t.j("ENTER");
    var i = new _fc.c;
    i.U(_j.f.a(["Command"], [_wx.a.p], null, "Command", null, _wx.a.f, 0));
    i.j("SPACE");
    u.a([t, i]);
    n.C([u]);
    n.y("CalendarNavigationHeaderView.Mouse.SharePrintMenuItemViewTemplate._tidl");
    return new _j.a(r, [n])
  }, "", _fm.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var e = "CalendarNavigationHeaderView.Mouse";
  new _j.d(e, function () {
    _wx.a.a[e] === undefined && (_wx.a.a[e] = [null, [
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.m],
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 0, ["TimeStripMode"],
          [_wx.a.fH], null, "Mode", null, _wx.a.hL, 1, null, null, 0
        ],
        [-1, 0, ["MainViewModel", "DisplayedDate"],
          [_wx.a.bs, _wx.a.bA], _wx.a.bC, "SelectedDate", _wx.a.hK, _wx.a.hM, 2, null, null, null
        ]
      ],
      [
        [-1, 0, ["IsDayView"],
          [_wx.a.fD], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ]
      ],
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.m],
        [-1, 5, ["IsHeaderInTwoLineMode"],
          [_wx.a.hN], null, "_wx_Q", null, null, 1, null, null, null
        ]
      ],
      [
        [-1, 0, ["CalendarActionMenuItems"],
          [_wx.a.fy], null, "DataSource", null, _wx.a.V, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 52],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.Z],
        [-1, 0, ["ViewBarItems"],
          [_wx.a.hA], null, "DataSource", null, _wx.a.V, 1, null, null, null
        ],
        [-1, 0, ["SelectedViewBarItem"],
          [_wx.a.hz], _wx.a.hB, "SelectedItem", _wx.a.ch, _wx.a.ci, 2, null, null, null
        ]
      ],
      [
        [-1, 0, ["GoToTodayMenuItem"],
          [_wx.a.hv], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[19].cloneNode(!0);
    var v = new _j.c(_j.a.a(t, [0, 2, 1, 1]));
    v.y("CalendarNavigationHeaderView.Mouse.MenuItemViewTemplate");
    var n = new _fce.a(_j.a.a(t, [0, 2, 1, 0]), _j.b.Instance.a(_ff.a));
    n.bi("_wx_D ms-font-l ms-font-weight-semilight ms-font-color-neutralPrimary");
    n.v("CalendarNavigationHeaderView.Mouse.MenuItemRadioViewTemplate");
    n.A(-1);
    n.bd = !0;
    n.bc(function () {
      var t = _wx.a.b.childNodes[1].cloneNode(!0).childNodes[0];
      var n = new _fce.n(t);
      n.d = !0;
      n.b(!1);
      return n
    });
    var a = new _fc.g;
    var f = new _fc.c;
    f.W(_j.f.a(["ContextParent", "FocusOnNextItemCommand"], [_wx.a.bi, _wx.a.cf], null, "Command", null, _wx.a.f, 1));
    f.j("RIGHTARROW");
    f.m = !1;
    var i = new _fc.c;
    i.W(_j.f.a(["ContextParent", "FocusOnPreviousItemCommand"], [_wx.a.bi, _wx.a.cg], null, "Command", null, _wx.a.f, 1));
    i.j("LEFTARROW");
    i.m = !1;
    var r = new _fc.c;
    r.W(_j.f.a(["ContextParent", "FocusOnNextItemCommand"], [_wx.a.bi, _wx.a.cf], null, "Command", null, _wx.a.f, 1));
    r.j("DOWNARROW");
    r.m = !1;
    var u = new _fc.c;
    u.W(_j.f.a(["ContextParent", "FocusOnPreviousItemCommand"], [_wx.a.bi, _wx.a.cg], null, "Command", null, _wx.a.f, 1));
    u.j("UPARROW");
    u.m = !1;
    a.a([f, i, r, u]);
    n.C([a]);
    n.y("CalendarNavigationHeaderView.Mouse._tidi");
    var o = new _fce.a(_j.a.a(t, [0, 2, 0]), _j.b.Instance.a(_ff.a));
    o.v("CalendarNavigationHeaderView.Mouse.SharePrintMenuItemViewTemplate");
    o.y("CalendarNavigationHeaderView.Mouse._tidh");
    var y = new _j.i(_j.a.a(t, [0, 2]));
    var s = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    s.U(_j.f.b(101, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    s.i(!0);
    y.C([s]);
    var l = new _j.c(_j.a.a(t, [0, 1]));
    var c = new _wx.e(_j.a.a(t, [0, 0]), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j));
    c.y("CalendarDateRangeNavigationView.Mouse");
    var h = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    h.U(_j.f.b(102, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    h.i(!0);
    c.C([h]);
    var p = new _j.i(t.children[0]);
    return new _j.a(t, [p, c, l, y, o, n, v]).l({
      weatherContainer: l
    })
  }, "", _wx.b, _wx.i, function (n) {
    return new _wx.i(n, _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_j.j))
  }, !1, !1, !1, 0, _wx.a.a);
  var f = "CalendarShellMouseView";
  new _j.d(f, function () {
    _wx.a.a[f] === undefined && (_wx.a.a[f] = [null, [
        [-1, 0, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], _wx.a.eR, "IsExpanded", _wx.a.di, _wx.a.gQ, 2, null, null, !1
        ],
        [-1, 0, ["ContextViewModel", "SidePanelMonthPickerCount"],
          [_wx.a.j, _wx.a.eQ], _wx.a.eT, "MonthPickerCount", _wx.a.dL, _wx.a.hU, 2, null, null, 0
        ],
        [-1, 0, ["CalendarViewModel", "DateRangeType"],
          [_wx.a.Y, _wx.a.eH], null, "SidePanelMainViewType", null, _wx.a.dn, 1, null, null, 0
        ],
        [-1, 0, ["CalendarViewModel", "DisplayedDate"],
          [_wx.a.Y, _wx.a.bA], _wx.a.bC, "SidePanelSelectedDate", _wx.a.dk, _wx.a.dp, 2, null, null, null
        ],
        [-1, 0, ["ContextViewModel", "SidePanelItemsLoadedNotificationEnabled"],
          [_wx.a.j, _wx.a.eP], _wx.a.eS, "ItemsLoadedNotificationEnabled", _wx.a.dK, _wx.a.dN, 2, null, null, !1
        ],
        [-1, 0, ["CalendarViewModel", "SelectedDateItemsLoadedNotificationMessage"],
          [_wx.a.Y, _wx.a.eK], null, "ItemsLoadedNotificationMessage", null, _wx.a.hT, 1, null, null, null
        ],
        [-1, 0, ["SidePanelDisplayedDate"],
          [_wx.a.fL], _wx.a.fO, "SidePanelDisplayedDate", _wx.a.dj, _wx.a.dm, 2, null, null, null
        ],
        [-1, 2, ["SidePanelWidth"],
          [_wx.a.hD], null, _fce.c.b, null, null, 1, null, null, null
        ],
        [-1, 5, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "isCollapsed ms-bg-color-themeLight-hover", null, null, 0, _wx.a.d(), null, null
        ]
      ],
      [
        [-1, 0, ["MainViewNavigationStack"],
          [_wx.a.fK], null, "ActiveNavigationStack", null, _wx.a.dZ, 0, null, null, null
        ],
        [-1, 0, ["ViewModelsForCachedViews"],
          [_wx.a.fN], null, "ActiveItems", null, _wx.a.dY, 1, null, null, null
        ],
        [-1, 5, ["IsModernGroupNavigationSupported"],
          [_wx.a.hC], null, "_wx_S ms-border-color-neutralLight", null, null, 0, null, null, null
        ]
      ],
      [
        [-1, 0, ["CalendarItemRemover", "DialogTitle"],
          [_wx.a.bt, _wx.a.ft], null, "DialogTitle", null, _wx.a.S, 1, null, null, null
        ],
        [-1, 0, ["CalendarItemRemover", "DialogMessage"],
          [_wx.a.bt, _wx.a.fs], null, "Message", null, _wx.a.bu, 1, null, null, null
        ],
        [-1, 0, ["CalendarItemRemover", "DeleteRecurringEventDialogButtonData"],
          [_wx.a.bt, _wx.a.fr], null, "ButtonDataList", null, _wx.a.R, 1, null, null, null
        ],
        [-1, 0, ["CalendarItemRemover", "IsDeleteRecurringEventDialogShown"],
          [_wx.a.bt, _wx.a.fu], _wx.a.fv, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[20].cloneNode(!0);
    var u = new _b.o(r.children[1], _j.b.Instance.a(_y.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    var n = new _n.g(_j.a.a(r, [0, 1]), _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
    n.i = 1;
    n.eI(_fce.c.a, 4);
    n.z.parentNode.removeChild(n.z);
    var t = new _wx.d(_j.a.a(r, [0, 0]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_a.e), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j), _j.b.Instance.a(_b.Y), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.v), _j.b.Instance.a(_j.I));
    t.bv = "_wx_T";
    t.eI(_fce.c.a, 3);
    t.z.parentNode.removeChild(t.z);
    var i = new _fce.c(r.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    i.b(2);
    i.c = !1;
    i.a.a(t);
    i.a.a(n);
    return new _j.a(r, [i, t, n, u]).l({
      conductor: n
    }).c(n)
  }, "", _wx.c, _cb.bG, function (n) {
    return new _cb.bG(n, _j.b.Instance.a(_b.z), _j.b.Instance.a(_y.a))
  }, !0, !1, !1, 0, _wx.a.a);
  var o = "CalendarSidePanelView.Mouse.CalendarSidePanelSearchHeader._tidn";
  new _j.d(o, function () {
    _wx.a.a[o] === undefined && (_wx.a.a[o] = [
      [
        [-1, 0, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ]
      ]
    ]);
    var i = _wx.a.b.childNodes[21].cloneNode(!0);
    var t = new _j.c(i.children[0]);
    t.y("CalendarSearchBox");
    var n = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    n.U(_j.f.b(104, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0)).U(_j.f.a(["ContextViewModel", "IsModuleSidePanelExpanded"], [_wx.a.j, _wx.a.k], null, "IsEnabled", null, _wx.a.dW, 1, null, null, !1));
    n.i(!0);
    t.C([n]);
    return new _j.a(i, [t])
  }, "", _wx.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var h = "CalendarSidePanelView.Mouse.CalendarSidePanelSearchHeader._tidp";
  new _j.d(h, function () {
    _wx.a.a[h] === undefined && (_wx.a.a[h] = [
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _fm.a.m],
        [-1, 1, ["SearchButtonClickCommand"],
          [_wx.a.hW], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[22].cloneNode(!0);
    var i = new _fc.b(t.children[0]);
    var n = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    n.U(_j.f.b(104, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0)).U(_j.f.a(["ContextViewModel", "IsModuleSidePanelExpanded"], [_wx.a.j, _wx.a.k], null, "IsEnabled", null, _wx.a.dW, 1, _wx.a.d(), null, !1));
    n.i(!0);
    i.C([n]);
    return new _j.a(t, [i])
  }, "", _wx.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var s = "CalendarSidePanelView.Mouse.CalendarSidePanelSearchHeader";
  new _j.d(s, function () {
    _wx.a.a[s] === undefined && (_wx.a.a[s] = [
      [
        [-1, 1, ["TemplatedParent", "TemplatedParent", "ShouldHideHeaderCalendarSearchBox"],
          [_wx.a.c, _wx.a.c, _wx.a.gN], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 1, ["TemplatedParent", "TemplatedParent", "ShouldHideHeaderCalendarSearchIcon"],
          [_wx.a.c, _wx.a.c, _wx.a.gO], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[23].cloneNode(!0);
    var i = new _j.c(t.children[1]);
    i.y("CalendarSidePanelView.Mouse.CalendarSidePanelSearchHeader._tidp");
    var n = new _j.c(t.children[0]);
    n.y("CalendarSidePanelView.Mouse.CalendarSidePanelSearchHeader._tidn");
    return new _j.a(t, [n, i]).l({
      SearchBox: n
    })
  }, "", _wx.c, _wx.f, function (n) {
    return new _wx.f(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var t = "CalendarSidePanelView.Mouse._tidm";
  new _j.d(t, function () {
    _wx.a.a[t] === undefined && (_wx.a.a[t] = [
      [
        [-1, 1, ["TemplatedParent", "SearchButtonClickAction"],
          [_wx.a.c, _wx.a.hS], null, "ClickAction", null, _wx.a.hX, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _y.e.g()],
        [-1, 4, null, null, null, "HoveredImageId", null, _wx.a.U, 0, null, null, null, _y.e.k()],
        [-1, 4, null, null, null, "CheckedImageId", null, _wx.a.ck, 0, null, null, null, _y.e.d()],
        [-1, 4, null, null, null, "HoveredCheckedImageId", null, _wx.a.cl, 0, null, null, null, _y.e.h()],
        [-1, 1, ["TemplatedParent", "IsExpandButtonHidden"],
          [_wx.a.c, _wx.a.hP], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ],
        [-1, 1, ["TemplatedParent", "ToggleIsExpandedCommand"],
          [_wx.a.c, _wx.a.dl], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ],
        [-1, 1, ["TemplatedParent", "NavigationPaneButtonAriaLabel"],
          [_wx.a.c, _wx.a.dM], null, "AriaLabel", null, _wx.a.T, 1, null, null, null
        ],
        [-1, 0, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "IsChecked", null, _wx.a.cm, 1, _wx.a.d(), null, !1
        ],
        [-1, 5, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "_wx_01 fullWidth", null, null, 0, _wx.a.d(), null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[24].cloneNode(!0);
    var r = new _fc.j(n.children[1]);
    r.j("_wx_21");
    var i = new _wx.f(n.children[0]);
    i.y("CalendarSidePanelView.Mouse.CalendarSidePanelSearchHeader");
    return new _j.a(n, [i, r])
  }, "", _wx.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var n = "CalendarSidePanelView.Mouse._tids";
  new _j.d(n, function () {
    _wx.a.a[n] === undefined && (_wx.a.a[n] = [
      [
        [-1, 0, ["AllModernGroupsViewModel"],
          [_wx.a.fJ], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ]
    ]);
    var i = _wx.a.b.childNodes[5].cloneNode(!0);
    var t = new _j.c(i.children[0]);
    t.y("CalendarPickerModernGroupsView");
    return new _j.a(i, [t])
  }, "", _wx.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var i = "CalendarSidePanelView.Mouse.InnerDockArea";
  new _j.d(i, function () {
    _wx.a.a[i] === undefined && (_wx.a.a[i] = [null, [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.G],
        [-1, 3, ["TemplatedParent", "MonthPickerListHeight"],
          [_wx.a.c, _wx.a.hR], _wx.a.hV, _fce.c.b, null, null, 2, null, null, null
        ],
        [-1, 1, ["TemplatedParent", "MonthPickerCount"],
          [_wx.a.c, _wx.a.dL], null, "NumberOfPickers", null, _wx.a.eA, 1, null, null, 0
        ],
        [-1, 1, ["TemplatedParent", "SidePanelSelectedDate"],
          [_wx.a.c, _wx.a.dk], _wx.a.dp, "SelectedDate", _wx.a.ew, _wx.a.eB, 2, null, null, null
        ],
        [-1, 1, ["TemplatedParent", "SidePanelDisplayedDate"],
          [_wx.a.c, _wx.a.dj], _wx.a.dm, "DisplayedDate", _wx.a.eu, _wx.a.ey, 2, null, null, null
        ],
        [-1, 1, ["TemplatedParent", "SidePanelMainViewType"],
          [_wx.a.c, _wx.a.gP], _wx.a.dn, "SelectionType", _wx.a.ex, _wx.a.eC, 2, null, null, 0
        ],
        [-1, 1, ["TemplatedParent", "ItemsLoadedNotificationEnabled"],
          [_wx.a.c, _wx.a.dK], _wx.a.dN, "HasFocusIn", _wx.a.ev, _wx.a.ez, 2, null, null, !1
        ]
      ],
      [
        [-1, 1, ["TemplatedParent", "HideCalendarPicker"],
          [_wx.a.c, _wx.a.dh], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.CK],
        [-1, 1, ["TemplatedParent", "HideCalendarPicker"],
          [_wx.a.c, _wx.a.dh], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ]
    ]);
    var u = _wx.a.b.childNodes[25].cloneNode(!0);
    var o = new _j.c(_j.a.a(u, [0, 1, 0]));
    o.y("CalendarPickerViewWrapper");
    var f = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    f.U(_j.f.b(106, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    f.i(!0);
    o.C([f]);
    var r = new _fce.g(_j.a.a(u, [0, 1]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
    r.eI(_fce.c.a, 4);
    r.eI(_fce.c.d, 100);
    r.z.parentNode.removeChild(r.z);
    var n = new _dx.h(_j.a.a(u, [0, 0]), _j.b.Instance.a(_ca.b), _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j));
    n.eI(_fce.c.a, 0);
    n.eI(_fce.c.d, 243);
    n.eI(_fce.c.c, !0);
    n.eI(_fce.c.m, !0);
    n.eI(_fce.c.o, 243);
    n.eI(_fce.c.l, !0);
    n.e = 238;
    n.i = 5;
    n.f = 190;
    n.r = !0;
    var e = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    e.U(_j.f.b(105, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    e.i(!0);
    n.C([e]);
    n.z.parentNode.removeChild(n.z);
    var t = new _fce.c(u.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    t.c = !1;
    t.l = 10;
    t.m = !0;
    t.b(2);
    t.a.a(n);
    t.a.a(r);
    return new _j.a(u, [t, n, r, o])
  }, "", _wx.c, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var u = "CalendarSidePanelView.Mouse";
  new _j.d(u, function () {
    _wx.a.a[u] === undefined && (_wx.a.a[u] = [
      [
        [-1, 4, null, null, null, "SpinnerSize", null, _wx.a.el, 0, null, null, 0, 1],
        [-1, 1, ["IsBusyLoadingControls"],
          [_wx.a.gJ], null, "IsBusy", null, _wx.a.ek, 1, null, null, !1
        ]
      ],
      [
        [-1, 5, ["IsModuleSwitcherEnabled"],
          [_wx.a.hQ], null, "_wx_11", null, null, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.Q]
      ],
      [
        [-1, 1, ["IsExpanded"],
          [_wx.a.di], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ]
      ],
      [
        [-1, 3, ["CalendarSearchBoxSize"],
          [_wx.a.gI], null, _fce.c.b, null, null, 1, null, null, null
        ],
        [-1, 1, ["ShouldHideCalendarSearch"],
          [_wx.a.gM], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 1, ["IsDefaultViewHidden"],
          [_wx.a.gK], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 1, ["IsGroupsViewHidden"],
          [_wx.a.gL], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 4, null, null, null, "DataContext", null, _wx.a.h, 0, null, null, null, _y.bf.a],
        [-1, 1, ["DataContext", "ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.g, _wx.a.j, _wx.a.k], null, "DisplayVertically", null, _wx.a.im, 1, _wx.a.d(), null, !1
        ],
        [-1, 1, ["DataContext", "SidePanelWidth"],
          [_wx.a.g, _wx.a.fM], null, "ContainerWidth", null, _wx.a.il, 1, null, null, 0
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[26].cloneNode(!0);
    var o = new _n.I(_j.a.a(n, [1, 2]), _j.b.Instance.a(_a.e));
    o.L(!0);
    var t = new _j.c(_j.a.a(n, [1, 1, 2]));
    t.eI(_fce.c.a, 4);
    t.y("CalendarSidePanelView.Mouse._tids");
    t.z.parentNode.removeChild(t.z);
    var i = new _j.c(_j.a.a(n, [1, 1, 1]));
    i.y("CalendarSidePanelView.Mouse.InnerDockArea");
    i.eI(_fce.c.a, 4);
    i.z.parentNode.removeChild(i.z);
    var f = new _j.c(_j.a.a(n, [1, 1, 0]));
    f.eI(_fce.c.a, 0);
    f.y("CalendarSearchBox");
    f.z.parentNode.removeChild(f.z);
    var r = new _fce.c(_j.a.a(n, [1, 1]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    r.c = !1;
    r.b(2);
    var s = new _j.c(_j.a.a(n, [1, 0]));
    s.y("CalendarSidePanelView.Mouse._tidm");
    var h = new _j.i(n.children[1]);
    var e = new _b.t(n.children[0], _j.b.Instance.a(_j.o), _j.b.Instance.a(_ff.a));
    e.a = 0;
    e.e(!0);
    r.a.a(f);
    r.a.a(i);
    r.a.a(t);
    return new _j.a(n, [e, h, s, r, f, i, t, o]).l({
      InnerDockAreaContainer: i,
      GroupInnerDockAreaContainer: t
    })
  }, "", _wx.c, _wx.d, function (n) {
    return new _wx.d(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_a.e), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j), _j.b.Instance.a(_b.Y), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.v), _j.b.Instance.a(_j.I))
  }, !1, !1, !1, 0, _wx.a.a);
  var r = "CalendarSidePanelSearchHeaderView.Mouse._tidv";
  new _j.d(r, function () {
    _wx.a.a[r] === undefined && (_wx.a.a[r] = [
      [
        [-1, 1, ["CurrentImageId"],
          [_wx.a.ej], null, "Id", null, _wx.a.bw, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "Text", null, _wx.a.A, 0, null, null, null, _u.R.IQ],
        [-1, 0, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[27].cloneNode(!0);
    var t = new _fc.a(n.children[1]);
    var i = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    return new _j.a(n, [i, t]).l({
      Label: t
    })
  }, "", _wx.c, _fc.b, function (n) {
    return new _fc.b(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var w = "CalendarSidePanelSearchHeaderView.Mouse";
  new _j.d(w, function () {
    _wx.a.a[w] === undefined && (_wx.a.a[w] = [
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 4, null, null, null, "AriaLabel", null, _wx.a.q, 0, null, null, null, _u.O.Q],
        [-1, 5, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "_wx_91", null, null, 0, _wx.a.d(), null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _n.b.dq()],
        [-1, 0, ["CalendarViewModel", "CreateItemByClickNewEventButtonCommand", "CanExecute"],
          [_wx.a.Y, _wx.a.cA, _wx.a.cn], null, "IsHidden", null, _wx.a.e, 1, _wx.a.d(), null, !0
        ],
        [-1, 0, ["CalendarViewModel", "CreateItemByClickNewEventButtonCommand"],
          [_wx.a.Y, _wx.a.cA], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "ImageId", null, _wx.a.u, 0, null, null, null, _y.e.g()],
        [-1, 4, null, null, null, "HoveredImageId", null, _wx.a.U, 0, null, null, null, _y.e.k()],
        [-1, 4, null, null, null, "CheckedImageId", null, _wx.a.ck, 0, null, null, null, _y.e.d()],
        [-1, 4, null, null, null, "HoveredCheckedImageId", null, _wx.a.cl, 0, null, null, null, _y.e.h()],
        [-1, 1, ["TemplatedParent", "ToggleIsExpandedCommand"],
          [_wx.a.c, _wx.a.dl], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ],
        [-1, 1, ["TemplatedParent", "NavigationPaneButtonAriaLabel"],
          [_wx.a.c, _wx.a.dM], null, "AriaLabel", null, _wx.a.T, 1, null, null, null
        ],
        [-1, 0, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "IsChecked", null, _wx.a.cm, 1, _wx.a.d(), null, !1
        ],
        [-1, 5, ["ContextViewModel", "IsModuleSidePanelExpanded"],
          [_wx.a.j, _wx.a.k], null, "_wx_e1", null, null, 0, _wx.a.d(), null, null
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[28].cloneNode(!0);
    var u = new _fc.j(n.children[1]);
    var i = new _fc.b(_j.a.a(n, [0, 0]));
    var t = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    t.U(_j.f.b(103, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    t.i(!0);
    i.C([t]);
    i.y("CalendarSidePanelSearchHeaderView.Mouse._tidv");
    var r = new _j.i(n.children[0]);
    return new _j.a(n, [r, i, u])
  }, "", _wx.c, _wx.f, function (n) {
    return new _wx.f(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var p = "DateNavigationContextView.Mouse._tidx";
  new _j.d(p, function () {
    _wx.a.a[p] === undefined && (_wx.a.a[p] = [
      [
        [-1, 0, ["SelectedMonth"],
          [_wx.a.bG], _wx.a.bH, "DisplayedDate", _wx.a.cr, _wx.a.ct, 2, null, null, null
        ],
        [-1, 0, ["DateRangeType"],
          [_wx.a.eU], null, "SelectionType", null, _wx.a.et, 1, null, null, 0
        ],
        [-1, 0, ["SelectedDate"],
          [_wx.a.eX], _wx.a.eY, "SelectedDate", _wx.a.cs, _wx.a.cu, 2, null, null, null
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[29].cloneNode(!0);
    var n = new _ca.e(_j.a.a(t, [0, 0]), _j.b.Instance.a(_ca.b), _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j));
    n.j = 210;
    n.m = 240;
    n.bu(!1);
    n.cu = !0;
    return new _j.a(t, [n])
  }, "", _cb.bB, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var b = "DateNavigationContextView.Mouse";
  new _j.d(b, function () {
    _wx.a.a[b] === undefined && (_wx.a.a[b] = [
      [
        [-1, 0, ["IsMonthlyDateRangeType"],
          [_wx.a.eW], null, "IsHidden", null, _wx.a.e, 1, null, null, !0
        ]
      ],
      [
        [-1, 0, ["SelectedMonth"],
          [_wx.a.bG], _wx.a.bH, "DisplayedDate", _wx.a.cr, _wx.a.ct, 2, null, null, null
        ],
        [-1, 0, ["SelectedMonth"],
          [_wx.a.bG], _wx.a.bH, "SelectedDate", _wx.a.cs, _wx.a.cu, 2, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "Text", null, _wx.a.ce, 0, null, null, null, _u.O.Bg],
        [-1, 0, ["GoToTodayCommand"],
          [_wx.a.eV], null, "ClickCommand", null, _wx.a.t, 1, null, null, null
        ]
      ]
    ]);
    var t = _wx.a.b.childNodes[30].cloneNode(!0);
    var r = new _fc.e(t.children[2]);
    var n = new _ca.e(_j.a.a(t, [1, 0]), _j.b.Instance.a(_ca.b), _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j));
    n.j = 210;
    n.m = 240;
    n.bu(!0);
    var i = new _j.c(t.children[0]);
    i.y("DateNavigationContextView.Mouse._tidx");
    return new _j.a(t, [i, n, r])
  }, "", _cb.bB, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !1, !1, 0, _wx.a.a);
  var d = "DayView.Mouse._tidz";
  new _j.d(d, function () {
    _wx.a.a[d] === undefined && (_wx.a.a[d] = [null, [
        [-1, 4, null, null, null, "DialogTitle", null, _wx.a.S, 0, null, null, null, _u.O.Bp],
        [-1, 0, ["OpenUpdatedMeetingDialogButtonData"],
          [_wx.a.cM], null, "ButtonDataList", null, _wx.a.R, 1, null, null, null
        ],
        [-1, 0, ["IsOpenUpdatedMeetingDialogShown"],
          [_wx.a.cG], _wx.a.cP, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ],
        [-1, 0, ["HideOpenUpdatedMeetingDialogCommand"],
          [_wx.a.cD], null, "CloseCommand", null, _wx.a.W, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "DialogTitle", null, _wx.a.S, 0, null, null, null, _u.O.CF],
        [-1, 4, null, null, null, "Message", null, _wx.a.bu, 0, null, null, null, _u.O.W],
        [-1, 0, ["NaturalInputSaveDialogButtonDataList"],
          [_wx.a.cH], null, "ButtonDataList", null, _wx.a.R, 1, null, null, null
        ],
        [-1, 0, ["IsNaturalInputSaveDialogShown"],
          [_wx.a.cF], _wx.a.cO, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ],
        [-1, 0, ["NaturalInputSaveDialogCloseCommand"],
          [_wx.a.cI], null, "CloseCommand", null, _wx.a.W, 1, null, null, null
        ],
        [-1, 0, ["NaturalInputSaveDialogShouldRestoreFocus"],
          [_wx.a.cJ], null, "SetFocusOnPreviousElement", null, _wx.a.cj, 1, null, null, !1
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[31].cloneNode(!0);
    var u = new _b.o(n.children[2], _j.b.Instance.a(_y.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    var r = new _b.o(n.children[1], _j.b.Instance.a(_y.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    var t = new _cb.t(n.children[0]);
    var i = new _cb.D(_j.b.Instance.a(_j.o), _j.b.Instance.a(_cb.m));
    i.U(_j.f.a(["CurrentColumnProviderViewModel"], [_wx.a.r], null, "ColumnProvider", null, _wx.a.dy, 1)).U(_j.f.a(["GridlineIntervalHeight"], [_wx.a.bn], null, "GridlineIntervalHeight", null, _wx.a.dz, 0, null, null, 0));
    t.b(i);
    return new _j.a(n, [t, r, u]).l({
      ListPanel: t
    })
  }, "", _cb.o, _cb.f, function (n) {
    return new _cb.f(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v))
  }, !1, !0, !1, 0, _wx.a.a);
  var k = "DayView.Mouse";
  new _j.d(k, function () {
    _wx.a.a[k] === undefined && (_wx.a.a[k] = [null, [
        [-1, 0, ["GridRowHeaderWidth"],
          [_wx.a.cV], null, "GridColumnOffset", null, _wx.a.gC, 1, null, null, 0
        ]
      ], null, [
        [-1, 0, ["DateRangeArray"],
          [_wx.a.cC], null, "Dates", null, _wx.a.gS, 1, null, null, null
        ],
        [-1, 0, ["CurrentColumnProviderViewModel", "ColumnWidth"],
          [_wx.a.r, _wx.a.cW], null, "ColumnWidth", null, _wx.a.gR, 1, null, null, 0
        ],
        [-1, 0, ["GridlineIntervalHeight"],
          [_wx.a.bn], null, "GridlineIntervalHeight", null, _wx.a.gT, 1, null, null, 0
        ]
      ],
      [
        [-1, 0, ["CurrentColumnProviderViewModel"],
          [_wx.a.r], null, "ColumnProvider", null, _wx.a.dv, 1, null, null, null
        ],
        [-1, 0, ["GridRowHeaderWidth"],
          [_wx.a.cV], null, "ColumnOffset", null, _wx.a.gV, 1, null, null, 0
        ],
        [-1, 0, ["ModuleContext", "CurrentCalendarModel"],
          [_wx.a.i, _wx.a.bD], null, "SelectedCalendar", null, _wx.a.gY, 1, null, null, null
        ],
        [-1, 0, ["GridSelectedRowColumnIndex"],
          [_wx.a.fe], _wx.a.fo, "SelectedRowColumnIndex", _wx.a.du, _wx.a.dx, 2, null, null, null
        ],
        [-1, 0, ["GridlineInterval"],
          [_wx.a.fd], null, "GridHourInterval", null, _wx.a.gX, 1, null, null, 3
        ],
        [-1, 0, ["GridlineIntervalHeight"],
          [_wx.a.bn], null, "RowHeight", null, _wx.a.gW, 1, null, null, 0
        ],
        [-1, 0, ["IsDraggingItem"],
          [_wx.a.X], null, "HandleClickEvent", null, _wx.a.dw, 1, _wx.a.d(), null, !1
        ],
        [-1, 0, ["ShouldHighLightCurrentTime"],
          [_wx.a.fl], null, "ShouldHighLightCurrentTime", null, _wx.a.gZ, 1, null, null, !1
        ],
        [-1, 0, ["OnGridClickCommand"],
          [_wx.a.fj], null, "ClickCommand", null, _wx.a.bj, 1, null, null, null
        ],
        [-1, 0, ["CreateItemOnCalendarCommand"],
          [_wx.a.eG], null, "DoubleClickCommand", null, _wx.a.bk, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "FocusInAction", null, _wx.a.bX, 0, null, null, null, _cb.W.a()],
        [-1, 1, ["CurrentItemViews"],
          [_wx.a.bq], _wx.a.dt, "SelectedItemViews", _wx.a.Z, _wx.a.dg, 2, null, null, null
        ],
        [-1, 1, ["ScrollRegion"],
          [_wx.a.gU], null, "ScrollRegion", null, _wx.a.df, 0, null, null, null
        ],
        [-1, 0, ["Items"],
          [_wx.a.fh], null, "DataSource", null, _wx.a.V, 0, null, null, null
        ],
        [-1, 0, ["ModuleContext", "CurrentSurfaceItem"],
          [_wx.a.i, _wx.a.cQ], _wx.a.cR, "SelectedItem", _wx.a.bW, _wx.a.bY, 2, null, null, null
        ],
        [-1, 0, ["OpenItemCommand"],
          [_wx.a.cK], null, "DoubleClickCommand", null, _wx.a.bk, 1, null, null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[33].cloneNode(!0);
    var i = new _cb.f(_j.a.a(r, [0, 1, 1, 0]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v));
    i.ci(!0);
    i.cf(!0);
    i.A(-1);
    var a = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    a.U(_j.f.a(["ModuleContext", "CurrentItemContextMenuViewModel"], [_wx.a.i, _wx.a.bm], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["IsItemContextMenuShown"], [_wx.a.eJ], _wx.a.eM, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1)).W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.be, 1, null, null, !1));
    var d = new _cb.V(_j.b.Instance.a(_cb.y));
    d.W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.bQ, 1, null, null, !1));
    var o = new _db.H(_j.b.Instance.a(_j.cd.$$(_j.t)));
    o.W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.bZ, 1, null, null, !1));
    o.c = 5;
    o.d = !0;
    o.h = 2;
    var g = new _cb.cc;
    g.U(_j.f.a(["DateRange"], [_wx.a.cB], null, "SelectedDateRange", null, _wx.a.bS, 1)).U(_j.f.a(["ModuleContext", "CurrentItem"], [_wx.a.i, _wx.a.C], null, "SelectedItemViewModel", null, _wx.a.bT, 1)).U(_j.f.a(["CalendarViewType"], [_wx.a.cx], null, "SelectedCalendarViewType", null, _wx.a.bR, 1, null, null, 0)).W(_j.f.a(["SelectedItemViews"], [_wx.a.Z], null, "SelectedItemViews", null, _wx.a.bU, 1));
    var y = new _fc.g;
    var c = new _fc.c;
    c.U(_j.f.a(["OpenItemViaHotkeyCommand"], [_wx.a.cL], null, "Command", null, _wx.a.f, 1));
    c.j("ENTER");
    var h = new _fc.c;
    h.U(_j.f.a(["CalendarItemRemover", "DeleteItemOrSeriesCommand"], [_wx.a.cw, _wx.a.bI], null, "Command", null, _wx.a.f, 1));
    h.j("DELETE");
    var s = new _fc.c;
    s.U(_j.f.a(["CopyItemCommand"], [_wx.a.cz], null, "Command", null, _wx.a.f, 1));
    s.k = 2;
    s.j("C");
    y.a([c, h, s]);
    i.C([a, d, o, g, y]);
    i.bc(function () {
      var t = _wx.a.b.childNodes[32].cloneNode(!0).childNodes[0];
      var n = new _cb.i(t, _j.b.Instance.a(_y.a), _j.b.Instance.a(_dg.h), _j.b.Instance.a(_j.cc.$$(_cc.h)), _j.b.Instance.a(_ff.b), _j.b.Instance.a(_cc.c), _j.b.Instance.a(_h.e), _j.b.Instance.a(_cb.d));
      n.W(_j.f.a(["DataContext", "CanDimItems"], [_wx.a.g, _wx.a.cy], null, "CanDim", null, _wx.a.dd, 0, null, null, !1)).W(_j.f.a(["DataContext", "ModuleContext", "CurrentCalendarModel"], [_wx.a.g, _wx.a.i, _wx.a.bD], null, "SelectedCalendar", null, _wx.a.de, 1));
      return n
    });
    i.y("DayView.Mouse._tidz");
    var n = new _cb.bO(_j.a.a(r, [0, 1, 1]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_b.z), _j.b.Instance.a(_j.v), _j.b.Instance.a(_cc.c), _j.b.Instance.a(_ca.b));
    n.i("_wx_r1 ms-border-color-neutralLight");
    n.g("_wx_u1 ms-border-color-neutralLight");
    n.cQ("_wx_x1 ms-bg-color-themePrimary ms-border-color-themePrimary");
    n.bc("_wx_v1 ms-font-m semilight ms-font-color-neutralPrimary");
    n.dG("_wx_v1 ms-font-m semilight ms-font-color-white");
    n.cb("_wx_s1 ms-border-color-neutralLight");
    n.cG("_wx_t1 ms-border-color-neutralLight");
    n.D(47);
    n.A(-1);
    var b = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    b.U(_j.f.a(["ViewContextMenuViewModel"], [_wx.a.bl], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["ViewContextMenuViewModel", "IsShown"], [_wx.a.bl, _wx.a.bf], _wx.a.bg, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1)).W(_j.f.a(["EnableGridBehaviors"], [_wx.a.br], null, "IsEnabled", null, _wx.a.be, 1, null, null, !1));
    var w = new _cb.cz;
    w.U(_j.f.a(["IsDraggingItem"], [_wx.a.X], null, "IsEnabled", null, _wx.a.ha, 1, _wx.a.d(), null, !1)).U(_j.f.a(["OnGridSelectCommand"], [_wx.a.fk], null, "MouseUpCommand", null, _wx.a.hb, 1));
    var e = new _cb.cL(_j.b.Instance.a(_j.o), _j.b.Instance.a(_g.h), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.bF.$$(_cb.i)), _j.b.Instance.a(_cb.bs), _j.b.Instance.a(_j.cd.$$(_j.t)));
    e.U(_j.f.a(["IsDraggingItem"], [_wx.a.X], _wx.a.cN, "IsDragging", _wx.a.bL, _wx.a.bN, 2, null, null, !1)).U(_j.f.a(["DropItemCommand"], [_wx.a.bB], null, "DropCommand", null, _wx.a.ca, 1)).U(_j.f.a(["CurrentColumnProviderViewModel"], [_wx.a.r], null, "ColumnProvider", null, _wx.a.cY, 1)).U(_j.f.a(["ModuleContext", "CurrentItem"], [_wx.a.i, _wx.a.C], _wx.a.bF, "SelectedItem", _wx.a.bM, _wx.a.bO, 2)).U(_j.f.a(["ModuleContext", "SelectedCalendarsModel", "SelectedCalendars"], [_wx.a.i, _wx.a.bE, _wx.a.bz], null, "SelectedCalendars", null, _wx.a.da, 1)).W(_j.f.a(["EnableGridBehaviors"], [_wx.a.br], null, "IsEnabled", null, _wx.a.cb, 1, null, null, !1)).W(_j.f.a(["TemplatedParent", "ActiveDroppable"], [_wx.a.c, _wx.a.dq], _wx.a.ds, "ActiveDroppable", _wx.a.db, _wx.a.dc, 2)).W(_j.f.a(["TemplatedParent", "CurrentItemViews"], [_wx.a.c, _wx.a.bq], null, "SelectedItemViews", null, _wx.a.bP, 1)).W(_j.f.a(["TemplatedParent", "IsSideBySideMode"], [_wx.a.c, _wx.a.dr], null, "IsSideBySideMode", null, _wx.a.cZ, 1, null, null, !1));
    e.E = !0;
    e.t = "_wx_w1";
    e.bn = !1;
    n.C([b, w, e]);
    var l = new _cb.bk(_j.a.a(r, [0, 1, 0]), _j.b.Instance.a(_ca.b), _j.b.Instance.a(_y.a));
    l.y("CurrentTimeMarkerView");
    l.D(47);
    var f = new _fce.g(_j.a.a(r, [0, 1]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
    f.z.parentNode.removeChild(f.z);
    var t = new _cb.Z(_j.a.a(r, [0, 0]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.h));
    t.eI(_fce.c.a, 0);
    t.y("CalendarAllDayWellView");
    t.A(-1);
    var v = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    v.U(_j.f.a(["AllDayWellContextMenuViewModel"], [_wx.a.cU], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["AllDayWellContextMenuViewModel", "IsShown"], [_wx.a.cU, _wx.a.bf], _wx.a.bg, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1));
    var p = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    p.U(_j.f.a(["IsReadyToShowData"], [_wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    t.C([v, p]);
    t.z.parentNode.removeChild(t.z);
    var u = new _fce.c(r.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    u.b(2);
    u.c = !1;
    u.a.a(t);
    u.a.a(f);
    return new _j.a(r, [u, t, f, l, n, i]).l({
      AllDayWellView: t,
      ItemsScrollRegion: f,
      listView: i
    })
  }, "", _cb.o, _cb.u, function (n) {
    return new _cb.u(n, _j.b.Instance.a(_y.a))
  }, !1, !1, !1, 0, _wx.a.a);
  var l = "MonthAgendaView.Mouse";
  new _j.d(l, function () {
    _wx.a.a[l] === undefined && (_wx.a.a[l] = [
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 47],
        [-1, 0, ["OnDateClickedCommand"],
          [_wx.a.fW], null, "ClickCommand", null, _wx.a.bj, 1, null, null, null
        ],
        [-1, 0, ["VMSelectedDate"],
          [_wx.a.fT], _wx.a.fV, "SelectedDate", _wx.a.M, _wx.a.N, 2, null, null, null
        ],
        [-1, 0, ["DisplayedDate"],
          [_wx.a.bA], _wx.a.bC, "DisplayedDate", _wx.a.hl, _wx.a.hn, 2, null, null, null
        ],
        [-1, 0, ["ModuleContext", "CurrentItem"],
          [_wx.a.i, _wx.a.C], null, "SelectedItem", null, _wx.a.hk, 1, null, null, null
        ],
        [-1, 0, ["IsDataProcessed"],
          [_wx.a.cE], null, "AriaBusyState", null, _wx.a.cq, 1, _wx.a.d(), null, !1
        ],
        [-1, 5, ["AgendaViewModel", "IsAgendaViewExpanded"],
          [_wx.a.cX, _wx.a.cv], null, "_wx_C1", null, null, 0, _wx.a.d(), null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "AriaRole", null, _wx.a.n, 0, null, null, 0, 48],
        [-1, 0, ["AgendaViewModel"],
          [_wx.a.cX], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ],
        [0, 0, ["AccessibleName"],
          [_wx.a.eE], null, "AriaLabel", null, _wx.a.q, 1, null, null, null
        ],
        [0, 0, ["IsDataProcessed"],
          [_wx.a.cE], null, "AriaBusyState", null, _wx.a.cq, 1, _wx.a.d(), null, !1
        ],
        [0, 5, ["IsAgendaViewExpanded"],
          [_wx.a.cv], null, "_wx_B1 ms-bg-color-themeLight-hover", null, null, 0, _wx.a.d(), null, null
        ]
      ]
    ]);
    var r = _wx.a.b.childNodes[34].cloneNode(!0);
    var t = new _j.c(r.children[1]);
    t.y("RightSidePanelView");
    t.A(-1);
    var u = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    u.U(_j.f.b(111, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    t.C([u]);
    var n = new _cb.bP(r.children[0], _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j), _j.b.Instance.a(_b.z), _j.b.Instance.a(_j.v));
    n.A(-1);
    var f = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
    f.U(_j.f.b(110, null, null, null, "Priority", null, _wx.a.o, 0, null, null, 0));
    var i = new _cb.cK(_j.b.Instance.a(_j.bF.$$(_cb.v)), _j.b.Instance.a(_cb.bs), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.h), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.cd.$$(_j.t)));
    i.U(_j.f.a(["IsDraggingItem"], [_wx.a.fS], _wx.a.fU, "IsDragging", _wx.a.bL, _wx.a.bN, 2, null, null, !1)).U(_j.f.a(["DropItemCommand"], [_wx.a.bB], null, "DropCommand", null, _wx.a.ca, 1)).U(_j.f.a(["ModuleContext", "CurrentItem"], [_wx.a.i, _wx.a.C], _wx.a.bF, "SelectedItem", _wx.a.bM, _wx.a.bO, 2)).W(_j.f.a(["EnableGridBehaviors"], [_wx.a.hm], null, "IsEnabled", null, _wx.a.cb, 1, null, null, !1)).W(_j.f.a(["SelectedItemViews"], [_wx.a.hj], null, "SelectedItemViews", null, _wx.a.bP, 1));
    i.E = !0;
    i.t = "_wx_D1 ms-bg-color-neutralLight";
    n.C([f, i]);
    return new _j.a(r, [n, t]).c(n)
  }, "", _cb.bX, _j.c, function (n) {
    return new _j.c(n)
  }, !0, !1, !1, 0, _wx.a.a);
  var dt = "MonthGridView.Mouse._tid21";
  new _j.d(dt, function () {
    var n = _wx.a.b.childNodes[35].cloneNode(!0);
    return new _j.a(n, [])
  }, "", _cb.p, _j.c, function (n) {
    return new _j.c(n)
  }, !1, !0, !1, 0, _wx.a.a);
  var c = "MonthGridView.Mouse";
  new _j.d(c, function () {
    _wx.a.a[c] === undefined && (_wx.a.a[c] = [null, null, null, null, null, null, null, null, null, null, [
        [-1, 1, ["OverlayPanelFactory"],
          [_wx.a.P], null, "OverlayPanelFactory", null, _wx.a.Q, 0, null, null, null
        ],
        [-1, 1, ["SelectedDate"],
          [_wx.a.M], _wx.a.N, "SelectedDate", _wx.a.l, _wx.a.m, 2, null, null, null
        ],
        [-1, 0, ["Week0"],
          [_wx.a.fX], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["OverlayPanelFactory"],
          [_wx.a.P], null, "OverlayPanelFactory", null, _wx.a.Q, 0, null, null, null
        ],
        [-1, 1, ["SelectedDate"],
          [_wx.a.M], _wx.a.N, "SelectedDate", _wx.a.l, _wx.a.m, 2, null, null, null
        ],
        [-1, 0, ["Week1"],
          [_wx.a.fY], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["OverlayPanelFactory"],
          [_wx.a.P], null, "OverlayPanelFactory", null, _wx.a.Q, 0, null, null, null
        ],
        [-1, 1, ["SelectedDate"],
          [_wx.a.M], _wx.a.N, "SelectedDate", _wx.a.l, _wx.a.m, 2, null, null, null
        ],
        [-1, 0, ["Week2"],
          [_wx.a.fZ], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["OverlayPanelFactory"],
          [_wx.a.P], null, "OverlayPanelFactory", null, _wx.a.Q, 0, null, null, null
        ],
        [-1, 1, ["SelectedDate"],
          [_wx.a.M], _wx.a.N, "SelectedDate", _wx.a.l, _wx.a.m, 2, null, null, null
        ],
        [-1, 0, ["Week3"],
          [_wx.a.ga], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["OverlayPanelFactory"],
          [_wx.a.P], null, "OverlayPanelFactory", null, _wx.a.Q, 0, null, null, null
        ],
        [-1, 1, ["SelectedDate"],
          [_wx.a.M], _wx.a.N, "SelectedDate", _wx.a.l, _wx.a.m, 2, null, null, null
        ],
        [-1, 0, ["Week4"],
          [_wx.a.gb], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["OverlayPanelFactory"],
          [_wx.a.P], null, "OverlayPanelFactory", null, _wx.a.Q, 0, null, null, null
        ],
        [-1, 1, ["SelectedDate"],
          [_wx.a.M], _wx.a.N, "SelectedDate", _wx.a.l, _wx.a.m, 2, null, null, null
        ],
        [-1, 0, ["Week5"],
          [_wx.a.gc], null, "DataContext", null, _wx.a.h, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "DialogTitle", null, _wx.a.S, 0, null, null, null, _u.O.Bp],
        [-1, 0, ["OpenUpdatedMeetingDialogButtonData"],
          [_wx.a.cM], null, "ButtonDataList", null, _wx.a.R, 1, null, null, null
        ],
        [-1, 0, ["IsOpenUpdatedMeetingDialogShown"],
          [_wx.a.cG], _wx.a.cP, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ],
        [-1, 0, ["HideOpenUpdatedMeetingDialogCommand"],
          [_wx.a.cD], null, "CloseCommand", null, _wx.a.W, 1, null, null, null
        ]
      ],
      [
        [-1, 4, null, null, null, "DialogTitle", null, _wx.a.S, 0, null, null, null, _u.O.CF],
        [-1, 4, null, null, null, "Message", null, _wx.a.bu, 0, null, null, null, _u.O.W],
        [-1, 0, ["NaturalInputSaveDialogButtonDataList"],
          [_wx.a.cH], null, "ButtonDataList", null, _wx.a.R, 1, null, null, null
        ],
        [-1, 0, ["IsNaturalInputSaveDialogShown"],
          [_wx.a.cF], _wx.a.cO, "IsShown", _wx.a.y, _wx.a.z, 2, null, null, !1
        ],
        [-1, 0, ["NaturalInputSaveDialogCloseCommand"],
          [_wx.a.cI], null, "CloseCommand", null, _wx.a.W, 0, null, null, null
        ],
        [-1, 0, ["NaturalInputSaveDialogShouldRestoreFocus"],
          [_wx.a.cJ], null, "SetFocusOnPreviousElement", null, _wx.a.cj, 1, null, null, !1
        ]
      ]
    ]);
    var n = _wx.a.b.childNodes[36].cloneNode(!0);
    var ft = new _b.o(_j.a.a(n, [1, 1, 7]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    var ut = new _b.o(_j.a.a(n, [1, 1, 6]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
    var e = new _cb.A(_j.a.a(n, [1, 1, 5]), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o));
    e.g = 5;
    e.D(49);
    var d = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    d.W(_j.f.a(["TemplatedParent", "DataContext", "IsReadyToShowData"], [_wx.a.c, _wx.a.g, _wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    e.C([d]);
    var t = new _cb.A(_j.a.a(n, [1, 1, 4]), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o));
    t.g = 4;
    t.D(49);
    var g = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    g.W(_j.f.a(["TemplatedParent", "DataContext", "IsReadyToShowData"], [_wx.a.c, _wx.a.g, _wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    t.C([g]);
    var r = new _cb.A(_j.a.a(n, [1, 1, 3]), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o));
    r.g = 3;
    r.D(49);
    var rt = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    rt.W(_j.f.a(["TemplatedParent", "DataContext", "IsReadyToShowData"], [_wx.a.c, _wx.a.g, _wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    r.C([rt]);
    var u = new _cb.A(_j.a.a(n, [1, 1, 2]), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o));
    u.g = 2;
    u.D(49);
    var nt = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    nt.W(_j.f.a(["TemplatedParent", "DataContext", "IsReadyToShowData"], [_wx.a.c, _wx.a.g, _wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    u.C([nt]);
    var i = new _cb.A(_j.a.a(n, [1, 1, 1]), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o));
    i.g = 1;
    i.D(49);
    var k = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    k.W(_j.f.a(["TemplatedParent", "DataContext", "IsReadyToShowData"], [_wx.a.c, _wx.a.g, _wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    i.C([k]);
    var f = new _cb.A(_j.a.a(n, [1, 1, 0]), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o));
    f.g = 0;
    f.D(49);
    var tt = new _cb.q(_j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(ICalendarScenarioContextManager));
    tt.W(_j.f.a(["TemplatedParent", "DataContext", "IsReadyToShowData"], [_wx.a.c, _wx.a.g, _wx.a.B], null, "IsDataAvailable", null, _wx.a.F, 1, null, null, !1));
    f.C([tt]);
    var s = new _j.i(_j.a.a(n, [1, 1]));
    s.A(-1);
    var it = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    it.U(_j.f.a(["ViewContextMenuViewModel"], [_wx.a.bl], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["ViewContextMenuViewModel", "IsShown"], [_wx.a.bl, _wx.a.bf], _wx.a.bg, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1));
    s.C([it]);
    var p = new _fc.a(_j.a.a(n, [1, 0, 6, 0]));
    p.D(6);
    var a = new _fc.a(_j.a.a(n, [1, 0, 5, 0]));
    a.D(6);
    var v = new _fc.a(_j.a.a(n, [1, 0, 4, 0]));
    v.D(6);
    var h = new _fc.a(_j.a.a(n, [1, 0, 3, 0]));
    h.D(6);
    var l = new _fc.a(_j.a.a(n, [1, 0, 2, 0]));
    l.D(6);
    var y = new _fc.a(_j.a.a(n, [1, 0, 1, 0]));
    y.D(6);
    var w = new _fc.a(_j.a.a(n, [1, 0, 0, 0]));
    w.D(6);
    var b = new _j.i(n.children[1]);
    var o = new _j.c(n.children[0]);
    o.K(!0);
    o.y("MonthGridView.Mouse._tid21");
    return new _j.a(n, [o, b, w, y, l, h, v, a, p, s, f, i, u, r, t, e, ut, ft]).l({
      WeekNumbersContainer: o,
      MonthContent: b,
      Header0: w,
      Header1: y,
      Header2: l,
      Header3: h,
      Header4: v,
      Header5: a,
      Header6: p,
      GridContainer: s,
      Week0: f,
      Week1: i,
      Week2: u,
      Week3: r,
      Week4: t,
      Week5: e
    })
  }, "", _cb.p, _cb.bn, function (n) {
    return new _cb.bn(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_g.h), _j.b.Instance.a(_j.j), _j.b.Instance.a(_b.z), _j.b.Instance.a(_j.v))
  }, !1, !1, !1, 0, _wx.a.a);
  var a = "MonthViewItemsOverlay.Mouse._tid91";
  new _j.d(a, function () {
    _wx.a.a[a] === undefined && (_wx.a.a[a] = [null]);
    var t = _wx.a.b.childNodes[37].cloneNode(!0);
    var n = new _fce.d(t.children[0]);
    n.q = !0;
    return new _j.a(t, [n]).l({
      ListPanel: n
    })
  }, "", _cb.bi, _cb.P, function (n) {
    return new _cb.P(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_a.r), _j.b.Instance.a(_j.Z), _j.b.Instance.a(_b.z), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v), _j.b.Instance.a(_j.bF.$$(_cb.v)))
  }, !1, !0, !1, 0, _wx.a.a);
  var y = "MonthViewItemsOverlay.Mouse";
  new _j.d(y, function () {
    _wx.a.a[y] === undefined && (_wx.a.a[y] = [
      [
        [-1, 4, null, null, null, "FocusInAction", null, _wx.a.bX, 0, null, null, null, _cb.W.a()],
        [-1, 0, ["Start"],
          [_wx.a.gf], null, "WeekStart", null, _wx.a.hr, 1, null, null, null
        ],
        [-1, 0, ["Items"],
          [_wx.a.ge], null, "RawSource", null, _wx.a.ho, 1, null, null, null
        ],
        [-1, 0, ["SelectedItem"],
          [_wx.a.gt], _wx.a.gw, "SelectedItem", _wx.a.bW, _wx.a.bY, 2, null, null, null
        ],
        [-1, 0, ["WeekIndex"],
          [_wx.a.gu], null, "WeekIndex", null, _wx.a.hq, 1, null, null, 0
        ],
        [-1, 0, ["ModuleContextViewModel", "SelectedCalendarsModel", "SelectedCalendars"],
          [_wx.a.bK, _wx.a.bE, _wx.a.bz], null, "SelectedCalendars", null, _wx.a.hp, 0, null, null, null
        ]
      ]
    ]);
    var e = _wx.a.b.childNodes[38].cloneNode(!0);
    var n = new _cb.P(e.children[0], _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_cb.n), _j.b.Instance.a(_a.r), _j.b.Instance.a(_j.Z), _j.b.Instance.a(_b.z), _j.b.Instance.a(_j.j), _j.b.Instance.a(_j.v), _j.b.Instance.a(_j.bF.$$(_cb.v)));
    n.bs = !1;
    n.bD(!1);
    n.bN = "_wx_32";
    n.ci(!0);
    n.cf(!0);
    n.A(-1);
    n.u = "_wx_22 ms-font-s";
    var f = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
    f.U(_j.f.a(["ModuleContextViewModel", "CurrentItemContextMenuViewModel"], [_wx.a.bK, _wx.a.bm], null, "MenuDataContext", null, _wx.a.x, 1)).U(_j.f.a(["IsItemContextMenuShown"], [_wx.a.gr], _wx.a.gv, "IsShown", _wx.a.v, _wx.a.w, 2, null, null, !1)).W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.be, 1, null, null, !1));
    var o = new _cb.V(_j.b.Instance.a(_cb.y));
    o.W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.bQ, 1, null, null, !1));
    var i = new _db.H(_j.b.Instance.a(_j.cd.$$(_j.t)));
    i.W(_j.f.a(["EnableDataBehaviors"], [_wx.a.s], null, "IsEnabled", null, _wx.a.bZ, 1, null, null, !1));
    i.c = 5;
    i.d = !1;
    var s = new _cb.cc;
    s.U(_j.f.a(["WeekDateRange"], [_wx.a.gn], null, "SelectedDateRange", null, _wx.a.bS, 1)).U(_j.f.a(["ModuleContextViewModel", "CurrentItem"], [_wx.a.bK, _wx.a.C], null, "SelectedItemViewModel", null, _wx.a.bT, 1)).U(_j.f.a(["CalendarViewType"], [_wx.a.gp], null, "SelectedCalendarViewType", null, _wx.a.bR, 1, null, null, 0)).W(_j.f.a(["SelectedItemViews"], [_wx.a.Z], null, "SelectedItemViews", null, _wx.a.bU, 1));
    var h = new _fc.g;
    var t = new _fc.c;
    t.U(_j.f.a(["CopyItemCommand"], [_wx.a.gq], null, "Command", null, _wx.a.f, 1));
    t.j("C");
    t.k = 2;
    var r = new _fc.c;
    r.U(_j.f.a(["OpenItemViaHotkeyCommand"], [_wx.a.gs], null, "Command", null, _wx.a.f, 1));
    r.j("ENTER");
    var u = new _fc.c;
    u.U(_j.f.a(["CalendarItemRemover", "DeleteItemOrSeriesCommand"], [_wx.a.go, _wx.a.bI], null, "Command", null, _wx.a.f, 1));
    u.j("DELETE");
    h.a([t, r, u]);
    n.C([f, o, i, s, h]);
    n.y("MonthViewItemsOverlay.Mouse._tid91");
    return new _j.a(e, [n]).l({
      ListView: n
    })
  }, "", _cb.bi, _cb.bd, function (n) {
    return new _cb.bd(n, _j.b.Instance.a(_ff.a))
  }, !1, !1, !1, 0, _wx.a.a);
  var v = "WeekInMonthGridView.Mouse";
  new _j.d(v, function () {
    _wx.a.a[v] === undefined && (_wx.a.a[v] = [
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents0"],
          [_wx.a.gg], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents1"],
          [_wx.a.gh], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents2"],
          [_wx.a.gi], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents3"],
          [_wx.a.gj], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents4"],
          [_wx.a.gk], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents5"],
          [_wx.a.gl], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ],
      [
        [-1, 1, ["SelectedDate"],
          [_wx.a.l], _wx.a.m, "SelectedDate", _wx.a.G, _wx.a.J, 2, null, null, null
        ],
        [-1, 1, ["DisplayedDate"],
          [_wx.a.O], null, "DisplayedDate", null, _wx.a.I, 1, null, null, null
        ],
        [-1, 0, ["TotalEvents6"],
          [_wx.a.gm], null, "TotalEvents", null, _wx.a.L, 1, null, null, 0
        ],
        [-1, 0, ["DateNumberClickedCommand"],
          [_wx.a.D], null, "DateNumberClickedCommand", null, _wx.a.H, 1, null, null, null
        ],
        [-1, 0, ["SelectedDateClickedCommand"],
          [_wx.a.E], null, "SelectedDateClickedCommand", null, _wx.a.K, 1, null, null, null
        ]
      ], null
    ]);
    var n = _wx.a.b.childNodes[39].cloneNode(!0);
    var s = new _j.c(n.children[7]);
    var f = new _cb.k(n.children[6], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    f.D(6);
    f.A(-1);
    f.c = "_wx_52 ms-border-color-themePrimary";
    f.b = "ms-bg-color-themeLighter";
    f.d = "ms-bg-color-neutralLighter";
    var e = new _cb.k(n.children[5], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    e.D(6);
    e.A(-1);
    e.c = "_wx_52 ms-border-color-themePrimary";
    e.b = "ms-bg-color-themeLighter";
    e.d = "ms-bg-color-neutralLighter";
    var o = new _cb.k(n.children[4], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    o.D(6);
    o.A(-1);
    o.c = "_wx_52 ms-border-color-themePrimary";
    o.b = "ms-bg-color-themeLighter";
    o.d = "ms-bg-color-neutralLighter";
    var i = new _cb.k(n.children[3], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    i.D(6);
    i.A(-1);
    i.c = "_wx_52 ms-border-color-themePrimary";
    i.b = "ms-bg-color-themeLighter";
    i.d = "ms-bg-color-neutralLighter";
    var t = new _cb.k(n.children[2], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    t.D(6);
    t.A(-1);
    t.c = "_wx_52 ms-border-color-themePrimary";
    t.b = "ms-bg-color-themeLighter";
    t.d = "ms-bg-color-neutralLighter";
    var u = new _cb.k(n.children[1], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    u.D(6);
    u.A(-1);
    u.c = "_wx_52 ms-border-color-themePrimary";
    u.b = "ms-bg-color-themeLighter";
    u.d = "ms-bg-color-neutralLighter";
    var r = new _cb.k(n.children[0], _j.b.Instance.a(_ca.b), _j.b.Instance.a(_j.cc.$$(_cc.j)), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j));
    r.D(6);
    r.A(-1);
    r.c = "_wx_52 ms-font-color-themePrimary ms-border-color-themePrimary";
    r.b = "ms-bg-color-themeLighter";
    r.d = "ms-bg-color-neutralLighter";
    return new _j.a(n, [r, u, t, i, o, e, f, s]).l({
      Day0: r,
      Day1: u,
      Day2: t,
      Day3: i,
      Day4: o,
      Day5: e,
      Day6: f,
      OverlayPanel: s
    })
  }, "", _cb.ct, _cb.A, function (n) {
    return new _cb.A(n, _j.b.Instance.a(_cb.n), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o))
  }, !1, !1, !1, 0, _wx.a.a)
};
CalendarSurfaceDesktopComponentV2.registerClass("CalendarSurfaceDesktopComponentV2", null, _a.kf, _j.ce);
_wx.g.registerClass("_wx.g");
_wx.k.registerClass("_wx.k", _lt.bg);
_wx.j.registerClass("_wx.j", _a.bw);
_wx.h.registerClass("_wx.h", _cb.cn.$$(_fm.k));
_wx.b.registerClass("_wx.b", _cb.c, _cb.cW);
_wx.l.registerClass("_wx.l", null, _cb.cp);
_wx.c.registerClass("_wx.c", _cb.Y);
_wx.i.registerClass("_wx.i", _j.c);
_wx.e.registerClass("_wx.e", _j.c);
_wx.d.registerClass("_wx.d", _cb.g);
_wx.f.registerClass("_wx.f", _j.c);
CalendarSurfaceDesktopComponentV2.$$cctor();
_wx.c.b = 210;
_wx.c.a = 51;
_wx.e.b = ["Mode", "DisplayedDateString", "PreviousButtonAccessibleName", "NextButtonAccessibleName"];
_wx.a.b = _wx.a.ei();
_wx.a.bb = null;
_wx.a.bc = null;
_wx.a.bd = null;
_wx.a.a = {};
_wx.a.$$cctor();
window.scriptsLoaded['microsoft.owa.calendar.surface.v2.desktop.js'] = 1;
window.scriptProcessEnd = window.scriptProcessEnd || {};
window.scriptProcessEnd['microsoft.owa.calendar.surface.v2.desktop.js'] = (new Date()).getTime();