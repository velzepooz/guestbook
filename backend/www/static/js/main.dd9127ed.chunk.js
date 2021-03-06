(this.webpackJsonpguestbook = this.webpackJsonpguestbook || []).push([[0], {
  34: function(e, a, t) {
    e.exports = {
      container: 'ReviewInfo_container__2Lj-R', name: 'ReviewInfo_name__EumIX', separator: 'ReviewInfo_separator__hZzF1',
    };
  },
  35: function(e, a, t) {
    e.exports = {
      inputsGroup: 'AddReviewPage_inputsGroup__3nJC-', formControl: 'AddReviewPage_formControl__2nY30', formErrorMessage: 'AddReviewPage_formErrorMessage__3LoRS', formErrorMessageShow: 'AddReviewPage_formErrorMessageShow__28wWf',
    };
  },
  41: function(e, a, t) {
    e.exports = {
      navigation: 'Navigation_navigation__1EgxP', navigationList: 'Navigation_navigationList__3oeQu', navigationItem: 'Navigation_navigationItem__1w7-E',
    };
  },
  42: function(e, a, t) {
    e.exports = {
      label: 'FormField_label__208Tl', input: 'FormField_input__vEfgV', inputError: 'FormField_inputError__2VfVg',
    };
  },
  43: function(e, a, t) {
    e.exports = {
      label: 'FormTextarea_label__nekD1', textarea: 'FormTextarea_textarea__3TVxs', textareaError: 'FormTextarea_textareaError__Rz2w2',
    };
  },
  44: function(e, a, t) {
    e.exports = {
      navigationLink: 'NavigationLink_navigationLink__32o_T', navigationLink_active: 'NavigationLink_navigationLink_active__rml7_',
    };
  },
  47: function(e, a, t) {
    e.exports = {
      empty: 'EmptyReviews_empty__3-bXa', link: 'EmptyReviews_link__2Axyh',
    };
  },
  48: function(e, a, t) {
    e.exports = {
      formWrapper: 'FormWrapper_formWrapper__3RyNe', heading: 'FormWrapper_heading__11cAj',
    };
  },
  53: function(e, a, t) {
    e.exports = { header: 'Header_header__1v0yI' };
  },
  54: function(e, a, t) {
    e.exports = { loader: 'ReviewPage_loader__1zjJ8' };
  },
  55: function(e, a, t) {
    e.exports = { heading: 'PageHeading_heading__15GDp' };
  },
  56: function(e, a, t) {
    e.exports = { review: 'Review_review__I6CH_' };
  },
  57: function(e, a, t) {
    e.exports = { heading: 'ReviewHeading_heading__2qzvp' };
  },
  58: function(e, a, t) {},
  59: function(e, a, t) {
    e.exports = { main: 'MainSection_main__1BqQH' };
  },
  61: function(e, a, t) {
    e.exports = { form: 'Form_form__3wvE7' };
  },
  62: function(e, a, t) {
    e.exports = { button: 'FormButton_button__EHMvY' };
  },
  68: function(e, a, t) {
    e.exports = t(98);
  },
  73: function(e, a, t) {},
  98: function(e, a, t) {
    'use strict'; t.r(a);

    const r = t(0); const n = t.n(r); const i = t(8); const s = t.n(i); const o = t(24); const c = t(5); const u = (t(73), t(53)); const l = t.n(u); const m = t(2); const d = t.n(m); const p = (d.a.string.isRequired, d.a.string.isRequired, d.a.string.isRequired, d.a.string.isRequired, { review: d.a.shape({
      title: d.a.string.isRequired, author: d.a.string.isRequired, message: d.a.string.isRequired,
    }) }); const v = (d.a.arrayOf(d.a.shape(p)).isRequired, d.a.string.isRequired, d.a.string.isRequired, d.a.string.isRequired, d.a.bool.isRequired, d.a.arrayOf({
      path: d.a.string.isRequired, name: d.a.string.isRequired, isExact: d.a.string.isRequired,
    }), d.a.node, d.a.node, d.a.node, {
      id: d.a.string.isRequired, name: d.a.string.isRequired, type: d.a.string.isRequired, minLength: d.a.number.isRequired, placeholder: d.a.string.isRequired, isRequired: d.a.bool.isRequired, label: d.a.string.isRequired,
    }); const f = {
      id: d.a.string.isRequired, name: d.a.string.isRequired, placeholder: d.a.string.isRequired, isRequired: d.a.bool.isRequired,
    }; const h = (Object(m.shape)(f), d.a.bool.isRequired, d.a.func.isRequired, Object(m.shape)(v), d.a.bool, d.a.func.isRequired, d.a.string.isRequired, d.a.func.isRequired, d.a.node.isRequired, d.a.node.isRequired, function(e) {
      const a = e.children;

      return n.a.createElement('header', { className: l.a.header }, a);
    }); const g = t(127); const E = t(41); const _ = t.n(E); const b = t(44); const w = t.n(b); const R = function(e) {
      const a = e.path; const t = e.name; const r = e.isExact;

      return n.a.createElement(o.c, {
        className: w.a.navigationLink, activeClassName: w.a.navigationLink_active, to: a, exact: r,
      }, t);
    }; const x = function(e) {
      const a = e.links;

      return n.a.createElement('nav', { className: _.a.navigation }, n.a.createElement('ul', { className: _.a.navigationList }, a.map(function(e) {
        return n.a.createElement('li', {
          className: _.a.navigationItem, key: Object(g.a)(),
        }, n.a.createElement(R, {
          path: e.path, name: e.name, isExact: e.isExact,
        }));
      })));
    }; const q = t(14); const k = t.n(q); const N = t(21); const y = t(33); const O = t(20); const j = t(54); const F = t.n(j); const L = t(55); const S = t.n(L); const T = function(e) {
      const a = e.title;

      return n.a.createElement('h1', { className: S.a.heading }, a);
    }; const C = t(56); const I = t.n(C); const A = t(57); const P = t.n(A); const M = function(e) {
      const a = e.title;

      return n.a.createElement('h6', { className: P.a.heading }, a);
    }; const H = t(34); const W = t.n(H); const B = function(e) {
      const a = e.date; const t = e.author;

      return n.a.createElement('div', { className: W.a.container }, n.a.createElement('span', { className: W.a.name }, t), n.a.createElement('span', { className: W.a.separator }), n.a.createElement('span', { className: W.a.date }, (function(e) {
        return new Intl.DateTimeFormat('en-US', {
          day: '2-digit', month: 'long', year: 'numeric',
        }).format(new Date(e));
      }(a))));
    }; const D = t(58); const G = t.n(D); const J = function(e) {
      const a = e.text;

      return n.a.createElement('p', { className: G.a.paragraph }, a);
    }; const z = function(e) {
      const a = e.review;

      return n.a.createElement('div', { className: I.a.review }, n.a.createElement(M, { title: a.title }), n.a.createElement(B, {
        date: a.date, author: a.author,
      }), n.a.createElement(J, { text: a.message }));
    }; const V = t(47); const Y = t.n(V); const Q = function() {
      return n.a.createElement('div', { className: Y.a.empty }, 'There are no reviews right now. Be the first.', ' ', n.a.createElement(o.b, {
        className: Y.a.link, to: '/addReview',
      }, 'Left review'));
    }; const X = function(e) {
      const a = e.reviews;

      return n.a.createElement('section', null, a.length > 0 ? a.map(function(e) {
        return n.a.createElement(z, {
          review: e, key: e.id,
        });
      }) : n.a.createElement(Q, null));
    }; const U = t(59); const Z = t.n(U); const K = function(e) {
      const a = e.children;

      return n.a.createElement('main', { className: Z.a.main }, a);
    }; const $ = ''.concat('https://guestbookhome.herokuapp.com/api', '/review'); const ee = (function() {
      const e = Object(N.a)(k.a.mark(function e() {
        let a, t;

        return k.a.wrap(function(e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:return e.next = 2, fetch($); case 2:if (!(a = e.sent).ok) {
                e.next = 8; break;
              }

                return e.next = 6, a.json(); case 6:return t = e.sent, e.abrupt('return', t.message); case 8:throw new Error('Server responded with '.concat(a.status, ' error')); case 9:case 'end':return e.stop();
            }
          }
        }, e);
      }));

      return function() {
        return e.apply(this, arguments);
      };
    }()); const ae = t(60); const te = t.n(ae); const re = function() {
      return n.a.createElement(te.a, {
        type: 'TailSpin', color: 'rgba(0, 0, 0, 0.5)', height: '5rem', width: '5rem',
      });
    }; const ne = function() {
      const e = Object(r.useState)([]); const a = Object(y.a)(e, 2); const t = a[0]; const i = a[1]; const s = Object(r.useState)(!1); const o = Object(y.a)(s, 2); const c = o[0]; const u = o[1]; const l = Object(O.e)();

      return Object(r.useEffect)(function() {
        (function() {
          const e = Object(N.a)(k.a.mark(function e() {
            let a;

            return k.a.wrap(function(e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:return e.prev = 0, u(!0), e.next = 4, ee(); case 4:a = e.sent, i(a), u(!1), e.next = 13; break; case 9:e.prev = 9, e.t0 = e.catch(0), u(!1), l.show('Ooops! Something went wrong. Try again later!'); case 13:case 'end':return e.stop();
                }
              }
            }, e, null, [[0, 9]]);
          }));

          return function() {
            return e.apply(this, arguments);
          };
        })()();
      }, [l]), n.a.createElement(K, null, n.a.createElement(T, { title: 'Guest Book' }), c ? n.a.createElement('div', { className: F.a.loader }, n.a.createElement(re, null)) : n.a.createElement(X, { reviews: t }));
    }; const ie = t(25); const se = t(26); const oe = t.n(se); const ce = t(35); const ue = t.n(ce); const le = t(48); const me = t.n(le); const de = function(e) {
      const a = e.children;

      return n.a.createElement('div', { className: me.a.formWrapper }, n.a.createElement('h6', { className: me.a.heading }, 'Submit review'), a);
    }; const pe = t(61); const ve = t.n(pe); const fe = function(e) {
      const a = e.handleSubmit; const t = e.children;

      return n.a.createElement('form', {
        className: ve.a.form, onSubmit: a,
      }, t);
    }; const he = t(42); const ge = t.n(he); const Ee = function(e) {
      const a = e.attributes; const t = e.onFocus; const r = e.error; const i = void 0 !== r && r;

      return n.a.createElement('label', {
        className: ge.a.label, htmlFor: a.id,
      }, a.label, n.a.createElement('input', {
        className: oe()(ge.a.input, Object(ie.a)({}, ge.a.inputError, i)), id: a.id, name: a.name, type: a.type, minLength: a.minLength, maxLength: a.maxLength, pattern: a.pattern, placeholder: a.placeholder, required: a.isRequired, onFocus: t,
      }));
    }; const _e = t(43); const be = t.n(_e); const we = function(e) {
      const a = e.attributes; const t = e.error; const r = e.onFocus;

      return n.a.createElement('label', {
        htmlFor: a.id, className: be.a.label,
      }, n.a.createElement('textarea', {
        className: oe()(be.a.textarea, Object(ie.a)({}, be.a.textareaError, t)), id: a.id, name: a.name, placeholder: a.placeholder, rows: a.rows, cols: a.cols, required: a.isRequired, onFocus: r,
      }));
    }; const Re = t(62); const xe = t.n(Re); const qe = function(e) {
      const a = e.text;

      return n.a.createElement('button', {
        className: xe.a.button, type: 'submit',
      }, a);
    }; const ke = {
      name: {
        id: 'author', name: 'author', type: 'text', minLength: 1, placeholder: 'Your name', isRequired: !1, label: 'Enter your name (is you wish):',
      },
      title: {
        id: 'title', name: 'title', type: 'text', minLength: 1, placeholder: 'Review title', isRequired: !0, label: 'Enter review title:',
      },
      message: {
        id: 'message', name: 'message', placeholder: 'Message', rows: 5, cols: 1, isRequired: !0,
      },
    }; const Ne = function(e) {
      const a = e.title; const t = e.author; const r = e.message;

      return {
        title: a.value.trim(), author: t.value.trim(), message: r.value.trim(),
      };
    }; const ye = ''.concat('https://guestbookhome.herokuapp.com/api', '/review/add'); const Oe = (function() {
      const e = Object(N.a)(k.a.mark(function e(a) {
        let t, r;

        return k.a.wrap(function(e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:return e.next = 2, fetch(ye, {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(a),
              }); case 2:if (!(t = e.sent).ok) {
                e.next = 8; break;
              }

                return e.next = 6, t.json(); case 6:return r = e.sent, e.abrupt('return', r.status); case 8:throw new Error('Server responded with '.concat(t.status, ' error')); case 9:case 'end':return e.stop();
            }
          }
        }, e);
      }));

      return function(a) {
        return e.apply(this, arguments);
      };
    }()); const je = function() {
      const e = Object(O.e)(); const a = Object(r.useState)(!1); const t = Object(y.a)(a, 2); const i = t[0]; const s = t[1]; const o = Object(c.g)(); const u = Object(r.useCallback)(function() {
        s(!1);
      }, []); const l = Object(r.useCallback)((function() {
        const a = Object(N.a)(k.a.mark(function a(t) {
          let r, n;

          return k.a.wrap(function(a) {
            for (;;) {
              switch (a.prev = a.next) {
                case 0:if (t.preventDefault(), r = t.target, n = Ne(r), !(i = n).title || !i.message) {
                  a.next = 16; break;
                }

                  return a.prev = 4, a.next = 7, Oe(n); case 7:a.sent ? (e.show('Review added'), r.reset(), setTimeout(function() {
                  o.push('/');
                }, 3100)) : e.show('Error. Try again!'), a.next = 14; break; case 11:a.prev = 11, a.t0 = a.catch(4), e.show('Server error. Try again, please!'); case 14:a.next = 17; break; case 16:s(!0); case 17:case 'end':return a.stop();
              }
            }

            let i;
          }, a, null, [[4, 11]]);
        }));

        return function(e) {
          return a.apply(this, arguments);
        };
      }()), [e, o]);

      return n.a.createElement(K, null, n.a.createElement(T, { title: 'Add Review' }), n.a.createElement(de, null, n.a.createElement(fe, { handleSubmit: l }, n.a.createElement('div', { className: ue.a.inputsGroup }, n.a.createElement(Ee, {
        attributes: ke.name, onFocus: u,
      }), n.a.createElement(Ee, {
        attributes: ke.title, error: i, onFocus: u,
      })), n.a.createElement(we, {
        attributes: ke.message, error: i, onFocus: u,
      }), n.a.createElement('div', { className: ue.a.formControl }, n.a.createElement(qe, { text: 'Submit' }), n.a.createElement('span', { className: oe()(ue.a.formErrorMessage, Object(ie.a)({}, ue.a.formErrorMessageShow, i)) }, 'Please, fill all required field')))));
    }; const Fe = t(63); const Le = t.n(Fe); const Se = {
      position: O.b.TOP_CENTER, timeout: 3e3, offset: '30px', transition: O.c.SCALE, type: O.d.ERROR,
    }; const Te = function(e) {
      const a = e.children;

      return n.a.createElement(O.a, Object.assign({ template: Le.a }, Se), a);
    }; const Ce = [{
      path: '/', name: 'Review', isExact: !0,
    }, {
      path: '/addReview', name: 'Add review', isExact: !0,
    }]; const Ie = function() {
      return n.a.createElement(Te, null, n.a.createElement('div', { className: 'App' }, n.a.createElement(o.a, null, n.a.createElement(h, null, n.a.createElement(x, { links: Ce })), n.a.createElement(c.d, null, n.a.createElement(c.b, {
        path: '/', exact: !0,
      }, n.a.createElement(ne, null)), n.a.createElement(c.b, {
        path: '/addReview', exact: !0,
      }, n.a.createElement(je, null)), n.a.createElement(c.b, { path: '*' }, n.a.createElement(c.a, { to: '/' }))))));
    };

    s.a.render(n.a.createElement(Ie, null), document.getElementById('root'));
  },
}, [[68, 1, 2]]]);
