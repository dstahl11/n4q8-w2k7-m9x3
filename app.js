/* Hugo and Theo School Stuff */
(function () {
  "use strict";

  const PIN = ["4", "4", "2", "3", "3", "5", "5", "7"].join("");
  const SESSION_KEY = "stahl-school-ok";
  const TZ = "America/New_York";

  const FALLBACK_DATA = {
  "lastUpdated": "2026-08-29T19:40:00-04:00",
  "timezone": "America/New_York",
  "familyName": "Hugo and Theo School Stuff",
  "kids": [
    {
      "id": "hugo",
      "name": "Hugo Stahl",
      "shortName": "Hugo",
      "gradeLabel": "rising 7th grade",
      "school": {
        "name": "The Red Oaks School",
        "level": "Middle School",
        "address": "238 Speedwell Ave, Morris Plains, NJ 07950",
        "portal": {
          "name": "Blackbaud",
          "url": "https://redoaksschool.myschoolapp.com/app"
        },
        "staff": [
          {
            "role": "Nurse",
            "name": "Gayle Gerardo",
            "email": "nurse@redoaksschool.org"
          },
          {
            "role": "Advisor 2025–26",
            "name": "Claudia Perez Lopez",
            "email": "cperez@redoaksschool.org"
          },
          {
            "role": "Login help",
            "name": "Jenna Buesser",
            "email": "jbuesser@redoaksschool.org"
          }
        ]
      },
      "transport": {
        "name": "Maplewood bus",
        "status": "committed",
        "pickup": "Pierson Road between Burnet and Valley",
        "starts": "2026-09-08T07:20:00-04:00",
        "startsNote": "Bus does not run the first week. Drive if Red Oaks is in session before Tue Sep 8.",
        "delayPickup": "9:20am ET",
        "delayRule": "2-hour delay → 9:20am pickup",
        "cost": "$2500/student",
        "closedIf": "If SOMSD or Morris SD is closed, no Maplewood bus even if Red Oaks is open."
      },
      "needsResponse": [
        {
          "id": "hugo-bts-medical",
          "title": "Back-to-school checklist + medical forms",
          "body": "Complete the Back-to-School Checklist and medical forms in Blackbaud. Medical forms were originally due Aug 15; the deadline was extended to Friday Sep 4.",
          "due": "2026-09-04",
          "path": "Blackbaud → Resources → Back-to-School Checklist",
          "href": "https://redoaksschool.myschoolapp.com/app",
          "hrefLabel": "Open Blackbaud",
          "contact": {
            "role": "Login help",
            "name": "Jenna Buesser",
            "email": "jbuesser@redoaksschool.org"
          }
        }
      ],
      "upcoming": [
        {
          "id": "hugo-bus-start",
          "title": "Maplewood bus starts",
          "body": "Pickup on Pierson Road between Burnet and Valley. Not the first week of school — drive until then if Red Oaks is in session.",
          "start": "2026-09-08T07:20:00-04:00",
          "location": "Pierson Road between Burnet and Valley"
        },
        {
          "id": "hugo-welcome-breakfast",
          "title": "Parent Welcome Back Breakfast",
          "body": "Middle School dining hall.",
          "start": "2026-09-10T08:30:00-04:00",
          "location": "Middle School dining hall",
          "uncertain": true,
          "uncertainNote": "Treating Thu Sep 10 as canonical (email subject said 9/10). An image alt text incorrectly said Fri Sep 5."
        }
      ],
      "scheduleNotes": [
        {
          "title": "First instructional day",
          "body": "Not listed in the mail — unknown. Drive Hugo if school is in session before the bus starts Tue Sep 8."
        },
        {
          "title": "Bus on delays and closures",
          "body": "2-hour delay → 9:20am pickup. If SOMSD or Morris SD is closed, the Maplewood bus does not run even if Red Oaks is open."
        }
      ]
    },
    {
      "id": "theo",
      "name": "Theodore Stahl",
      "shortName": "Theo",
      "gradeLabel": "3rd grade · 2026–27",
      "school": {
        "name": "Delia Bolden Elementary",
        "level": "SOMSD",
        "address": "518 Ridgewood Road, Maplewood, NJ 07040",
        "portal": {
          "name": "PowerSchool",
          "url": "https://www.somsdk12.org/powerschool"
        },
        "mailFrom": "somsd.k12.nj.us",
        "staff": [
          {
            "role": "Principal",
            "name": "Kimberly Hutchinson"
          },
          {
            "role": "Assistant Principal",
            "name": "Mr. Calissi"
          }
        ]
      },
      "transport": null,
      "needsResponse": [
        {
          "id": "theo-teacher",
          "title": "Get teacher assignment in PowerSchool",
          "body": "Posted Friday Aug 28. The school will not give teacher names by phone or email — check PowerSchool.",
          "posted": "2026-08-28",
          "href": "https://www.somsdk12.org/powerschool",
          "hrefLabel": "Open PowerSchool"
        },
        {
          "id": "theo-welcome-letter",
          "title": "Pick up one teacher welcome letter",
          "body": "File box outside the front door on Virginia Road. One letter per family.",
          "windowStart": "2026-08-31T10:00:00-04:00",
          "windowEnd": "2026-09-01",
          "location": "File box outside the front door, Virginia Road"
        },
        {
          "id": "theo-pta-captain",
          "title": "Bolden PTA class captain form",
          "body": "Optional. Sign up if you want to be a class captain.",
          "due": "2026-08-31T18:00:00-04:00",
          "optional": true,
          "href": "https://forms.gle/Fm9V2CB3DiYsGWRP6",
          "hrefLabel": "Open PTA form"
        },
        {
          "id": "theo-principal-email",
          "title": "Watch for first-day email from the principal",
          "body": "Principal said a Monday Aug 31 email is coming with first-day arrival, dismissal, and breakfast. Not in the inbox as of Saturday Aug 29. District mail comes from somsd.k12.nj.us.",
          "expected": "2026-08-31"
        }
      ],
      "upcoming": [
        {
          "id": "theo-first-day",
          "title": "SOMSD first day of school",
          "body": "Universal breakfast starts. Bell-to-bell smartphone, smartwatch, and earbud ban. Elementary Chromebooks stay at school.",
          "start": "2026-09-01",
          "location": "Delia Bolden Elementary"
        }
      ],
      "scheduleNotes": [
        {
          "title": "First day · Tue Sep 1",
          "body": "Universal breakfast starts this day. Bell-to-bell ban on smartphones, smartwatches, and earbuds. Elementary Chromebooks stay at school."
        },
        {
          "title": "District mail",
          "body": "Expect school mail from somsd.k12.nj.us."
        }
      ]
    }
  ],
  "daysOff": [
    {
      "id": "labor-day",
      "title": "Labor Day",
      "date": "2026-09-07",
      "confirmed": false,
      "note": "Public holiday — unconfirmed school closure"
    },
    {
      "id": "columbus-day",
      "title": "Columbus Day",
      "date": "2026-10-12",
      "confirmed": false,
      "note": "Public holiday — unconfirmed school closure"
    }
  ]
};

  const $ = (sel, el) => (el || document).querySelector(sel);

  function unlocked() {
    try { return sessionStorage.getItem(SESSION_KEY) === "1"; }
    catch (e) { return false; }
  }

  function setUnlocked() {
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch (e) {}
    document.documentElement.classList.add("unlocked");
  }

  /* —— dates —— */
  function parseStamp(value) {
    if (!value) return null;
    if (typeof value !== "string") return null;
    if (value.indexOf("T") !== -1) return new Date(value);
    return new Date(value + "T12:00:00-04:00");
  }

  function etParts(date) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).formatToParts(date);
    const get = (t) => {
      const p = parts.find((x) => x.type === t);
      return p ? p.value : "";
    };
    return {
      weekday: get("weekday"),
      month: get("month"),
      day: get("day"),
      year: get("year"),
      hour: get("hour"),
      minute: get("minute"),
      dayPeriod: get("dayPeriod")
    };
  }

  function startOfEtDay(date) {
    const p = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date);
    const get = (t) => p.find((x) => x.type === t).value;
    return new Date(get("year") + "-" + get("month") + "-" + get("day") + "T12:00:00-04:00");
  }

  function ymd(date) {
    const p = new Intl.DateTimeFormat("en-CA", {
      timeZone: TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date);
    return p;
  }

  function weekdayNum(date) {
    const w = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short" }).format(date);
    return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[w];
  }

  function hasTime(value) {
    return typeof value === "string" && value.indexOf("T") !== -1;
  }

  function fmtDay(date) {
    const p = etParts(date);
    return p.weekday + " " + p.month + " " + p.day;
  }

  function fmtDayYear(date) {
    const p = etParts(date);
    return p.weekday + " " + p.month + " " + p.day + ", " + p.year;
  }

  function fmtTime(date) {
    const p = etParts(date);
    const min = p.minute === "00" ? "" : ":" + p.minute;
    return p.hour + min + p.dayPeriod.toLowerCase();
  }

  function fmtWhen(value) {
    if (!value) return "";
    const d = parseStamp(value);
    if (!d || isNaN(d.getTime())) return "";
    if (hasTime(value)) return fmtDay(d) + ", " + fmtTime(d);
    return fmtDay(d);
  }

  function fmtUpdated(iso) {
    const d = parseStamp(iso);
    if (!d) return iso || "";
    const p = etParts(d);
    return p.weekday + " " + p.month + " " + p.day + ", " + p.hour + ":" + p.minute + " " + p.dayPeriod;
  }

  function sortDate(item) {
    return parseStamp(item.due || item.windowStart || item.expected || item.posted || item.start || item.date);
  }

  function daysUntil(value, now) {
    const d = parseStamp(value);
    if (!d) return null;
    const a = startOfEtDay(d).getTime();
    const b = startOfEtDay(now).getTime();
    return Math.round((a - b) / 86400000);
  }

  function isThisWeekend(value, now) {
    const d = parseStamp(value);
    if (!d) return false;
    const dueYmd = ymd(d);
    const dow = weekdayNum(now);
    const todayY = ymd(now);
    const start = startOfEtDay(now);
    let satOffset, sunOffset;
    if (dow === 6) { satOffset = 0; sunOffset = 1; }
    else if (dow === 0) { satOffset = -1; sunOffset = 0; }
    else { satOffset = 6 - dow; sunOffset = 7 - dow; }
    const sat = new Date(start.getTime() + satOffset * 86400000);
    const sun = new Date(start.getTime() + sunOffset * 86400000);
    const satY = ymd(sat);
    const sunY = ymd(sun);
    return dueYmd === satY || dueYmd === sunY;
  }

  function chipFor(item, now) {
    if (item.optional && !item.due && !item.windowEnd && !item.windowStart) {
      return { key: "optional", label: "Optional" };
    }
    const end = item.due || item.windowEnd || item.windowStart || item.expected;
    if (!end && item.posted) return { key: "open", label: "Open" };
    if (!end) return { key: "open", label: "Open" };
    const days = daysUntil(item.windowEnd || item.due || item.expected || item.windowStart, now);
    if (days === null) return { key: "open", label: "Open" };
    if (days < 0) return { key: "overdue", label: "Overdue" };
    if (days === 0) return { key: "today", label: "Today" };
    if (isThisWeekend(item.due || item.windowEnd || item.windowStart || item.expected, now)) {
      return { key: "weekend", label: "This weekend" };
    }
    if (days <= 7) return { key: "soon", label: "Soon" };
    return { key: "later", label: fmtDay(parseStamp(end)) };
  }

  function withinWeek(value, now) {
    const d = daysUntil(value, now);
    return d !== null && d >= 0 && d <= 7;
  }

  /* —— html —— */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function chipHtml(chip) {
    return '<span class="chip ' + esc(chip.key) + '">' + esc(chip.label) + "</span>";
  }

  function linkHtml(href, label) {
    if (!href) return "";
    const isMail = href.indexOf("mailto:") === 0;
    const extra = isMail ? "" : ' target="_blank" rel="noopener noreferrer"';
    return '<a href="' + esc(href) + '"' + extra + ">" + esc(label) + "</a>";
  }

  function whenLine(item) {
    if (item.windowStart && item.windowEnd) {
      return fmtWhen(item.windowStart) + " – " + fmtWhen(item.windowEnd);
    }
    if (item.due) {
      return "Due " + fmtWhen(item.due);
    }
    if (item.start) {
      return fmtWhen(item.start);
    }
    if (item.expected) {
      return "Expected " + fmtWhen(item.expected);
    }
    if (item.posted) {
      return "Posted " + fmtWhen(item.posted);
    }
    if (item.date) {
      return fmtWhen(item.date);
    }
    return "";
  }

  function itemLinks(item) {
    const bits = [];
    if (item.href) bits.push(linkHtml(item.href, item.hrefLabel || "Open"));
    if (item.contact && item.contact.email) {
      const name = item.contact.name || item.contact.email;
      const role = item.contact.role ? item.contact.role + ": " : "";
      bits.push(linkHtml("mailto:" + item.contact.email, role + name));
    }
    if (!bits.length) return "";
    return '<div class="item-links">' + bits.join("") + "</div>";
  }

  function renderItem(item, now, extraClass) {
    const chip = chipFor(item, now);
    const when = whenLine(item);
    let flag = "";
    if (item.uncertain) {
      flag = '<div class="flag">' + esc(item.uncertainNote || "Date slightly uncertain") + "</div>";
    }
    const path = item.path ? '<div class="path">' + esc(item.path) + "</div>" : "";
    const loc = item.location ? '<div class="path">' + esc(item.location) + "</div>" : "";
    const body = item.body ? "<p>" + esc(item.body) + "</p>" : "";
    const whenHtml = when
      ? '<div class="when">' + esc(when) + (item.optional ? ' <span class="opt">· optional</span>' : "") + "</div>"
      : (item.optional ? '<div class="when"><span class="opt">Optional</span></div>' : "");
    return (
      '<article class="item' + (extraClass ? " " + extraClass : "") + '">' +
        '<div class="item-top">' +
          "<h3>" + esc(item.title) + "</h3>" +
          chipHtml(chip) +
        "</div>" +
        body +
        whenHtml +
        path + loc + flag +
        itemLinks(item) +
      "</article>"
    );
  }

  function empty(text) {
    return '<p class="empty">' + esc(text) + "</p>";
  }

  function renderBits(kid) {
    const rows = [];
    const s = kid.school || {};
    if (s.portal && s.portal.url) {
      rows.push({
        k: "Portal",
        v: linkHtml(s.portal.url, s.portal.name || "Portal")
      });
    }
    if (s.address) rows.push({ k: "Address", v: esc(s.address) });
    (s.staff || []).forEach(function (person) {
      const label = person.role || "Contact";
      const name = person.name || "";
      const v = person.email
        ? linkHtml("mailto:" + person.email, name) +
          (person.email ? '<span class="muted">' + esc(person.email) + "</span>" : "")
        : esc(name);
      rows.push({ k: label, v: v });
    });
    if (s.mailFrom) {
      rows.push({ k: "Mail from", v: esc(s.mailFrom) });
    }
    const t = kid.transport;
    if (t) {
      const start = t.starts ? fmtWhen(t.starts) : "";
      rows.push({
        k: "Bus",
        v:
          "<strong>" + esc(t.name) + "</strong> · " + esc(t.status || "") +
          '<span class="muted">' + esc(t.pickup || "") + "</span>" +
          (start ? '<span class="muted">Starts ' + esc(start) + "</span>" : "") +
          (t.cost ? '<span class="muted">' + esc(t.cost) + "</span>" : "") +
          (t.delayRule ? '<span class="muted">' + esc(t.delayRule) + "</span>" : "") +
          (t.closedIf ? '<span class="muted">' + esc(t.closedIf) + "</span>" : "") +
          (t.startsNote ? '<span class="muted">' + esc(t.startsNote) + "</span>" : "")
      });
    }
    if (!rows.length) return empty("No handy links yet.");
    return (
      '<dl class="bits">' +
      rows
        .map(function (r) {
          return '<div class="bit"><dt>' + esc(r.k) + "</dt><dd>" + r.v + "</dd></div>";
        })
        .join("") +
      "</dl>"
    );
  }

  function renderKid(kid, data, now) {
    const needs = (kid.needsResponse || []).slice().sort(function (a, b) {
      const da = sortDate(a);
      const db = sortDate(b);
      const ta = da ? da.getTime() : Infinity;
      const tb = db ? db.getTime() : Infinity;
      return ta - tb;
    });
    const upcoming = kid.upcoming || [];
    const thisWeek = upcoming.filter(function (ev) {
      return withinWeek(ev.start, now);
    });
    const later = upcoming.filter(function (ev) {
      const d = daysUntil(ev.start, now);
      return d !== null && d > 7;
    });
    const days = (data.daysOff || []).slice().filter(function (d) {
      const n = daysUntil(d.date, now);
      return n === null || n >= 0;
    }).sort(function (a, b) {
      return (parseStamp(a.date) || 0) - (parseStamp(b.date) || 0);
    });
    const notes = kid.scheduleNotes || [];

    const schoolLine = [kid.school && kid.school.name, kid.gradeLabel]
      .filter(Boolean)
      .join(" · ");

    function list(items, emptyText) {
      if (!items.length) return empty(emptyText);
      return items.map(function (it) { return renderItem(it, now); }).join("");
    }

    const scheduleHtml =
      (notes.length
        ? notes
            .map(function (n) {
              return (
                '<article class="item"><h3>' +
                esc(n.title) +
                "</h3><p>" +
                esc(n.body) +
                "</p></article>"
              );
            })
            .join("")
        : "") +
      days
        .map(function (d) {
          const when = fmtDayYear(parseStamp(d.date));
          const tag = d.confirmed
            ? ""
            : '<p class="unconfirmed">' + esc(d.note || "Unconfirmed school closure") + "</p>";
          return (
            '<article class="item"><div class="item-top"><h3>' +
            esc(d.title) +
            '</h3><span class="chip later">Day off</span></div>' +
            '<div class="when">' +
            esc(when) +
            "</div>" +
            tag +
            "</article>"
          );
        })
        .join("");

    return (
      '<section class="kid" data-kid="' + esc(kid.id) + '">' +
        '<header class="kid-head">' +
          '<div class="mono" aria-hidden="true">' + esc((kid.shortName || "?").charAt(0)) + "</div>" +
          "<div>" +
            "<h2>" + esc(kid.shortName) + "</h2>" +
            '<p class="kid-sub">' + esc(schoolLine) + "</p>" +
          "</div>" +
        "</header>" +
        '<div class="kid-body">' +
          '<div class="block"><div class="section-label">To do</div>' +
            list(needs, "Nothing waiting.") +
          "</div>" +
          '<div class="block"><div class="section-label">This week</div>' +
            list(thisWeek, "Nothing on the calendar this week.") +
          "</div>" +
          '<div class="block"><div class="section-label">Later</div>' +
            list(later, "Nothing further out yet.") +
          "</div>" +
          '<div class="block"><div class="section-label">Days off</div>' +
            (scheduleHtml || empty("No schedule notes.")) +
          "</div>" +
          '<div class="block"><div class="section-label">Contacts</div>' +
            renderBits(kid) +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function collectNeeds(data) {
    const out = [];
    (data.kids || []).forEach(function (kid) {
      (kid.needsResponse || []).forEach(function (item) {
        out.push({ kid: kid, item: item });
      });
    });
    out.sort(function (a, b) {
      const da = sortDate(a.item);
      const db = sortDate(b.item);
      const ta = da ? da.getTime() : Infinity;
      const tb = db ? db.getTime() : Infinity;
      if (ta !== tb) return ta - tb;
      return 0;
    });
    return out;
  }

  function renderStrip(data, now) {
    const rows = collectNeeds(data);
    if (!rows.length) {
      return (
        '<section class="needs-you">' +
          '<div class="section-label">Do this</div>' +
          empty("Nothing right now.") +
        "</section>"
      );
    }
    const html = rows
      .map(function (row) {
        const item = row.item;
        const kid = row.kid;
        const chip = chipFor(item, now);
        const when = whenLine(item);
        const opt = item.optional ? " · optional" : "";
        return (
          '<article class="strip-item" data-kid="' + esc(kid.id) + '">' +
            '<span class="pip" aria-hidden="true"></span>' +
            '<div class="strip-body">' +
              '<p class="strip-kid">' + esc(kid.shortName) + "</p>" +
              '<p class="strip-title">' + esc(item.title) + "</p>" +
              (when ? '<p class="strip-meta">' + esc(when + opt) + "</p>" : "") +
            "</div>" +
            chipHtml(chip) +
          "</article>"
        );
      })
      .join("");
    return (
      '<section class="needs-you" aria-label="Do this">' +
        '<div class="section-label">Do this <span class="count">' +
        rows.length +
        "</span></div>" +
        '<div class="strip">' +
        html +
        "</div>" +
      "</section>"
    );
  }

  function renderApp(data) {
    const now = new Date();
    const family = data.familyName || "Family";
    const kids = (data.kids || [])
      .map(function (kid) { return renderKid(kid, data, now); })
      .join("");
    return (
      '<header class="letterhead">' +
        "<h1>" + esc(family) + "</h1>" +
        '<p class="updated">Updated <time datetime="' + esc(data.lastUpdated) + '">' +
          esc(fmtUpdated(data.lastUpdated)) +
        "</time> · ET</p>" +
      "</header>" +
      renderStrip(data, now) +
      kids +
      ''
    );
  }

  async function loadData() {
    try {
      const res = await fetch("./data.json", { cache: "no-store" });
      if (!res.ok) throw new Error("status " + res.status);
      return await res.json();
    } catch (err) {
      return FALLBACK_DATA;
    }
  }

  function mountGate() {
    const gate = $("#gate");
    const dots = $("#pin-dots");
    const err = $("#pin-err");
    const pad = $("#pin-pad");
    let value = "";

    function paint() {
      const spans = dots.querySelectorAll("span");
      for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("on", i < value.length);
      }
    }

    function fail() {
      gate.classList.remove("shake");
      void gate.offsetWidth;
      gate.classList.add("shake");
      err.textContent = "Wrong PIN";
      value = "";
      paint();
    }

    function commit() {
      if (value === PIN) {
        err.textContent = "";
        setUnlocked();
        bootApp();
        return;
      }
      fail();
    }

    function push(ch) {
      if (value.length >= PIN.length) return;
      err.textContent = "";
      value += ch;
      paint();
      if (value.length === PIN.length) commit();
    }

    function back() {
      value = value.slice(0, -1);
      err.textContent = "";
      paint();
    }

    pad.addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      const k = btn.getAttribute("data-k");
      if (k === "del") back();
      else if (k) push(k);
    });

    window.addEventListener("keydown", function (e) {
      if (document.documentElement.classList.contains("unlocked")) return;
      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        push(e.key);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        back();
      } else if (e.key === "Escape") {
        value = "";
        paint();
      }
    });

    paint();
  }

  async function bootApp() {
    const root = $("#app");
    try {
      const data = await loadData();
      root.innerHTML = renderApp(data);
    } catch (err) {
      root.innerHTML =
        '<p class="empty">Could not load the dashboard. Check data.json.</p>';
    }
    root.hidden = false;
  }

  function init() {
    if (unlocked()) {
      document.documentElement.classList.add("unlocked");
      bootApp();
    } else {
      mountGate();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
